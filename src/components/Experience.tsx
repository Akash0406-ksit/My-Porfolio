import type { CSSProperties } from "react"
import { experience } from "../data/portfolio.ts"

export function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading reveal-child">
          <h2 id="experience-title">Professional Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((item, index) => (
            <article
              className="experience-card reveal-child"
              key={`${item.company}-${item.period}`}
              style={{ "--i": index } as CSSProperties}
            >
              <div>
                <p className="period">{item.period}</p>
                <p className="meta">{item.location}</p>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="org">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
                <ul className="duties">
                  {item.responsibilities.map((duty, dutyIndex) => (
                    <li key={duty} style={{ "--i": dutyIndex } as CSSProperties}>
                      {duty}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
