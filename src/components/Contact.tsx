import { useEffect, useState } from "react"
import { contactCopy, isHttpUrl, profile } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"

export function Contact() {
  const [copyState, setCopyState] = useState<"idle" | "copied" | "failed">("idle")
  const github = isHttpUrl(profile.github) ? profile.github : undefined

  useEffect(() => {
    if (copyState === "idle") return
    const timeout = window.setTimeout(() => setCopyState("idle"), 2200)
    return () => window.clearTimeout(timeout)
  }, [copyState])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyState("copied")
    } catch {
      setCopyState("failed")
    }
  }

  const copyMessage =
    copyState === "copied"
      ? "Email address copied."
      : copyState === "failed"
        ? "Could not copy. Use the email link."
        : ""

  return (
    <section id="contact" className="section reveal" aria-labelledby="contact-title">
      <div className="container contact-grid">
        <div>
          <h2 id="contact-title">
            Let&apos;s Build Something <span className="highlight">Together</span>
          </h2>
          <p className="lede">{contactCopy}</p>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            Email Akash
          </a>
        </div>
        <address className="contact-list">
          <div className="contact-row">
            <span>Email</span>
            <a className="email-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button className="btn btn-secondary" type="button" onClick={copyEmail}>
              Copy email
            </button>
            <p className="copy-status" aria-live="polite">
              {copyMessage}
            </p>
          </div>
          <div className="contact-row">
            <span>LinkedIn</span>
            <ExternalLink href={profile.linkedin}>linkedin.com/in/akash-k-c-8111b0312</ExternalLink>
          </div>
          {github ? (
            <div className="contact-row">
              <span>GitHub</span>
              <ExternalLink href={github}>{github.replace(/^https?:\/\//, "")}</ExternalLink>
            </div>
          ) : null}
          <div className="contact-row">
            <span>Location</span>
            <p>{profile.location}</p>
          </div>
        </address>
      </div>
    </section>
  )
}
