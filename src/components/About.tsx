import { aboutParagraphs, education, experience, profile } from "../data/portfolio.ts"

export function About() {
  const role = experience[0]

  return (
    <section id="about" className="section band reveal" aria-labelledby="about-title">
      <div className="container about-layout">
        <div className="reveal-child">
          <h2 id="about-title">A Little About Me</h2>
          <div className="prose">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <dl className="info-list">
          <div className="reveal-child">
            <dt>Education</dt>
            <dd>
              <strong>{education.degree}</strong>
              <span>
                {education.college}, {education.location}
              </span>
              <span>{education.period} · In progress</span>
            </dd>
          </div>
          {role ? (
            <div className="reveal-child">
              <dt>Currently</dt>
              <dd>
                <strong>{role.role}</strong>
                <span>{role.company}</span>
                <span>{role.period}</span>
              </dd>
            </div>
          ) : null}
          <div className="reveal-child">
            <dt>Location</dt>
            <dd>
              <strong>{profile.location}</strong>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
