"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const TAGLINES = [
  { text: "\u201EVazby mezi lidmi.\u201C", mood: "universal" },
  { text: "\u201EVazby, kter\u00E9 mluv\u00ED za v\u00E1s.\u201C", mood: "universal" },
  { text: "\u201EVazby pro \u017Eivot. Vazby pro lou\u010Den\u00ED.\u201C", mood: "funeral" },
  { text: "\u201EKv\u011Btiny, kter\u00E9 tvo\u0159\u00ED nov\u00E9 vazby.\u201C", mood: "universal" },
  { text: "\u201EVazby v tichu. Vazby v radosti.\u201C", mood: "funeral" },
] as const

interface RotatingTaglineProps {
  as?: "h1" | "p"
  className?: string
}

function RotatingTagline({ as: Tag = "p", className }: RotatingTaglineProps) {
  const pathname = usePathname()
  const isSvatebni = pathname.startsWith("/svatebni")

  const taglines = React.useMemo(
    () =>
      isSvatebni
        ? TAGLINES.filter((t) => t.mood === "universal")
        : TAGLINES,
    [isSvatebni],
  )

  const [index, setIndex] = React.useState(0)
  const [visible, setVisible] = React.useState(true)

  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % taglines.length)
        setVisible(true)
      }, 400)
    }, 5000)
    return () => clearInterval(interval)
  }, [taglines.length])

  return (
    <Tag
      className={cn(
        "font-heading leading-snug font-[40] transition-opacity duration-400 ease-out",
        className,
      )}
      style={{ opacity: visible ? 1 : 0 }}
      aria-live="polite"
      aria-atomic="true"
    >
      {taglines[index].text}
    </Tag>
  )
}

export { RotatingTagline }
