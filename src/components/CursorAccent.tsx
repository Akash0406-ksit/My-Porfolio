import { useEffect, useRef } from "react"

export function CursorAccent() {
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = dot.current
    if (!node) return
    const accent = node
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!fine || reduce) return

    let x = 0
    let y = 0
    let cx = 0
    let cy = 0
    let frame = 0
    let hot = false

    function paint() {
      cx += (x - cx) * 0.22
      cy += (y - cy) * 0.22
      const scale = hot ? 1.7 : 1
      accent.style.transform = `translate3d(${cx + 14}px, ${cy + 16}px, 0) scale(${scale})`
      if (Math.abs(x - cx) < 0.4 && Math.abs(y - cy) < 0.4) {
        frame = 0
        return
      }
      frame = window.requestAnimationFrame(paint)
    }

    function onMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") return
      x = event.clientX
      y = event.clientY
      accent.classList.add("is-on")
      const target = event.target
      hot = target instanceof Element && Boolean(target.closest("a, button, .project-card, .language-tiles li"))
      accent.classList.toggle("is-hot", hot)
      if (!frame) frame = window.requestAnimationFrame(paint)
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    return () => {
      window.removeEventListener("pointermove", onMove)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  return <div className="cursor-accent" ref={dot} aria-hidden="true" />
}
