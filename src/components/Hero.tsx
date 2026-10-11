import { hero, isAssetPath, isHttpUrl, profile } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

export function Hero() {
  const github = isHttpUrl(profile.github) ? profile.github : undefined

  return (
    <section id="home" className="hero reveal" aria-labelledby="home-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="kicker">
            <span className="kicker-dot" aria-hidden="true" />
            {hero.kicker}
          </p>
          <p className="eyebrow">{profile.headline}</p>
          <h1 id="home-title">
            {hero.titleStart} <span className="highlight">{hero.titleAccent}</span> {hero.titleEnd}
            <span className="heading-line">{hero.titleSecond}</span>
          </h1>
          <p className="lede">{hero.description}</p>
          <p className="role-line">
            {profile.role}
            <span aria-hidden="true"> · </span>
            <span className="visually-hidden"> at </span>
            {profile.company}
          </p>
          <p className="location">{profile.location}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              Explore My Projects
            </a>
            <a className="btn btn-secondary" href={profile.resumePath} download>
              Download Resume
            </a>
          </div>
          <div className="hero-links">
            {github ? <ExternalLink href={github}>GitHub</ExternalLink> : null}
            <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          </div>
        </div>
        {isAssetPath(profile.photo) ? (
          <img className="portrait" src={profile.photo} alt={`Portrait of ${profile.name}`} />
        ) : (
          <div className="stage" aria-hidden="true">
            <div className="stage-card stage-back">
              <span>React</span>
            </div>
            <div className="stage-card stage-mid">
              <span>Node.js</span>
            </div>
            <div className="stage-card stage-front">
              <span>TypeScript</span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
