"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

type Props = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  className,
}: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
