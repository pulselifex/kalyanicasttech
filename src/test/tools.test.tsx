import { describe, expect, it } from "vitest";
import { MASTERPLAN_ZONES } from "@/components/site/ShivlakhaInteractiveMasterplan";

describe("Shivlakha Verified Siding & Master Plan Specifications", () => {
  it("confirms North Platform siding length is 720 m × 30 m", () => {
    const northPlatform = MASTERPLAN_ZONES.find((z) => z.id === "zone-01");
    expect(northPlatform).toBeDefined();
    expect(northPlatform?.dimBadge).toBe("720 m (L) × 30 m (W)");
  });

  it("confirms South Platform siding length is 720 m × 20 m", () => {
    const southPlatform = MASTERPLAN_ZONES.find((z) => z.id === "zone-02");
    expect(southPlatform).toBeDefined();
    expect(southPlatform?.dimBadge).toBe("720 m (L) × 20 m (W)");
  });

  it("confirms Zone 06 container factory envelope has no unverified '1 Lac' capacity claims", () => {
    const containerFactory = MASTERPLAN_ZONES.find((z) => z.id === "zone-06");
    expect(containerFactory).toBeDefined();
    expect(containerFactory?.dimBadge).not.toContain("1 Lac");
    expect(containerFactory?.dimBadge).toContain("60-Acre Master Plan Envelope");
  });
});
