import { useEffect } from "react"

export function useReveal() {
  useEffect(() => {
    document.documentElement.classList.add("js")
    const nodes = document.querySelectorAll(".reveal")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add("is-in")
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12 },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
