import { useState } from "react"
import { isAssetPath, isHttpUrl, type Project } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

type ProjectCardProps = {
  project: Project
  index: number
}

function repositoryLabel(url: string) {
  return url.includes("github.com") ? "GitHub" : "Repository"
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [failed, setFailed] = useState(false)
  const showImage = isAssetPath(project.image) && !failed
  const repository = isHttpUrl(project.repository) ? project.repository : undefined
  const demo = isHttpUrl(project.demo) ? project.demo : undefined
  const number = String(index + 1).padStart(2, "0")

  return (
    <article className={project.featured ? "project-card featured" : "project-card"}>
      {showImage ? (
        <div className={`project-visual visual-${project.motif}`}>
          <img
            src={project.image}
            alt={`${project.title} preview`}
            loading={project.featured ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
          />
        </div>
      ) : (
        <div className={`project-visual visual-${project.motif}`} aria-hidden="true">
          <span className="visual-index">{number}</span>
        </div>
      )}
      <div className="project-body">
        <div className="project-meta">
          <p>{project.category}</p>
          {project.ongoing ? <span className="badge">In progress</span> : null}
        </div>
        <h3>{project.title}</h3>
        <p className="project-copy">{project.description}</p>
        <ul className="chips">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {repository || demo ? (
          <div className="project-links">
            {repository ? (
              <ExternalLink className="text-link" href={repository}>
                {repositoryLabel(repository)} <span aria-hidden="true">↗</span>
              </ExternalLink>
            ) : null}
            {demo ? (
              <ExternalLink className="text-link" href={demo}>
                Live demo <span aria-hidden="true">↗</span>
              </ExternalLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  )
}
