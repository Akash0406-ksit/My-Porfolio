import { isHttpUrl, profile } from "../data/portfolio.ts"

export function Seo() {
  const sameAs = [profile.linkedin, profile.github].filter(isHttpUrl)
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.role,
    email: `mailto:${profile.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    sameAs,
    worksFor: {
      "@type": "Organization",
      name: profile.company,
    },
    affiliation: {
      "@type": "EducationalOrganization",
      name: "K S Institute of Technology",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
