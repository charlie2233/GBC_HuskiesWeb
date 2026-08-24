export type ParsedFundraiserStats = {
  raised: number;
  goal: number;
  donations: number;
  currencyCode: string;
};

const moneyPattern = (field: string) =>
  new RegExp(
    `"${field}":\\{"__typename":"Money","amount":([0-9]+(?:\\.[0-9]+)?),"currencyCode":"([A-Z]{3})"\\}`,
  );

export function parseGoFundMeStats(
  html: string,
  fundraiserSlug: string,
): ParsedFundraiserStats | null {
  const slugMarker = `"defaultSlug":"${fundraiserSlug}"`;
  const slugIndex = html.indexOf(slugMarker);

  if (slugIndex === -1) {
    return null;
  }

  const recordStart = html.lastIndexOf('"Fundraiser:', slugIndex);
  if (recordStart === -1) {
    return null;
  }

  const record = html.slice(recordStart, slugIndex + 30_000);
  const currentAmountMatch = record.match(moneyPattern("currentAmount"));
  const goalAmountMatch = record.match(moneyPattern("goalAmount"));
  const donationCountMatch = record.match(/"donationCount":([0-9]+)/);

  if (!currentAmountMatch || !goalAmountMatch || !donationCountMatch) {
    return null;
  }

  const raised = Number(currentAmountMatch[1]);
  const goal = Number(goalAmountMatch[1]);
  const donations = Number(donationCountMatch[1]);
  const currencyCode = currentAmountMatch[2];

  if (
    !Number.isFinite(raised) ||
    !Number.isFinite(goal) ||
    !Number.isSafeInteger(donations) ||
    raised < 0 ||
    goal <= 0 ||
    donations < 0 ||
    currencyCode !== goalAmountMatch[2]
  ) {
    return null;
  }

  return { raised, goal, donations, currencyCode };
}
