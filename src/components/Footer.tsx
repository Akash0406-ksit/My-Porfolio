import { isHttpUrl, profile } from "../data/portfolio.ts"
import { ExternalLink } from "./ExternalLink.tsx"
import { Logo } from "./Logo.tsx"

const copyrightYear = new Date().getFullYear()

export function Footer() {
  const github = isHttpUrl(profile.github) ? profile.github : undefined

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <Logo />
        <p>
          © {copyrightYear} {profile.name}
        </p>
        <div className="footer-links">
          {github ? <ExternalLink href={github}>GitHub</ExternalLink> : null}
          <ExternalLink href={profile.linkedin}>LinkedIn</ExternalLink>
          <a href="#home">Back to top</a>
        </div>
      </div>
    </footer>
  )
}
