import {
  areaServed,
  coachInstagramUrl,
  coachPhoneDisplay,
  contactEmail,
  instagramUrl,
  logoUrl,
  organizationName,
  siteDescription,
  siteName,
  siteUrl,
} from "@/lib/siteConfig";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["SportsOrganization", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: organizationName,
      url: siteUrl,
      logo: logoUrl,
      image: logoUrl,
      description: siteDescription,
      sport: "Basketball",
      email: contactEmail,
      telephone: coachPhoneDisplay,
      areaServed: {
        "@type": "AdministrativeArea",
        name: areaServed,
      },
      sameAs: [instagramUrl, coachInstagramUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteName,
      url: siteUrl,
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
