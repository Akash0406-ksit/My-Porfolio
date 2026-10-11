import type { CSSProperties } from "react"
import { journey } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

function YearLabel({ year }: { year: string }) {
  const [start, end] = year.split("–")
  if (end) {
    return (
      <p className="timeline-year is-range">
        <span>{start}</span>
        <span className="year-end">–{end}</span>
      </p>
    )
  }

  return <p className="timeline-year">{year}</p>
}

export function Journey() {
  return (
    <section id="journey" className="section band reveal" aria-labelledby="journey-title">
      <div className="container">
        <div className="section-heading reveal-child">
          <h2 id="journey-title">Education and Journey</h2>
          <p>Education, a hackathon, an internship, and a research publication.</p>
        </div>
        <ol className="timeline">
          {journey.map((group, index) => (
            <li
              className="timeline-item reveal-child"
              key={group.year}
              style={{ "--i": index } as CSSProperties}
            >
              <YearLabel year={group.year} />
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
