import type { Metadata } from "next";
import { ogImageUrl, siteName, siteUrl } from "./siteConfig";

type BuildMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function buildMetadata({
  title,
  description,
  path,
  image = ogImageUrl,
}: BuildMetadataOptions): Metadata {
  const canonical = path === "/" ? "/" : path;
  const url = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [
        {
          url: image,
          alt: "GBC Huskies basketball program logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
