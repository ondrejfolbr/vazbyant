"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"

import { useCart } from "@/hooks/use-cart"

function CartTrigger() {
  const { totalItems, openDrawer } = useCart()
  const [pulse, setPulse] = React.useState(false)
  const prevCount = React.useRef(totalItems)

  React.useEffect(() => {
    if (totalItems > prevCount.current) {
      setPulse(true)
      const timer = setTimeout(() => setPulse(false), 300)
      return () => clearTimeout(timer)
    }
    prevCount.current = totalItems
  }, [totalItems])

  return (
    <button
      type="button"
      onClick={openDrawer}
      className="relative flex size-10 items-center justify-center rounded-sm text-foreground transition-colors hover:bg-deep-plum-10"
      aria-label="Otevřít košík"
    >
      <motion.div
        animate={pulse ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 6h12l-1.5 7H7.5L6 6Z" />
          <path d="M6 6 5 2H2" />
          <circle cx="9" cy="17" r="1" />
          <circle cx="15" cy="17" r="1" />
        </svg>
      </motion.div>
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            key="badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-deep-plum text-[10px] font-[30] text-neutral-white"
            aria-live="polite"
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  )
}

export { CartTrigger }
