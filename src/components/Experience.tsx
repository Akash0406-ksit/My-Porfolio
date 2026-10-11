import { experience } from "../data/portfolio.ts"

export function Experience() {
  return (
    <section id="experience" className="section reveal" aria-labelledby="experience-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="experience-title">Professional Experience</h2>
        </div>
        <div className="experience-list">
          {experience.map((item) => (
            <article className="experience-card" key={`${item.company}-${item.period}`}>
              <div>
                <p className="period">{item.period}</p>
                <p className="meta">{item.location}</p>
              </div>
              <div>
                <h3>{item.role}</h3>
                <p className="org">{item.company}</p>
                <p className="experience-summary">{item.summary}</p>
                <ul className="duties">
                  {item.responsibilities.map((duty) => (
                    <li key={duty}>{duty}</li>
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
