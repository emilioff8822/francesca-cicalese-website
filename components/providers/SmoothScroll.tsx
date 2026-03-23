"use client"

import { useEffect } from "react"
import Lenis from "lenis"

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Su touch device lo scroll nativo è più fluido e performante — Lenis resta solo su desktop
    const isTouchDevice = window.matchMedia("(hover: none) and (pointer: coarse)").matches
    if (isTouchDevice) return

    const lenis = new Lenis({
      lerp: 0.1,
      duration: 1.2,
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
