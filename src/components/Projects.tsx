import { projects } from "../data/portfolio.ts"
import { ProjectCard } from "./ProjectCard.tsx"

export function Projects() {
  return (
    <section id="projects" className="section reveal" aria-labelledby="projects-title">
      <div className="container">
        <div className="section-heading">
          <h2 id="projects-title">Featured Projects</h2>
          <p>
            Coursework, hackathon, and major-project work across web development and artificial
            intelligence.
          </p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
