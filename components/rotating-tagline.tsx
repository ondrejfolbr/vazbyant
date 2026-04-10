"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

const BRAND_TAGLINES = [
  "\u201EVazby mezi lidmi.\u201C",
  "\u201EVazby, kter\u00E9 mluv\u00ED za v\u00E1s.\u201C",
  "\u201EVazby pro \u017Eivot. Vazby pro lou\u010Den\u00ED.\u201C",
  "\u201EKv\u011Btiny, kter\u00E9 tvo\u0159\u00ED nov\u00E9 vazby.\u201C",
  "\u201EVazby v tichu. Vazby v radosti.\u201C",
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
