import { useLayoutEffect } from "react"

const selector = ".reveal-child, .reveal-group, .timeline"

export function useReveal() {
  useLayoutEffect(() => {
    document.documentElement.classList.add("js")
    const nodes = Array.from(document.querySelectorAll(selector))
    if (nodes.length === 0) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce || typeof IntersectionObserver === "undefined") {
      nodes.forEach((node) => node.classList.add("is-in"))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-in")
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0 },
    )

    const view = window.innerHeight
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect()
      if (rect.top < view * 0.92 && rect.bottom > 0) node.classList.add("is-in")
      else observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])
}
