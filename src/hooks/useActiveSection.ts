import { useEffect, useState } from "react"
import { sectionIds } from "../data/portfolio.ts"

export function useActiveSection() {
  const [active, setActive] = useState<(typeof sectionIds)[number]>(sectionIds[0])

  useEffect(() => {
    let frame = 0

    function update() {
      frame = 0
      const ids = sectionIds
      const first = ids[0]
      const last = ids[ids.length - 1]
      if (!first || !last) return

      const scrollBottom = window.scrollY + window.innerHeight
      const pageHeight = document.documentElement.scrollHeight

      if (window.scrollY < 48) {
        setActive(first)
        return
      }

      if (scrollBottom >= pageHeight - 4) {
        setActive(last)
        return
      }

      const marker = window.scrollY + 140
      let current = first
      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        const top = element.getBoundingClientRect().top + window.scrollY
        if (top <= marker) current = id
      }
      setActive(current)
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

  return active
}
