import type { ReactNode } from "react"

type ExternalLinkProps = {
  href: string
  className?: string
  children: ReactNode
  label?: string
}

export function ExternalLink({ href, className, children, label }: ExternalLinkProps) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {children}
    </a>
  )
}
