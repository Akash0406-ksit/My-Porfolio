import { useEffect, useId, useRef, useState } from "react"
import { isHttpUrl, navItems, profile } from "../data/portfolio.ts"
import { useActiveSection } from "../hooks/useActiveSection.ts"
import { ExternalLink } from "./ExternalLink.tsx"
import { IconClose, IconGitHub, IconLinkedIn, IconMenu } from "./Icons.tsx"
import { Logo } from "./Logo.tsx"

export function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection()
  const headerRef = useRef<HTMLElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const github = isHttpUrl(profile.github) ? profile.github : undefined

  useEffect(() => {
    document.body.classList.toggle("nav-open", open)
    return () => document.body.classList.remove("nav-open")
  }, [open])

  useEffect(() => {
    if (!open) return

    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return
      setOpen(false)
      toggleRef.current?.focus()
    }

    function onPointerDown(event: PointerEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpen(false)
    }

    document.addEventListener("keydown", onKeyDown)
    document.addEventListener("pointerdown", onPointerDown)
    return () => {
      document.removeEventListener("keydown", onKeyDown)
      document.removeEventListener("pointerdown", onPointerDown)
    }
  }, [open])

  useEffect(() => {
    const media = window.matchMedia("(min-width: 960px)")
    function onChange() {
      if (media.matches) setOpen(false)
    }
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])

  function closeMenu() {
    setOpen(false)
  }

  const progress = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const bar = progress.current
    if (!bar) return
    const progressBar = bar
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    function update() {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      const amount = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
      progressBar.style.transform = `scaleX(${amount})`
    }
    function onScroll() {
      if (frame) return
      frame = window.requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <header className="site-header" ref={headerRef}>
      <div className="scroll-progress" ref={progress} aria-hidden="true" />
      <div className="container nav-wrap">
        <Logo onNavigate={closeMenu} />
        <button
          ref={toggleRef}
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <IconClose /> : <IconMenu />}
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>
        <nav id={menuId} className="site-nav" data-open={open ? "true" : "false"} aria-label="Primary">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "location" : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-social">
            {github ? (
              <ExternalLink href={github} label="GitHub">
                <IconGitHub />
              </ExternalLink>
            ) : null}
            <ExternalLink href={profile.linkedin} label="LinkedIn">
              <IconLinkedIn />
            </ExternalLink>
          </div>
        </nav>
      </div>
    </header>
  )
}
