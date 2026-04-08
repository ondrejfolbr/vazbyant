"use client"

import { cn } from "@/lib/utils"

const STEPS = [
  { number: 1, label: "Doručení" },
  { number: 2, label: "Platba" },
  { number: 3, label: "Souhrn" },
] as const

interface StepIndicatorProps {
  currentStep: number
}

function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <nav aria-label="Kroky objednávky" className="mb-10">
      <ol className="flex items-center justify-between sm:justify-center">
        {STEPS.map((step, index) => {
          const isActive = step.number === currentStep
          const isCompleted = step.number < currentStep

          return (
            <li key={step.number} className="flex items-center">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-[length:var(--font-size-caption)] font-[30] transition-colors sm:size-8 sm:text-[length:var(--font-size-body-sm)]",
                    isActive && "bg-deep-plum text-neutral-white",
                    isCompleted && "bg-plum-50 text-neutral-white",
                    !isActive && !isCompleted && "bg-neutral-200 text-neutral-600",
                  )}
                >
                  {isCompleted ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  ) : (
                    step.number
                  )}
                </span>
                <span
                  className={cn(
                    "text-xs transition-colors sm:text-[length:var(--font-size-body-sm)]",
                    isActive && "font-[30] text-foreground",
                    isCompleted && "text-plum-50",
                    !isActive && !isCompleted && "text-neutral-600",
                  )}
                >
                  {step.label}
                </span>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={cn(
                    "mx-2 h-px w-6 sm:mx-4 sm:w-20",
                    step.number < currentStep ? "bg-plum-50" : "bg-neutral-300",
                  )}
                />
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export { StepIndicator }
