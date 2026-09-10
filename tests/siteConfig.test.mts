import assert from "node:assert/strict";
import test from "node:test";
import {
  areaServed,
  currentTeamRange,
  formspreeEndpoint,
  programRegions,
  reviewFormEndpoint,
} from "../lib/siteConfig.ts";

test("contact and review forms always have secure submission endpoints", () => {
  assert.equal(new URL(formspreeEndpoint).protocol, "https:");
  assert.equal(new URL(reviewFormEndpoint).protocol, "https:");
});

test("the public team range matches the active program", () => {
  assert.equal(currentTeamRange, "8U-16U");
});

test("both program counties are included in public and structured location data", () => {
  assert.deepEqual(programRegions, ["Orange County", "Fresno County"]);
  for (const region of programRegions) assert.ok(areaServed.includes(region));
});
