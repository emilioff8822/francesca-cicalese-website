"use client"

/*
  Wrapper riutilizzabile per l'animazione di ingresso allo scroll.
  Avvolgi qualsiasi sezione/elemento con <FadeIn> e apparirà
  con una dissolvenza dal basso quando entra nel viewport.

  Uso: <FadeIn delay={0.2}><h2>Titolo</h2></FadeIn>
*/

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  // once: true — si anima una sola volta, non si resetta scrollando su
  const inView = useInView(ref, { once: true, margin: "-80px" })

  const offset = 40
  const initial = {
    opacity: 0,
    y: direction === "up" ? offset : direction === "down" ? -offset : 0,
    x: direction === "left" ? offset : direction === "right" ? -offset : 0,
  }

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : initial}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // ease custom — più fluido di ease-out standard
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
