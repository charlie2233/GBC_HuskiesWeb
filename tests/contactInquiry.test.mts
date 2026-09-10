import assert from "node:assert/strict";
import test from "node:test";
import { basketballPrograms, getInquiryProgram, interestTypes, needsPlayerDetails } from "../lib/contactInquiry.ts";

test("team links resolve to the matching inquiry program", () => {
  for (const program of basketballPrograms) {
    assert.equal(getInquiryProgram(program.id)?.name, program.name);
  }
});

test("unknown or repeated program parameters do not prefill the inquiry", () => {
  for (const value of [undefined, "", "other", "<script>", ["beginner", "advanced"], ["beginner"]]) {
    assert.equal(getInquiryProgram(value), undefined);
  }
});

test("only player enrollment and training inquiries require player details", () => {
  for (const interest of interestTypes) {
    assert.equal(needsPlayerDetails(interest), ["Joining a team", "Skills development", "Strength & conditioning"].includes(interest));
  }
  assert.equal(needsPlayerDetails(""), false);
});
