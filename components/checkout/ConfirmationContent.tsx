"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const },
  },
}

function ConfirmationContent() {
  const router = useRouter()
  const [allowed, setAllowed] = React.useState(false)

  React.useEffect(() => {
    const confirmed = sessionStorage.getItem("vk-order-confirmed")
    if (confirmed) {
      sessionStorage.removeItem("vk-order-confirmed")
      setAllowed(true)
    } else {
      router.replace("/")
    }
  }, [router])

  if (!allowed) {
    return null
  }

  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center gap-6"
    >
      {/* Checkmark */}
      <motion.div
        variants={fadeUp}
        className="flex size-20 items-center justify-center rounded-full bg-plum-10"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-deep-plum"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeUp}
        className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40] text-foreground"
      >
        Objednávka přijata.
      </motion.h1>

      {/* Detail */}
      <motion.p
        variants={fadeUp}
        className="text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground"
      >
        Potvrzení vám pošleme e-mailem.
      </motion.p>

      {/* Order number */}
      <motion.div
        variants={fadeUp}
        className="mx-auto max-w-sm rounded-sm border border-border p-6"
      >
        <span className="text-[length:var(--font-size-caption)] uppercase tracking-wider text-muted-foreground">
          Číslo objednávky
        </span>
        <p className="mt-1 font-sans text-[length:var(--font-size-h3)] font-[30] text-foreground">
          VK-2024-0042
        </p>
      </motion.div>

      {/* Contact */}
      <motion.div
        variants={fadeUp}
        className="flex flex-col gap-2 border-t border-border pt-6"
      >
        <p className="text-[length:var(--font-size-body)] text-muted-foreground">
          Jsme tu, pokud budete potřebovat cokoliv upřesnit nebo změnit.
        </p>
        <p className="text-[length:var(--font-size-body)] text-muted-foreground">
          Volejte:{" "}
          <a
            href="tel:+420604585271"
            className="text-foreground underline transition-colors hover:text-deep-plum-70"
          >
            +420 604 585 271
          </a>
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div variants={fadeUp} className="mt-4">
        <Button asChild size="lg">
          <Link href="/">Zpět na hlavní stránku</Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}

export { ConfirmationContent }
