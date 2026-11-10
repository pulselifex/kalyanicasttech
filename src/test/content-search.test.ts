import { describe, expect, it } from "vitest";
import { searchPages } from "@/content/search";

describe("Approved content search", () => {
  it("returns the actual terminal page for inland container terminal", () => {
    expect(
      searchPages("inland container terminal").some(
        (p) => p.url === "/shivlakha-rail-logistics/inland-container-terminal",
      ),
    ).toBe(true);
  });
  it("does not fabricate results for absent subjects", () => {
    expect(searchPages("zzunapproved999")).toEqual([]);
  });
});
