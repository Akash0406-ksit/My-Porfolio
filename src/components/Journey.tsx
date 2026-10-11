import { journey } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

export function Journey() {
  return (
    <section id="journey" className="section band reveal" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="journey-title">Education and Journey</h2>
          <p>Education, a hackathon, an internship, and a research publication.</p>
        </div>
        <ol className="timeline">
          {journey.map((group) => (
            <li className="timeline-item" key={group.year}>
              <p className={group.year.length > 4 ? "timeline-year is-range" : "timeline-year"}>
                {group.year}
              </p>
              <div className="timeline-cards">
                {group.milestones.map((milestone) => (
                  <article className="milestone" key={milestone.title}>
                    <p className="meta">{milestone.period}</p>
                    <h3>{milestone.title}</h3>
                    <p className="org">{milestone.organization}</p>
                    {milestone.location ? <p className="meta">{milestone.location}</p> : null}
                    {milestone.detail ? <p className="milestone-detail">{milestone.detail}</p> : null}
                    {milestone.status ? <span className="badge">{milestone.status}</span> : null}
                    {milestone.href && milestone.hrefLabel ? (
                      <ExternalLink className="text-link" href={milestone.href}>
                        DOI {milestone.hrefLabel} <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ) : null}
                  </article>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
