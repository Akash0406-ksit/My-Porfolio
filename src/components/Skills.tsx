import type { CSSProperties } from "react"
import { skillGroups } from "../data/portfolio.ts"

export function Skills() {
  const tiles = skillGroups.find((group) => group.display === "tiles")
  const groups = skillGroups.filter((group) => group.display !== "tiles")

  return (
    <section id="skills" className="section band reveal" aria-labelledby="skills-title">
      <div className="container">
        <div className="section-heading reveal-child">
          <h2 id="skills-title">Tools I Work With</h2>
          <p>Technologies and practices I use in coursework, projects, and my internship.</p>
        </div>
        {tiles ? (
          <div className="skill-group tiles-group reveal-group" style={{ "--i": 0 } as CSSProperties}>
            <h3>{tiles.title}</h3>
            <ul className="language-tiles">
              {tiles.skills.map((skill, index) => (
                <li key={skill} style={{ "--chip": index } as CSSProperties}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div className="skill-groups">
          {groups.map((group, groupIndex) => (
            <div
              className="skill-group reveal-group"
              key={group.title}
              style={{ "--i": groupIndex + 1 } as CSSProperties}
            >
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.skills.map((skill, index) => (
                  <li key={skill} style={{ "--chip": index } as CSSProperties}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
