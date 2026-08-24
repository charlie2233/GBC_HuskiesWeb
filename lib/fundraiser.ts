import { unstable_cache } from "next/cache";
import { goFundMeUrl } from "./siteConfig";
import { parseGoFundMeStats } from "./fundraiserParser";

const fundraiserSlug = "sd6zec-help-the-huskies";
const fundraiserRevalidateSeconds = 1_800;

const lastVerifiedStats = {
  raised: 720,
  goal: 4_500,
  donations: 7,
  currencyCode: "USD",
} as const;

export type FundraiserStats = {
  raised: number;
  goal: number;
  donations: number;
  currencyCode: string;
  progress: number;
  source: "gofundme" | "fallback";
  checkedAt: string;
};

function withDisplayMetadata(
  stats: Omit<FundraiserStats, "progress" | "source" | "checkedAt">,
  source: FundraiserStats["source"],
): FundraiserStats {
  return {
    ...stats,
    progress: Math.min(100, Math.max(0, Math.round((stats.raised / stats.goal) * 100))),
    source,
    checkedAt: new Date().toISOString(),
  };
}

export function formatFundraiserCurrency(amount: number, currencyCode: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: Number.isInteger(amount) ? 0 : 2,
  }).format(amount);
}

const getCachedGoFundMeStats = unstable_cache(
  async () => {
    const response = await fetch(goFundMeUrl, {
      cache: "no-store",
      headers: {
        Accept: "text/html,application/xhtml+xml",
        "User-Agent":
          "Mozilla/5.0 (compatible; GBC-Huskies-Fundraiser-Tracker/1.0; +https://gbchuskies.com)",
      },
    });

    if (!response.ok) {
      throw new Error(`GoFundMe returned ${response.status}`);
    }

    const parsed = parseGoFundMeStats(await response.text(), fundraiserSlug);
    if (!parsed) {
      throw new Error("GoFundMe fundraiser data was not found in the public page");
    }

    return parsed;
  },
  ["gofundme-fundraiser-stats-v1"],
  {
    revalidate: fundraiserRevalidateSeconds,
    tags: ["gofundme-fundraiser"],
  },
);

export async function getFundraiserStats(): Promise<FundraiserStats> {
  try {
    return withDisplayMetadata(await getCachedGoFundMeStats(), "gofundme");
  } catch (error) {
    console.error("Unable to refresh GoFundMe fundraiser stats", error);
    return withDisplayMetadata(lastVerifiedStats, "fallback");
  }
}
