import type { Metadata } from "next"

import { Logo } from "@/components/logo"
import { SectionHeading } from "@/components/ui/section-heading"
import { CategoryCard } from "@/components/category-card"
import { ProductCard } from "@/components/product-card"
import { Hero } from "@/components/hero"
import { StyleguideInteractive } from "@/components/styleguide-interactive"

export const metadata: Metadata = {
  title: "Styleguide",
  robots: { index: false, follow: false },
}

/* ────────────────────────────────────────────────────────────────────────── */

const BRAND_COLORS = [
  { name: "Deep Plum", token: "--color-deep-plum", value: "#522953" },
  { name: "Deep Plum 90", token: "--color-deep-plum-90", value: "#63396A" },
  { name: "Deep Plum 80", token: "--color-deep-plum-80", value: "#754A81" },
  { name: "Deep Plum 70", token: "--color-deep-plum-70", value: "#865B98" },
  { name: "Deep Plum 10", token: "--color-deep-plum-10", value: "#F3EEF3" },
]

const PLUM_COLORS = [
  { name: "Plum 50", token: "--color-plum-50", value: "#9873B4" },
  { name: "Plum 30", token: "--color-plum-30", value: "#C4AEDA" },
  { name: "Plum 10", token: "--color-plum-10", value: "#EDE6F3" },
]

const NEUTRAL_COLORS = [
  { name: "Black", token: "--color-neutral-black", value: "#090708" },
  { name: "900", token: "--color-neutral-900", value: "#1A1718" },
  { name: "800", token: "--color-neutral-800", value: "#2D2A2C" },
  { name: "700", token: "--color-neutral-700", value: "#4A4648" },
  { name: "600", token: "--color-neutral-600", value: "#6B6769" },
  { name: "500", token: "--color-neutral-500", value: "#8E8A8C" },
  { name: "400", token: "--color-neutral-400", value: "#B0ADAF" },
  { name: "300", token: "--color-neutral-300", value: "#D0CDCF" },
  { name: "200", token: "--color-neutral-200", value: "#E8E6E7" },
  { name: "100", token: "--color-neutral-100", value: "#F5F4F4" },
  { name: "50", token: "--color-neutral-50", value: "#FAFAFA" },
  { name: "White", token: "--color-neutral-white", value: "#FFFFFF" },
]

const SEMANTIC_COLORS = [
  { name: "Success", token: "--color-success", value: "#2E7D32" },
  { name: "Error", token: "--color-error", value: "#C62828" },
  { name: "Warning", token: "--color-warning", value: "#F9A825" },
  { name: "Info", token: "--color-info", value: "#1565C0" },
]

const BUTTON_COLORS = [
  { name: "Btn Base", token: "--color-btn-base", value: "#2D1B2E" },
  {
    name: "Btn Gradient Start",
    token: "--color-btn-gradient-start",
    value: "#6B3F6E",
  },
  {
    name: "Btn Gradient End",
    token: "--color-btn-gradient-end",
    value: "#9B6FA0",
  },
]

const TYPOGRAPHY_SCALE = [
  {
    name: "Display XL",
    token: "--font-size-display-xl",
    value: "clamp(2.25rem, 3.5vw, 3.5rem)",
    element: "h1" as const,
    heading: true,
  },
  {
    name: "Display",
    token: "--font-size-display",
    value: "clamp(1.875rem, 3vw, 2.75rem)",
    element: "h1" as const,
    heading: true,
  },
  {
    name: "H1",
    token: "--font-size-h1",
    value: "clamp(1.625rem, 2.5vw, 2.25rem)",
    element: "h1" as const,
    heading: true,
  },
  {
    name: "H2",
    token: "--font-size-h2",
    value: "clamp(1.25rem, 2vw, 1.75rem)",
    element: "h2" as const,
    heading: true,
  },
  {
    name: "H3",
    token: "--font-size-h3",
    value: "clamp(1.125rem, 1.5vw, 1.375rem)",
    element: "h3" as const,
    heading: true,
  },
  {
    name: "H4",
    token: "--font-size-h4",
    value: "1.125rem",
    element: "h4" as const,
    heading: true,
  },
  {
    name: "Body Large",
    token: "--font-size-body-lg",
    value: "1.125rem",
    element: "p" as const,
    heading: false,
  },
  {
    name: "Body",
    token: "--font-size-body",
    value: "1rem",
    element: "p" as const,
    heading: false,
  },
  {
    name: "Body Small",
    token: "--font-size-body-sm",
    value: "0.875rem",
    element: "p" as const,
    heading: false,
  },
  {
    name: "Caption",
    token: "--font-size-caption",
    value: "0.75rem",
    element: "span" as const,
    heading: false,
  },
  {
    name: "Overline",
    token: "--font-size-overline",
    value: "0.6875rem",
    element: "span" as const,
    heading: false,
  },
]

const SHADOWS = [
  { name: "SM", token: "--shadow-sm", value: "0 1px 2px rgba(9,7,8,0.05)" },
  { name: "MD", token: "--shadow-md", value: "0 4px 12px rgba(9,7,8,0.08)" },
  { name: "LG", token: "--shadow-lg", value: "0 8px 24px rgba(9,7,8,0.12)" },
  { name: "XL", token: "--shadow-xl", value: "0 16px 48px rgba(9,7,8,0.16)" },
]

/* ────────────────────────────────────────────────────────────────────────── */

function ColorSwatch({
  name,
  token,
  value,
}: {
  name: string
  token: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className="aspect-square w-full rounded-sm border border-border"
        style={{ backgroundColor: value }}
      />
      <div className="flex flex-col gap-0.5">
        <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
          {name}
        </span>
        <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
          {value}
        </span>
        <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground/60">
          {token}
        </span>
      </div>
    </div>
  )
}

function ColorRow({
  title,
  colors,
}: {
  title: string
  colors: { name: string; token: string; value: string }[]
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
        {title}
      </h3>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {colors.map((c) => (
          <ColorSwatch key={c.token} {...c} />
        ))}
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────────────── */

export default function StyleguidePage() {
  return (
    <main>
      {/* ── Page header ──────────────────────────────────────── */}
      <section className="border-b border-border bg-deep-plum-10 px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)]">
          <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
            Design System
          </span>
          <h1 className="mt-3 font-heading text-[length:var(--font-size-display)] leading-snug font-[40] text-foreground">
            Styleguide
          </h1>
          <p className="mt-4 max-w-xl text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
            All design tokens, primitives and composed components used across
            the Vazby Květin website.
          </p>
        </div>
      </section>

      <div className="mx-auto flex max-w-[var(--max-width-content)] flex-col gap-[var(--spacing-section-y)] px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        {/* ── Logo ─────────────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Logo
          </h2>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-8 rounded-sm border border-border bg-background p-8">
              <Logo variant="color" className="h-8" />
            </div>
            <div className="flex items-center gap-8 rounded-sm bg-deep-plum p-8">
              <Logo variant="white" className="h-8" />
            </div>
          </div>
        </section>

        {/* ── Colors ───────────────────────────────────────────── */}
        <section className="flex flex-col gap-10">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Colors
          </h2>
          <ColorRow title="Brand — Deep Plum" colors={BRAND_COLORS} />
          <ColorRow title="Brand — Plum" colors={PLUM_COLORS} />
          <ColorRow title="Button Gradient" colors={BUTTON_COLORS} />
          <ColorRow title="Neutral" colors={NEUTRAL_COLORS} />
          <ColorRow title="Semantic" colors={SEMANTIC_COLORS} />
        </section>

        {/* ── Typography ──────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Typography
          </h2>

          {/* Font families */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Font Families
            </h3>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                <span className="text-[length:var(--font-size-caption)] uppercase tracking-widest text-muted-foreground">
                  Heading
                </span>
                <span className="font-heading text-[length:var(--font-size-h3)] font-[40]">
                  Latino Gothic Variable
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  font-heading
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                <span className="text-[length:var(--font-size-caption)] uppercase tracking-widest text-muted-foreground">
                  Sans
                </span>
                <span className="font-sans text-[length:var(--font-size-h3)] font-[30]">
                  Latino Gothic / DM Sans
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  font-sans
                </span>
              </div>
              <div className="flex flex-col gap-2 rounded-sm border border-border p-5">
                <span className="text-[length:var(--font-size-caption)] uppercase tracking-widest text-muted-foreground">
                  Mono
                </span>
                <span className="font-mono text-[length:var(--font-size-h3)]">
                  JetBrains Mono
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  font-mono
                </span>
              </div>
            </div>
          </div>

          {/* Type scale */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Type Scale
            </h3>
            <div className="flex flex-col divide-y divide-border rounded-sm border border-border">
              {TYPOGRAPHY_SCALE.map((t) => (
                <div
                  key={t.token}
                  className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <div className="flex shrink-0 items-baseline gap-3 sm:w-48">
                    <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                      {t.name}
                    </span>
                    <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                      {t.value}
                    </span>
                  </div>
                  <span
                    className={
                      t.heading
                        ? "font-heading leading-snug font-[40] text-foreground"
                        : "font-sans font-[30] leading-relaxed text-foreground"
                    }
                    style={{
                      fontSize: `var(${t.token})`,
                    }}
                  >
                    Květiny pro chvíle, na kterých záleží
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Letter spacing */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Letter Spacing
            </h3>
            <div className="flex flex-col divide-y divide-border rounded-sm border border-border">
              {[
                { name: "Tight", value: "-0.02em", token: "--letter-spacing-tight" },
                { name: "Normal", value: "0", token: "--letter-spacing-normal" },
                { name: "Wide", value: "0.05em", token: "--letter-spacing-wide" },
                { name: "Wider", value: "0.1em", token: "--letter-spacing-wider" },
                { name: "Widest", value: "0.2em", token: "--letter-spacing-widest" },
              ].map((ls) => (
                <div
                  key={ls.token}
                  className="flex items-baseline gap-6 px-5 py-3"
                >
                  <span className="w-24 shrink-0 text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                    {ls.name}
                  </span>
                  <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                    {ls.value}
                  </span>
                  <span
                    className="text-[length:var(--font-size-body)] uppercase text-foreground"
                    style={{ letterSpacing: ls.value }}
                  >
                    Vazby Květin
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Shadows ─────────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Shadows
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {SHADOWS.map((s) => (
              <div key={s.token} className="flex flex-col gap-3">
                <div
                  className="aspect-[4/3] rounded-sm border border-border bg-background"
                  style={{ boxShadow: s.value }}
                />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                    {s.name}
                  </span>
                  <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                    {s.token}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Spacing & Layout ────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Spacing & Layout
          </h2>
          <div className="flex flex-col divide-y divide-border rounded-sm border border-border">
            {[
              {
                name: "Section Y",
                token: "--spacing-section-y",
                value: "clamp(4rem, 8vw, 8rem)",
              },
              {
                name: "Section X",
                token: "--spacing-section-x",
                value: "clamp(1rem, 5vw, 6rem)",
              },
              {
                name: "Max Width Site",
                token: "--max-width-site",
                value: "1440px",
              },
              {
                name: "Max Width Content",
                token: "--max-width-content",
                value: "1200px",
              },
              {
                name: "Max Width Narrow",
                token: "--max-width-narrow",
                value: "800px",
              },
            ].map((s) => (
              <div
                key={s.token}
                className="flex items-baseline gap-6 px-5 py-3"
              >
                <span className="w-40 shrink-0 text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                  {s.name}
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  {s.token}
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground/60">
                  {s.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Transitions ─────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Transitions
          </h2>
          <div className="flex flex-col divide-y divide-border rounded-sm border border-border">
            {[
              { name: "Easing", token: "--ease-default", value: "cubic-bezier(0.25, 0, 0, 1)" },
              { name: "Fast", token: "--transition-fast", value: "200ms" },
              { name: "Base", token: "--transition-base", value: "350ms" },
              { name: "Slow", token: "--transition-slow", value: "500ms" },
              { name: "Card", token: "--transition-card", value: "400ms" },
            ].map((t) => (
              <div
                key={t.token}
                className="flex items-baseline gap-6 px-5 py-3"
              >
                <span className="w-24 shrink-0 text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                  {t.name}
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  {t.token}
                </span>
                <span className="font-mono text-[length:var(--font-size-caption)] text-muted-foreground/60">
                  {t.value}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Section Heading ─────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Section Heading
          </h2>
          <div className="flex flex-col gap-10 rounded-sm border border-border p-8">
            <SectionHeading
              overline="Overline text"
              heading="Left-Aligned Heading"
              body="Supporting body text that provides additional context for the section. Uses muted foreground color and relaxed line height."
              alignment="left"
            />
            <div className="border-t border-border pt-10">
              <SectionHeading
                overline="Centered variant"
                heading="Center-Aligned Heading"
                body="The centered variant constrains body text width and centers all content. Used for feature sections and callouts."
                alignment="center"
              />
            </div>
          </div>
        </section>

        {/* ── Interactive Components (client island) ──────────── */}
        <StyleguideInteractive />

        {/* ── Product Card ─────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Product Card
          </h2>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            <ProductCard
              title="Vzpomínková kytice"
              price={1890}
              badge="Oblíbené"
              slug="vzpominkova-kytice"
              category="smutecni"
            />
            <ProductCard
              title="Smuteční věnec"
              price={2490}
              badge="Novinka"
              slug="smutecni-venec"
              category="smutecni"
            />
            <ProductCard
              title="Svatební pugét"
              price={3200}
              badge={null}
              slug="svatebni-puget"
              category="svatebni"
            />
            <ProductCard
              title="Sezónní kytice"
              price={990}
              badge="Sezónní"
              slug="sezonni-kytice"
              category="kytice"
            />
          </div>
        </section>

        {/* ── Category Card ────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Category Card
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CategoryCard
              title="Smuteční"
              subtitle="Květiny pro poslední rozloučení"
              href="/smutecni"
            />
            <CategoryCard
              title="Svatební"
              subtitle="Květiny pro Váš velký den"
              href="/svatebni"
            />
            <CategoryCard
              title="Kytice & dárky"
              subtitle="Radost pro každou příležitost"
              href="/kytice"
            />
          </div>
        </section>

        {/* ── Hero Section ─────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Hero Section
          </h2>
          <p className="text-[length:var(--font-size-body)] text-muted-foreground">
            Full-height and sub-page hero variants. Shown inline below with
            constrained height.
          </p>
        </section>
      </div>

      {/* Hero full variant (shown outside content container) */}
      <div className="relative max-h-[60vh] overflow-hidden">
        <Hero
          heading="Květiny pro chvíle, na kterých záleží"
          subheading="Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS."
          ctaText="Prohlédnout nabídku"
          ctaHref="/smutecni"
          variant="sub"
        />
      </div>

      {/* ── Form Elements ──────────────────────────────────── */}
      <div className="mx-auto flex max-w-[var(--max-width-content)] flex-col gap-[var(--spacing-section-y)] px-[var(--spacing-section-x)] py-[var(--spacing-section-y)]">
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Form Elements
          </h2>

          {/* Textarea */}
          <div className="flex max-w-md flex-col gap-4">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Textarea
            </h3>
            <div className="flex flex-col gap-2">
              <label className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                Label
                <span className="ml-1 font-[30] text-muted-foreground">
                  (optional)
                </span>
              </label>
              <textarea
                placeholder="Placeholder text..."
                rows={3}
                readOnly
                className="resize-none rounded-sm border border-border bg-background px-3 py-2.5 text-[length:var(--font-size-body-sm)] text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-plum-50 focus:ring-2 focus:ring-plum-50/20"
              />
            </div>
          </div>

          {/* Size selector pattern */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-[length:var(--font-size-h3)] font-[40] text-foreground">
              Size Selector Pattern
            </h3>
            <div className="flex gap-3">
              {["S", "M", "L"].map((size, i) => (
                <button
                  key={size}
                  type="button"
                  className={`flex h-11 w-14 items-center justify-center rounded-sm border text-[length:var(--font-size-body-sm)] font-[30] transition-colors ${
                    i === 1
                      ? "border-deep-plum bg-deep-plum text-neutral-white"
                      : "border-border text-foreground hover:border-deep-plum-70 hover:text-deep-plum"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Badges ────────────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Badges
          </h2>
          <div className="flex flex-wrap gap-3">
            {["Oblíbené", "Novinka", "Sezónní", "Předplatné"].map((badge) => (
              <span
                key={badge}
                className="rounded-sm bg-deep-plum px-2.5 py-1 text-[length:var(--font-size-caption)] font-[30] text-neutral-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>

        {/* ── Nav Link Animation ───────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Nav Link Animation
          </h2>
          <div className="flex gap-6">
            {["Smuteční", "Svatební", "Kytice & dárky", "O nás", "Kontakt"].map(
              (label) => (
                <span
                  key={label}
                  className="nav-link cursor-pointer pb-1 text-[length:var(--font-size-body-sm)] font-[30] text-foreground"
                >
                  {label}
                </span>
              ),
            )}
          </div>
        </section>

        {/* ── Urgent Delivery Badge ─────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Urgent Delivery Badge
          </h2>
          <div className="flex max-w-sm items-center gap-2 rounded-sm bg-deep-plum/10 px-3 py-2">
            <div className="size-2 rounded-full bg-deep-plum" />
            <span className="text-[length:var(--font-size-body-sm)] font-[30] text-deep-plum">
              Doručíme do 4 hodin v Praze
            </span>
          </div>
        </section>

        {/* ── Price Format ──────────────────────────────────── */}
        <section className="flex flex-col gap-8">
          <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
            Price Format
          </h2>
          <div className="flex items-baseline gap-6">
            {[990, 1890, 2490, 3200].map((price) => (
              <span
                key={price}
                className="font-mono text-[length:var(--font-size-body)] font-[30] text-muted-foreground"
              >
                {new Intl.NumberFormat("cs-CZ", {
                  style: "currency",
                  currency: "CZK",
                  minimumFractionDigits: 0,
                }).format(price)}
              </span>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
