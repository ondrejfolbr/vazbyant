"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const RIBBON_COLORS = [
  { name: "Bílá", value: "#FFFFFF", border: true },
  { name: "Černá", value: "#1A1A1A", border: false },
  { name: "Zelená", value: "#2E7D32", border: false },
  { name: "Červená", value: "#C62828", border: false },
  { name: "Fialová", value: "var(--color-deep-plum)", border: false },
  { name: "Modrá", value: "#1565C0", border: false },
  { name: "Zlatá", value: "#C49A2A", border: false },
  { name: "Stříbrná", value: "#A8A8A8", border: false },
] as const

const FONT_COLORS = [
  { name: "Zlatá", value: "#C49A2A", border: false },
  { name: "Stříbrná", value: "#A8A8A8", border: false },
  { name: "Bílá", value: "#FFFFFF", border: true },
  { name: "Černá", value: "#1A1A1A", border: false },
] as const

interface RibbonState {
  enabled: boolean
  ribbonColor: string
  fontColor: string
  text1: string
  text2: string
  note: string
}

interface RibbonConfiguratorProps {
  value: RibbonState
  onChange: (state: RibbonState) => void
}

function ColorSwatch({
  colors,
  selected,
  onSelect,
  label,
}: {
  colors: ReadonlyArray<{ name: string; value: string; border: boolean }>
  selected: string
  onSelect: (value: string) => void
  label: string
}) {
  const [hoveredName, setHoveredName] = React.useState<string | null>(null)

  return (
    <div className="flex flex-col gap-2">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
        {label}
      </span>
      <div className="flex flex-wrap items-center gap-2 p-1">
        {colors.map((color) => (
          <button
            key={color.name}
            type="button"
            onClick={() => onSelect(color.value)}
            onMouseEnter={() => setHoveredName(color.name)}
            onMouseLeave={() => setHoveredName(null)}
            className={cn(
              "size-8 rounded-full transition-shadow",
              color.border && "border border-border",
              selected === color.value
                ? "ring-2 ring-deep-plum ring-offset-2"
                : "hover:ring-2 hover:ring-deep-plum-50 hover:ring-offset-1",
            )}
            style={{ backgroundColor: color.value }}
            aria-label={color.name}
            aria-pressed={selected === color.value}
          />
        ))}
        {hoveredName && (
          <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
            {hoveredName}
          </span>
        )}
      </div>
    </div>
  )
}

function RibbonConfigurator({ value, onChange }: RibbonConfiguratorProps) {
  const maxNoteLength = 500

  function update(patch: Partial<RibbonState>) {
    onChange({ ...value, ...patch })
  }

  return (
    <div className="flex flex-col gap-4 border-t border-border pt-6">
      {/* Checkbox */}
      <label className="flex cursor-pointer items-center gap-3">
        <span
          className={cn(
            "flex size-5 shrink-0 items-center justify-center rounded-sm border transition-colors",
            value.enabled
              ? "border-deep-plum bg-deep-plum"
              : "border-border hover:border-deep-plum-80",
          )}
          aria-hidden="true"
        >
          {value.enabled && (
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className="text-neutral-white"
            >
              <path
                d="M2.5 6L5 8.5L9.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        <input
          type="checkbox"
          checked={value.enabled}
          onChange={(e) => update({ enabled: e.target.checked })}
          className="sr-only"
        />
        <span className="text-[length:var(--font-size-body)] font-[30] text-foreground">
          Přidat stuhu{" "}
          <span className="text-muted-foreground">(+213 Kč)</span>
        </span>
      </label>

      {/* Expandable config — CSS transition via grid-template-rows */}
      <div
        className="grid transition-[grid-template-rows] duration-[var(--transition-base)] ease-[var(--ease-default)]"
        style={{
          gridTemplateRows: value.enabled ? "1fr" : "0fr",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-5 pt-2 pb-1">
            {/* Ribbon color */}
            <ColorSwatch
              colors={RIBBON_COLORS}
              selected={value.ribbonColor}
              onSelect={(v) => update({ ribbonColor: v })}
              label="Barva stuhy"
            />

            {/* Font color */}
            <ColorSwatch
              colors={FONT_COLORS}
              selected={value.fontColor}
              onSelect={(v) => update({ fontColor: v })}
              label="Barva písma"
            />

            {/* Text inputs */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ribbon-text-1"
                  className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
                >
                  Text — cíp 1
                </label>
                <Input
                  id="ribbon-text-1"
                  value={value.text1}
                  onChange={(e) => update({ text1: e.target.value })}
                  placeholder="Např. S láskou vzpomínáme"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="ribbon-text-2"
                  className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
                >
                  Text — cíp 2
                </label>
                <Input
                  id="ribbon-text-2"
                  value={value.text2}
                  onChange={(e) => update({ text2: e.target.value })}
                  placeholder="Např. Rodina Novákova"
                />
              </div>
            </div>

            {/* Note textarea */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="ribbon-note"
                className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
              >
                Poznámka k vazárnám
              </label>
              <Textarea
                id="ribbon-note"
                value={value.note}
                onChange={(e) =>
                  update({ note: e.target.value.slice(0, maxNoteLength) })
                }
                placeholder="Speciální přání, úpravy, preference…"
                rows={3}
              />
              <span className="self-end text-[length:var(--font-size-caption)] text-muted-foreground">
                {value.note.length}/{maxNoteLength}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { RibbonConfigurator }
export type { RibbonState }
