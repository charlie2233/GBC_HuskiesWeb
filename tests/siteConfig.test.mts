import assert from "node:assert/strict";
import test from "node:test";
import {
  currentTeamRange,
  formspreeEndpoint,
  reviewFormEndpoint,
} from "../lib/siteConfig.ts";

test("contact and review forms always have secure submission endpoints", () => {
  assert.equal(new URL(formspreeEndpoint).protocol, "https:");
  assert.equal(new URL(reviewFormEndpoint).protocol, "https:");
});

test("the public team range matches the active program", () => {
  assert.equal(currentTeamRange, "13U-15U");
});
