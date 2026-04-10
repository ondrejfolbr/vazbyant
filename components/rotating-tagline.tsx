"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const BRAND_TAGLINES = [
  "Vazby mezi lidmi.",
  "Vazby, které mluví za vás.",
  "Vazby pro život. Vazby pro loučení.",
  "Květiny, které tvoří nové vazby.",
  "Vazby v tichu. Vazby v radosti.",
]

interface RotatingTaglineProps {
  as?: "h1" | "p"
  className?: string
}

function RotatingTagline({ as: Tag = "p", className }: RotatingTaglineProps) {
  const [index, setIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % BRAND_TAGLINES.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <Tag
      className={cn(
        "font-heading leading-snug font-[40] transition-opacity duration-400 ease-out",
        className,
      )}
      style={{ opacity: visible ? 1 : 0 }}
    >
      {BRAND_TAGLINES[index]}
    </Tag>
  )
}

export { RotatingTagline }
