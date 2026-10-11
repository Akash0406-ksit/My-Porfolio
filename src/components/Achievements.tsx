import { achievement } from "../data/portfolio.ts"

export function Achievements() {
  return (
    <section id="achievements" className="section band-muted reveal" aria-labelledby="achievements-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="achievements-title">Achievements</h2>
        </div>
        <article className="award">
          <div className="award-mark">
            <span>Place</span>
            <strong>2nd</strong>
          </div>
          <div className="award-copy">
            <p className="badge">Runner-up</p>
            <h3>{achievement.title}</h3>
            <p className="award-result">{achievement.result}</p>
            <p>{achievement.event}</p>
            <p className="meta">Project: {achievement.project}</p>
          </div>
        </article>
      </div>
    </section>
  )
}
