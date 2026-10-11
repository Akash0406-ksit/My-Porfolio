import { useEffect, useRef, type CSSProperties } from "react"
import { experience, hero, isAssetPath, isHttpUrl, profile } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

function delay(seconds: number): CSSProperties {
  return { "--d": `${seconds}s` } as CSSProperties
}

function Word({ text, index }: { text: string; index: number }) {
  return (
    <span className="word" style={{ "--w": index } as CSSProperties}>
      {text}
    </span>
  )
}

const stageLabels = [
  { name: "React", tone: "stage-back" },
  { name: "TypeScript", tone: "" },
  { name: "Node.js", tone: "stage-mid" },
  { name: "Java", tone: "" },
  { name: "PostgreSQL", tone: "stage-front" },
]

export function Hero() {
  const github = isHttpUrl(profile.github) ? profile.github : undefined
  const internship = experience[0]
  const interningNow = internship?.period.includes("Present") ?? false
  const heroRef = useRef<HTMLElement>(null)
  const [secondLead, ...secondTail] = hero.titleSecond.split(" ")
  const secondRest = secondTail.join(" ")

  useEffect(() => {
    const node = heroRef.current
    if (!node) return
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse" || !node) return
      const rect = node.getBoundingClientRect()
      const px = (event.clientX - rect.left) / rect.width - 0.5
      const py = (event.clientY - rect.top) / rect.height - 0.5
      node.style.setProperty("--px", px.toFixed(3))
      node.style.setProperty("--py", py.toFixed(3))
    }

    function onLeave() {
      node?.style.setProperty("--px", "0")
      node?.style.setProperty("--py", "0")
    }

    node.addEventListener("pointermove", onMove)
    node.addEventListener("pointerleave", onLeave)
    return () => {
      node.removeEventListener("pointermove", onMove)
      node.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <section id="home" className="hero is-in" aria-labelledby="home-title" ref={heroRef}>
      <div className="hero-orb" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-intro">
          {interningNow ? (
            <p className="status-badge hero-seq" style={delay(0.02)}>
              Intern · Present
            </p>
          ) : null}
          <p className="kicker hero-seq" style={delay(0.04)}>
            <span className="kicker-dot" aria-hidden="true" />
            {hero.kicker}
          </p>
          <p className="eyebrow hero-seq" style={delay(0.1)}>
            {profile.headline}
          </p>
          <h1 id="home-title">
            <span className="heading-line">
              <Word text={hero.titleStart} index={0} />
              <span className="word" style={{ "--w": 1 } as CSSProperties}>
                <span className="highlight">{hero.titleAccent}</span>
              </span>
              <Word text={hero.titleEnd} index={2} />
            </span>
            <span className="heading-line">
              <Word text={secondLead} index={3} />
              {secondRest ? (
                <span className="heading-break">
                  {secondRest.split(" ").map((word, index) => (
                    <Word key={word} text={word} index={4 + index} />
                  ))}
                </span>
              ) : null}
            </span>
          </h1>
        </div>
        <div className="hero-bottom">
          <div className="hero-copy">
            <div className="hero-seq" style={delay(0.28)}>
              <p className="lede">{hero.description}</p>
              <p className="role-line">
                {profile.role}
                <span aria-hidden="true"> · </span>
                <span className="visually-hidden"> at </span>
                {profile.company}
              </p>
              <p className="location">{profile.location}</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-primary hero-seq" style={delay(0.4)} href="#projects">
                Explore My Work <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-secondary hero-seq" style={delay(0.48)} href={profile.resumePath} download>
                Download Resume
              </a>
            </div>
            <div className="hero-links hero-seq" style={delay(0.56)}>
              {github ? <ExternalLink href={github}>GitHub</ExternalLink> : null}
              <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
            </div>
            <a className="scroll-cue hero-seq" style={delay(0.64)} href="#about">
              <span className="visually-hidden">Scroll to about</span>
            </a>
          </div>
          {isAssetPath(profile.photo) ? (
            <img
              className="portrait hero-seq"
              style={delay(0.32)}
              src={profile.photo}
              alt={`Portrait of ${profile.name}`}
            />
          ) : (
            <div className="stage hero-seq" style={delay(0.32)} aria-hidden="true">
              {stageLabels.map((label) => (
                <div className={`stage-card ${label.tone}`.trim()} key={label.name}>
                  <span>{label.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
