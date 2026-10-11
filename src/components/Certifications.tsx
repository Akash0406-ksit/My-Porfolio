import { certification } from "../data/portfolio.ts"

export function Certifications() {
  return (
    <section id="certifications" className="section section-compact reveal" aria-labelledby="certifications-title">
      <div className="container">
        <div className="section-heading reveal-child">
          <h2 id="certifications-title">Certifications</h2>
        </div>
        <article className="cert-card reveal-child">
          <p className="cert-year">{certification.year}</p>
          <div>
            <h3>{certification.title}</h3>
            <p className="meta">{certification.subject}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
