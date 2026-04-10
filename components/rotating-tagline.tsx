"use client"

import * as React from "react"

const BRAND_TAGLINES = [
  "\u201EVazby mezi lidmi.\u201C",
  "\u201EVazby, kter\u00E9 mluv\u00ED za v\u00E1s.\u201C",
  "\u201EVazby pro \u017Eivot. Vazby pro lou\u010Den\u00ED.\u201C",
  "\u201EKv\u011Btiny, kter\u00E9 tvo\u0159\u00ED nov\u00E9 vazby.\u201C",
  "\u201EVazby v tichu. Vazby v radosti.\u201C",
]

function RotatingTagline() {
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
    <p
      className="mx-auto max-w-[var(--max-width-narrow)] px-[var(--spacing-section-x)] font-heading text-[length:var(--font-size-h3)] leading-snug font-[40] text-foreground transition-opacity duration-400 ease-out"
      style={{ opacity: visible ? 1 : 0 }}
    >
      {BRAND_TAGLINES[index]}
    </p>
  )
}

export { RotatingTagline }
