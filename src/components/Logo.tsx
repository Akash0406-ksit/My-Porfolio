import { profile } from "../data/portfolio.ts"

type LogoProps = {
  onNavigate?: () => void
}

export function Logo({ onNavigate }: LogoProps) {
  return (
    <a className="logo" href="#home" onClick={onNavigate}>
      <span className="logo-mark" aria-hidden="true">AK</span>
      {profile.logo}
    </a>
  )
}
