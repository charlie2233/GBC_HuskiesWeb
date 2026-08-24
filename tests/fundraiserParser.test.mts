import assert from "node:assert/strict";
import test from "node:test";
import { parseGoFundMeStats } from "../lib/fundraiserParser.ts";

const slug = "sd6zec-help-the-huskies";

function fundraiserRecord(overrides = "") {
  return `<script>{"Fundraiser:95285331":{"__typename":"Fundraiser","currentAmount":{"__typename":"Money","amount":720,"currencyCode":"USD"},"defaultSlug":"${slug}","donationCount":7,${overrides}"goalAmount":{"__typename":"Money","amount":4500,"currencyCode":"USD"},"state":"ACTIVE"}}</script>`;
}

test("parses the current GoFundMe fundraiser values", () => {
  assert.deepEqual(parseGoFundMeStats(fundraiserRecord(), slug), {
    raised: 720,
    goal: 4500,
    donations: 7,
    currencyCode: "USD",
  });
});

test("selects the fundraiser that matches the requested slug", () => {
  const otherFundraiser = fundraiserRecord().replaceAll(slug, "some-other-fundraiser");
  assert.deepEqual(parseGoFundMeStats(`${otherFundraiser}${fundraiserRecord()}`, slug), {
    raised: 720,
    goal: 4500,
    donations: 7,
    currencyCode: "USD",
  });
});

test("rejects incomplete or invalid fundraiser data", () => {
  assert.equal(parseGoFundMeStats("<html>No fundraiser data</html>", slug), null);
  assert.equal(
    parseGoFundMeStats(fundraiserRecord().replace('"amount":4500', '"amount":0'), slug),
    null,
  );
});
