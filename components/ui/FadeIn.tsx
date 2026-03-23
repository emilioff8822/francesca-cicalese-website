"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

const EASE = [0.25, 0.46, 0.45, 0.94] as const

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-20px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{
        duration,
        delay,
        ease: EASE,
      }}
      style={{ willChange: "transform, opacity" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
