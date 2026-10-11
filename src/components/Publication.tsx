import { publication } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

export function Publication() {
  return (
    <section id="publication" className="section section-compact reveal" aria-labelledby="publication-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="publication-title">Publication</h2>
        </div>
        <article className="citation">
          <p className="meta">Research · {publication.date}</p>
          <h3>{publication.title}</h3>
          <p>{publication.journal}</p>
          <p className="doi">
            <ExternalLink href={publication.doiUrl}>
              DOI {publication.doi} <span aria-hidden="true">↗</span>
            </ExternalLink>
          </p>
        </article>
      </div>
    </section>
  )
}
