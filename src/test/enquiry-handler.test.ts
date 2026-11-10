import { beforeEach, describe, expect, it } from "vitest";
import {
  extractClientIp,
  handleEnquirySubmission,
  resetRateLimitsForTesting,
} from "@/lib/enquiry-handler";

describe("Enquiry Submission Security & Validation Engine", () => {
  beforeEach(() => {
    resetRateLimitsForTesting();
  });

  describe("HTTP Method Enforcement", () => {
    it("rejects non-POST requests with 405 Method Not Allowed and sets Allow header", async () => {
      const getReq = new Request("http://localhost/api/enquiries", { method: "GET" });
      const res = await handleEnquirySubmission(getReq, "192.168.1.1");
      expect(res.status).toBe(405);
      expect(res.headers.get("Allow")).toBe("POST");
      const body = await res.json();
      expect(body.success).toBe(false);
      expect(body.message).toContain("Method Not Allowed");
    });
  });

  describe("Request Size Enforcement", () => {
    it("rejects oversized request header content-length (>50 KB) with 413 Payload Too Large", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Content-Length": "60000",
        },
        body: JSON.stringify({ kind: "general", company: "Test" }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.2");
      expect(res.status).toBe(413);
      const body = await res.json();
      expect(body.success).toBe(false);
      expect(body.message).toContain("exceeds maximum permitted limit");
    });

    it("rejects oversized stream body (>50 KB) even if Content-Length header is omitted", async () => {
      const hugePadding = "A".repeat(55 * 1024);
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "general",
          company: "Test Co",
          contact: "Tester",
          email: "test@example.com",
          details: hugePadding,
          consent: true,
        }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.3");
      expect(res.status).toBe(413);
      const body = await res.json();
      expect(body.success).toBe(false);
      expect(body.message).toContain("exceeds maximum permitted limit");
    });
  });

  describe("Rate Limiting Enforcement", () => {
    it("permits up to 5 requests per minute, then returns 429 Too Many Requests", async () => {
      const clientIp = "10.0.0.99";
      const validPayload = {
        kind: "general",
        company: "Test Company Ltd",
        contact: "Director",
        email: "director@test.com",
        details: "General commercial enquiry",
        consent: true,
      };

      // 5 permitted requests
      for (let i = 0; i < 5; i++) {
        const req = new Request("http://localhost/api/enquiries", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(validPayload),
        });
        const res = await handleEnquirySubmission(req, clientIp);
        expect(res.status).toBe(200);
      }

      // 6th request must be rate-limited
      const rateLimitedReq = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validPayload),
      });
      const resRateLimited = await handleEnquirySubmission(rateLimitedReq, clientIp);
      expect(resRateLimited.status).toBe(429);
      expect(resRateLimited.headers.get("Retry-After")).toBe("60");
      const body = await resRateLimited.json();
      expect(body.success).toBe(false);
      expect(body.message).toContain("Too many submission attempts");
    });
  });

  describe("Client IP Trust Boundaries", () => {
    it("prioritizes authoritative cf-connecting-ip over spoofed x-forwarded-for", () => {
      const req = new Request("http://localhost/api/enquiries", {
        headers: {
          "cf-connecting-ip": "203.0.113.195",
          "x-forwarded-for": "10.0.0.1, 10.0.0.2",
        },
      });
      expect(extractClientIp(req)).toBe("203.0.113.195");
    });

    it("extracts and sanitizes the first IP in x-forwarded-for when behind standard reverse proxy", () => {
      const req = new Request("http://localhost/api/enquiries", {
        headers: {
          "x-forwarded-for": "198.51.100.42, 10.0.0.1",
        },
      });
      expect(extractClientIp(req)).toBe("198.51.100.42");
    });
  });

  describe("Validation & Normalization", () => {
    it("rejects malformed requests missing mandatory fields with 422 Unprocessable Entity", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "general", contact: "" }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.10");
      expect(res.status).toBe(422);
      const body = await res.json();
      expect(body.success).toBe(false);
      expect(body.errors).toBeDefined();
      expect(body.errors.contact).toBeDefined();
      expect(body.errors.company).toBeDefined();
      expect(body.errors.email).toBeDefined();
      expect(body.errors.consent).toBeDefined();
    });

    it("rejects invalid email formats", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "general",
          company: "Test Co",
          contact: "Tester",
          email: "not-a-valid-email",
          details: "Interested in container specifications",
          consent: true,
        }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.11");
      expect(res.status).toBe(422);
      const body = await res.json();
      expect(body.errors.email).toBe("Enter a valid email address.");
    });

    it("validates Container Enquiry (Kind A) fields correctly", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "A",
          company: "Global Logistics Corp",
          contact: "Mr. Sharma",
          email: "sharma@example.com",
          phone: "+91 98765 43210",
          category: "Container Purchase / Custom Build",
          product: "40ft High Cube Cotton Bale Container",
          cargo: "Cotton Bales",
          qty: "50 Units",
          consent: true,
        }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.12");
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.enquiryId).toMatch(/^KCT-[A-Z0-9]+$/);
      expect(body.mode).toBe("preview");
      expect(body.message).toContain("Preview Mode");
    });

    it("validates Logistics & Terminal Enquiry (Kind B) fields correctly", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "B",
          company: "Adani Ports Logistics Partner",
          contact: "Operations Head",
          email: "ops@partner.com",
          phone: "+91 22 5555 1234",
          category: "Shivlakha Cargo Movement Evaluation",
          cargo: "Industrial Minerals",
          route: "Mundra to Rewari rail corridor",
          volume: "3 Rakes monthly",
          consent: true,
        }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.13");
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.enquiryId).toMatch(/^KCT-[A-Z0-9]+$/);
      expect(body.mode).toBe("preview");
    });

    it("validates unified 10-field Business Enquiry Form per Section 11", async () => {
      const req = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "unified",
          enquiryType: "Container Purchase / Custom Build",
          company: "Container Fleet Solutions",
          contact: "Anil Verma, Head of Fleet Procurement",
          email: "anil.verma@fleet.com",
          phone: "+91 98111 22334",
          cargo: "Model 05 40ft Side Access Dwarf Container",
          volumeFrequency: "100 Units over 6 months",
          notes: "Requires FRP composite floor with modified 242x115x178mm corner castings",
          consent: true,
        }),
      });
      const res = await handleEnquirySubmission(req, "192.168.1.14");
      expect(res.status).toBe(200);
      const body = await res.json();
      expect(body.success).toBe(true);
      expect(body.enquiryId).toMatch(/^KCT-[A-Z0-9]+$/);
      expect(body.mode).toBe("preview");
    });

    it("enforces dynamic requirement of origin and destination for Shivlakha Cargo Movement Evaluation", async () => {
      // Missing originDestination -> should fail with 422
      const invalidReq = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "unified",
          enquiryType: "Shivlakha Cargo Movement Evaluation",
          company: "Kachchh Minerals Corp",
          contact: "Vikram Dave",
          email: "vdave@kachchhminerals.com",
          phone: "+91 94260 11223",
          cargo: "Bauxite and Silica Sand",
          originDestination: "", // Empty originDestination
          consent: true,
        }),
      });
      const failRes = await handleEnquirySubmission(invalidReq, "192.168.1.15");
      expect(failRes.status).toBe(422);
      const failBody = await failRes.json();
      expect(failBody.errors.originDestination).toBeDefined();

      // Provided originDestination -> should succeed with 200
      const validReq = new Request("http://localhost/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "unified",
          enquiryType: "Shivlakha Cargo Movement Evaluation",
          company: "Kachchh Minerals Corp",
          contact: "Vikram Dave",
          email: "vdave@kachchhminerals.com",
          phone: "+91 94260 11223",
          cargo: "Bauxite and Silica Sand",
          originDestination: "Shivlakha Gati Shakti Terminal Platform to Mundra Port",
          consent: true,
        }),
      });
      const passRes = await handleEnquirySubmission(validReq, "192.168.1.16");
      expect(passRes.status).toBe(200);
      const passBody = await passRes.json();
      expect(passBody.success).toBe(true);
    });
  });
});
