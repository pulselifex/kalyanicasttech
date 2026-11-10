import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Train,
  Boxes,
  CalendarCheck2,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Loader2,
} from "lucide-react";
import { SiteLink } from "./SiteLink";

type QuickMode = "cargo" | "quote" | "visit";

interface QuickCommercialCaptureProps {
  initialMode?: QuickMode;
  className?: string;
}

export function QuickCommercialCapture({
  initialMode = "cargo",
  className = "",
}: QuickCommercialCaptureProps) {
  const [activeMode, setActiveMode] = useState<QuickMode>(initialMode);

  // Shared fields
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contactInfo, setContactInfo] = useState(""); // phone or email

  // Mode A fields
  const [commodity, setCommodity] = useState("");
  const [originDestination, setOriginDestination] = useState("");

  // Mode B fields
  const [categoryModel, setCategoryModel] = useState("");
  const [payloadQuantity, setPayloadQuantity] = useState("");

  // Mode C fields
  const [siteSelection, setSiteSelection] = useState<"Rewari Works" | "Shivlakha Integrated Rail & Logistics Hub">(
    "Shivlakha Integrated Rail & Logistics Hub",
  );
  const [preferredDate, setPreferredDate] = useState("");

  // State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [routingNote, setRoutingNote] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMsg(null);

    // Validation
    if (!name.trim()) {
      setErrorMsg("Please provide your full name and designation.");
      return;
    }
    if (!company.trim()) {
      setErrorMsg("Please provide your company or organisation name.");
      return;
    }
    if (!contactInfo.trim()) {
      setErrorMsg("Please provide your phone number or business email.");
      return;
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactInfo.trim());
    const emailVal = isEmail ? contactInfo.trim() : `enquiry+${Date.now()}@kalyanicasttech.com`;
    const phoneVal = !isEmail ? contactInfo.trim() : "+91-0000000000";

    let payload: Record<string, unknown> = {};
    let note = "";

    if (activeMode === "cargo") {
      if (!commodity.trim() || !originDestination.trim()) {
        setErrorMsg("Please specify both Commodity Type and Origin → Destination.");
        return;
      }
      note = "Submits to terminal.head@kalyanicasttech.com & business.development@kalyanicasttech.com";
      payload = {
        kind: "unified",
        enquiryType: "Shivlakha Cargo Movement Evaluation",
        company: company.trim(),
        contact: name.trim(),
        email: emailVal,
        phone: phoneVal,
        cargo: commodity.trim(),
        originDestination: originDestination.trim(),
        notes: `Quick Commercial Capture [Mode A - Shivlakha Cargo]. Contact Info: ${contactInfo}. Route: ${originDestination}`,
        consent: true,
      };
    } else if (activeMode === "quote") {
      if (!categoryModel.trim()) {
        setErrorMsg("Please specify Model / Part Category.");
        return;
      }
      note = "Submits to business.development@kalyanicasttech.com & info@kalyanicasttech.com";
      payload = {
        kind: "unified",
        enquiryType: "Container Purchase / Custom Build",
        company: company.trim(),
        contact: name.trim(),
        email: emailVal,
        phone: phoneVal,
        cargo: categoryModel.trim(),
        notes: `Quick Commercial Capture [Mode B - Quote Request]. Contact Info: ${contactInfo}. Model/Part: ${categoryModel}. Payload/Qty: ${payloadQuantity || "N/A"}`,
        consent: true,
      };
    } else {
      note = "Submits to business.development@kalyanicasttech.com";
      payload = {
        kind: "unified",
        enquiryType: "Vendor / General Enquiry",
        company: company.trim(),
        contact: name.trim(),
        email: emailVal,
        phone: phoneVal,
        cargo: `Plant/Terminal Visit: ${siteSelection}`,
        notes: `Quick Commercial Capture [Mode C - Facility Visit]. Site: ${siteSelection}. Preferred Date: ${preferredDate || "Earliest available"}. Contact: ${contactInfo}`,
        consent: true,
      };
    }

    setIsSubmitting(true);
    setRoutingNote(note);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setSubmitted(false);
        setErrorMsg(
          data.message ||
            "Submission could not be completed. Please contact our commercial desk directly at info@kalyanicasttech.com or telephone +91 11 28084541 / +91 1274 256789.",
        );
      }
    } catch {
      setSubmitted(false);
      setErrorMsg(
        "Transmission error: Unable to route your enquiry to the server. Please contact our commercial desk directly at info@kalyanicasttech.com or telephone +91 11 28084541 / +91 1274 256789.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className={`rounded-2xl border border-[#b8c9e5] bg-gradient-to-b from-[#0a1f3d] to-[#07162c] p-6 sm:p-10 text-white shadow-xl ${className}`}
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-white/15 pb-6">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-400">
            Commercial &amp; Movement Enquiry
          </span>
          <h2 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl text-white">
            Connect with Kalyani Cast Tech Commercial Teams
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-white/80 max-w-2xl leading-relaxed">
            Submit cargo, product specification or facility visit parameters for review by designated engineering and
            terminal officers.
          </p>
        </div>

        {/* Mode Selector Tabs */}
        <div className="flex flex-wrap gap-2 p-1 rounded-xl bg-white/10 border border-white/15">
          <button
            type="button"
            onClick={() => {
              setActiveMode("cargo");
              setSubmitted(false);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === "cargo"
                ? "bg-[#1b4b96] text-white shadow-md"
                : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            <Train className="h-3.5 w-3.5" />
            1. Evaluate Shivlakha Cargo Movement
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode("quote");
              setSubmitted(false);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === "quote"
                ? "bg-[#1b4b96] text-white shadow-md"
                : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            <Boxes className="h-3.5 w-3.5" />
            2. Request Container / Wagon / Casting Quote
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveMode("visit");
              setSubmitted(false);
            }}
            className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold transition-all ${
              activeMode === "visit"
                ? "bg-[#1b4b96] text-white shadow-md"
                : "text-white/80 hover:text-white hover:bg-white/5"
            }`}
          >
            <CalendarCheck2 className="h-3.5 w-3.5" />
            3. Schedule Plant or Terminal Visit (Rewari / Shivlakha)
          </button>
        </div>
      </div>

      {submitted ? (
        <div className="mt-8 rounded-xl border border-emerald-500/50 bg-emerald-950/40 p-6 text-center text-emerald-200">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-white">
            Quick Enquiry Transmitted Successfully
          </h3>
          <p className="mt-1 text-xs text-emerald-200/90 max-w-lg mx-auto leading-relaxed">
            Thank you, {name}. Your qualification request has been routed to our commercial team.
          </p>
          <div className="mt-3 inline-block font-mono text-[11px] text-emerald-400 bg-emerald-950/80 px-3 py-1 rounded border border-emerald-500/30">
            {routingNote}
          </div>
          <div className="mt-5">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                setName("");
                setCompany("");
                setContactInfo("");
                setCommodity("");
                setOriginDestination("");
                setCategoryModel("");
                setPayloadQuantity("");
                setPreferredDate("");
              }}
              className="border-white/20 text-white hover:bg-white/10"
            >
              Submit Another Quick Request
            </Button>
          </div>
        </div>
      ) : (
        <form method="POST" action="/api/enquiries" onSubmit={handleSubmit} className="mt-8 space-y-6">
          {errorMsg && (
            <div className="flex items-center gap-2 rounded-lg bg-red-900/40 border border-red-500/40 p-3 text-xs text-red-200">
              <ShieldAlert className="h-4 w-4 shrink-0 text-red-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Form Fields Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Field 1: Name & Designation */}
            <div>
              <Label className="text-xs font-semibold text-white/90">
                Contact Person &amp; Designation <span className="text-emerald-400">*</span>
              </Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Rajesh Sharma, VP Logistics"
                className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                required
              />
            </div>

            {/* Field 2: Company Name */}
            <div>
              <Label className="text-xs font-semibold text-white/90">
                Company / Organisation Name <span className="text-emerald-400">*</span>
              </Label>
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="e.g. Adani Logistics / Tata Steel"
                className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                required
              />
            </div>

            {/* Field 3: Phone / Business Email */}
            <div>
              <Label className="text-xs font-semibold text-white/90">
                Phone Number or Business Email <span className="text-emerald-400">*</span>
              </Label>
              <Input
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                placeholder="e.g. +91-9876543210 or logistics@corp.com"
                className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                required
              />
            </div>

            {/* Mode-specific Fields */}
            {activeMode === "cargo" && (
              <>
                <div>
                  <Label className="text-xs font-semibold text-white/90">
                    Commodity Type <span className="text-emerald-400">*</span>
                  </Label>
                  <Input
                    value={commodity}
                    onChange={(e) => setCommodity(e.target.value)}
                    placeholder="e.g. Bulk Salt, Soda Ash, HR Coils, Cement"
                    className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-xs font-semibold text-white/90">
                    Origin &rarr; Destination Corridor <span className="text-emerald-400">*</span>
                  </Label>
                  <Input
                    value={originDestination}
                    onChange={(e) => setOriginDestination(e.target.value)}
                    placeholder="e.g. Shivlakha Gati Shakti Terminal → Rewari / NCR (Broad-gauge rail movement)"
                    className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                    required
                  />
                </div>
              </>
            )}

            {activeMode === "quote" && (
              <>
                <div>
                  <Label className="text-xs font-semibold text-white/90">
                    Model or Casting Category <span className="text-emerald-400">*</span>
                  </Label>
                  <Input
                    value={categoryModel}
                    onChange={(e) => setCategoryModel(e.target.value)}
                    placeholder="e.g. 40' Side Access Dwarf Container / Heavy Coiltainer"
                    className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-xs font-semibold text-white/90">
                    Payload &amp; Quantity Estimate
                  </Label>
                  <Input
                    value={payloadQuantity}
                    onChange={(e) => setPayloadQuantity(e.target.value)}
                    placeholder="e.g. 100 units · 35 MT payload requirement · Delivery Q1 2027"
                    className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                  />
                </div>
              </>
            )}

            {activeMode === "visit" && (
              <>
                <div>
                  <Label className="text-xs font-semibold text-white/90">
                    Select Operating Facility <span className="text-emerald-400">*</span>
                  </Label>
                  <select
                    value={siteSelection}
                    onChange={(e) =>
                      setSiteSelection(e.target.value as "Rewari Works" | "Shivlakha Integrated Rail & Logistics Hub")
                    }
                    className="mt-1.5 h-10 w-full rounded-md border border-white/20 bg-[#0e2a55] px-3 text-xs text-white focus:border-emerald-400"
                  >
                    <option value="Shivlakha Integrated Rail & Logistics Hub">
                      Shivlakha Integrated Rail &amp; Logistics Hub (Bhachau, Kachchh, Gujarat)
                    </option>
                    <option value="Rewari Works">
                      Rewari Manufacturing Works &amp; Class A Foundry (Rewari, Haryana)
                    </option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <Label className="text-xs font-semibold text-white/90">Preferred Visit Date</Label>
                  <Input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="mt-1.5 h-10 border-white/20 bg-white/10 text-white placeholder:text-white/40 focus:border-emerald-400"
                  />
                </div>
              </>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="font-mono text-[11px] text-white/70">
              {activeMode === "cargo" && (
                <span>
                  &rarr; Routes to: <strong className="text-emerald-400">terminal.head@kalyanicasttech.com</strong> &amp; <strong className="text-emerald-400">business.development@kalyanicasttech.com</strong>
                </span>
              )}
              {activeMode === "quote" && (
                <span>
                  &rarr; Routes to: <strong className="text-emerald-400">business.development@kalyanicasttech.com</strong> &amp; <strong className="text-emerald-400">info@kalyanicasttech.com</strong>
                </span>
              )}
              {activeMode === "visit" && (
                <span>
                  &rarr; Routes to: <strong className="text-emerald-400">business.development@kalyanicasttech.com</strong>
                </span>
              )}
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="h-11 w-full sm:w-auto rounded-md bg-emerald-500 px-8 text-xs font-extrabold text-slate-950 hover:bg-emerald-400 shadow-lg transition-all"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  Transmit Commercial Request <ArrowRight className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}

      {/* RFP Link */}
      <div className="mt-6 pt-5 border-t border-white/10 text-center">
        <SiteLink
          to="/contact#enquiry-form"
          className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-amber-300 transition-colors"
        >
          <span>Need to attach drawings or submit a detailed 10-field RFP?</span>
          <strong className="underline underline-offset-4">Open Full Technical Enquiry Desk (/contact/#enquiry-form) &rarr;</strong>
        </SiteLink>
      </div>
    </div>
  );
}
