"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

interface FadeInSectionProps {
  children: React.ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  className?: string
  threshold?: number
  once?: boolean
}

export function FadeInSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
  threshold = 0.1,
  once = true,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Set up the initial animation values based on direction
  const getInitialAnimation = () => {
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 }
      case "down":
        return { opacity: 0, y: -40 }
      case "left":
        return { opacity: 0, x: 40 }
      case "right":
        return { opacity: 0, x: -40 }
      case "none":
        return { opacity: 0 }
      default:
        return { opacity: 0, y: 40 }
    }
  }

  // Set up the animation values when visible
  const getVisibleAnimation = () => {
    switch (direction) {
      case "up":
      case "down":
        return { opacity: 1, y: 0 }
      case "left":
      case "right":
        return { opacity: 1, x: 0 }
      case "none":
        return { opacity: 1 }
      default:
        return { opacity: 1, y: 0 }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px", // Adjust when animation triggers
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  return (
    <motion.div
      ref={ref}
      initial={getInitialAnimation()}
      animate={isVisible ? getVisibleAnimation() : getInitialAnimation()}
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
