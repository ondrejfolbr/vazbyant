import { Button } from "@/components/ui/button"
import { SectionHeading } from "@/components/ui/section-heading"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CategoryCard } from "@/components/category-card"
import { ProductCard } from "@/components/product-card"
import { Hero } from "@/components/hero"
import { QuantitySelector } from "@/components/quantity-selector"
import { QuickOrderForm } from "@/components/quick-order-form"
import { products } from "@/lib/products.data"

function StyleSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-8 border-b border-border pb-16">
      <h2 className="font-heading text-[length:var(--font-size-h2)] font-[40] text-foreground">
        {title}
      </h2>
      {children}
    </section>
  )
}

function ColorSwatch({
  name,
  className,
}: {
  name: string
  className: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`h-16 w-full rounded-sm ${className}`} />
      <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
        {name}
      </span>
    </div>
  )
}

export default function StyleguidePage() {
  return (
    <main>
      {/* Page header */}
      <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)] pt-16 pb-12">
        <h1 className="font-heading text-[length:var(--font-size-display)] font-[40] text-foreground">
          Styleguide
        </h1>
        <p className="mt-4 max-w-2xl text-[length:var(--font-size-body-lg)] leading-relaxed text-muted-foreground">
          Design system overview for Vazby Květin — all tokens, primitives, and
          components in one place.
        </p>
      </div>

      <div className="mx-auto flex max-w-[var(--max-width-site)] flex-col gap-16 px-[var(--spacing-section-x)] pb-[var(--spacing-section-y)]">
        {/* ── Colors ── */}
        <StyleSection title="Colors">
          {/* Primary */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Primary — Deep Plum
            </span>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              <ColorSwatch name="deep-plum" className="bg-deep-plum" />
              <ColorSwatch name="deep-plum-90" className="bg-deep-plum-90" />
              <ColorSwatch name="deep-plum-80" className="bg-deep-plum-80" />
              <ColorSwatch name="deep-plum-70" className="bg-deep-plum-70" />
              <ColorSwatch name="deep-plum-10" className="bg-deep-plum-10" />
            </div>
          </div>

          {/* Accent */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Accent — Plum
            </span>
            <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
              <ColorSwatch name="plum-50" className="bg-plum-50" />
              <ColorSwatch name="plum-30" className="bg-plum-30" />
              <ColorSwatch name="plum-10" className="bg-plum-10" />
            </div>
          </div>

          {/* Neutrals */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Neutrals
            </span>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-7">
              <ColorSwatch
                name="black"
                className="bg-neutral-black"
              />
              <ColorSwatch name="900" className="bg-neutral-900" />
              <ColorSwatch name="800" className="bg-neutral-800" />
              <ColorSwatch name="700" className="bg-neutral-700" />
              <ColorSwatch name="600" className="bg-neutral-600" />
              <ColorSwatch name="500" className="bg-neutral-500" />
              <ColorSwatch name="400" className="bg-neutral-400" />
              <ColorSwatch name="300" className="bg-neutral-300" />
              <ColorSwatch name="200" className="bg-neutral-200" />
              <ColorSwatch name="100" className="bg-neutral-100" />
              <ColorSwatch
                name="50"
                className="border border-border bg-neutral-50"
              />
              <ColorSwatch
                name="white"
                className="border border-border bg-neutral-white"
              />
            </div>
          </div>

          {/* Semantic */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Semantic
            </span>
            <div className="grid grid-cols-4 gap-3">
              <ColorSwatch name="success" className="bg-success" />
              <ColorSwatch name="error" className="bg-error" />
              <ColorSwatch name="warning" className="bg-warning" />
              <ColorSwatch name="info" className="bg-info" />
            </div>
          </div>
        </StyleSection>

        {/* ── Typography ── */}
        <StyleSection title="Typography">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                display-xl · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-display-xl)] leading-tight font-[40]">
                Vazby pro život
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                display · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-display)] leading-tight font-[40]">
                Vazby pro loučení
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                h1 · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-h1)] leading-snug font-[40]">
                Smuteční květiny
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                h2 · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-h2)] leading-snug font-[40]">
                Květinářství, které rozumí
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                h3 · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-h3)] leading-snug font-[40]">
                Svatební kytice
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                h4 · font-heading
              </span>
              <span className="font-heading text-[length:var(--font-size-h4)] leading-snug font-[40]">
                Kytice Sluneční den
              </span>
            </div>

            <hr className="border-border" />

            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                body-lg · font-sans
              </span>
              <span className="text-[length:var(--font-size-body-lg)] leading-relaxed">
                Navrhujeme květiny pro chvíle, na kterých záleží.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                body · font-sans
              </span>
              <span className="text-[length:var(--font-size-body)] leading-normal">
                Známe prostředí loučení a víme, jak důležité je umět vyjádřit
                pocity.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                body-sm · font-sans
              </span>
              <span className="text-[length:var(--font-size-body-sm)] leading-normal">
                Doručení v Praze do 4 hodin. Mimo Prahu následující den.
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                caption · font-sans
              </span>
              <span className="text-[length:var(--font-size-caption)] leading-normal">
                © 2025 Vazby květin
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                overline · font-sans · uppercase · tracking-widest
              </span>
              <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest">
                O nás
              </span>
            </div>

            <hr className="border-border" />

            <div className="flex flex-col gap-1">
              <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                mono · font-mono — prices, codes
              </span>
              <span className="font-mono text-[length:var(--font-size-h3)] font-[30]">
                1 490 Kč
              </span>
              <span className="font-mono text-[length:var(--font-size-body)] font-[30]">
                2 890 Kč · 4 990 Kč · 790 Kč
              </span>
            </div>
          </div>
        </StyleSection>

        {/* ── Shadows ── */}
        <StyleSection title="Shadows">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {(
              [
                ["sm", "var(--shadow-sm)"],
                ["md", "var(--shadow-md)"],
                ["lg", "var(--shadow-lg)"],
                ["xl", "var(--shadow-xl)"],
              ] as const
            ).map(([label, shadow]) => (
              <div
                key={label}
                className="flex h-24 items-center justify-center rounded-sm bg-background"
                style={{ boxShadow: shadow }}
              >
                <span className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                  shadow-{label}
                </span>
              </div>
            ))}
          </div>
        </StyleSection>

        {/* ── Spacing ── */}
        <StyleSection title="Spacing (8px grid)">
          <div className="flex flex-col gap-2">
            {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32].map((step) => (
              <div key={step} className="flex items-center gap-4">
                <span className="w-8 text-right font-mono text-[length:var(--font-size-caption)] text-muted-foreground">
                  {step}
                </span>
                <div
                  className="h-3 rounded-sm bg-plum-50"
                  style={{ width: `${step * 0.25}rem` }}
                />
                <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
                  {step * 0.25}rem / {step * 4}px
                </span>
              </div>
            ))}
          </div>
        </StyleSection>

        {/* ── Buttons ── */}
        <StyleSection title="Buttons">
          {/* Variants */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Variants
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="default">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="accent">Accent</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          {/* Sizes */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              Sizes
            </span>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium (default)</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* States */}
          <div className="flex flex-col gap-3">
            <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
              States
            </span>
            <div className="flex flex-wrap items-center gap-3">
              <Button>Default</Button>
              <Button disabled>Disabled</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="outline" disabled>
                Outline Disabled
              </Button>
            </div>
          </div>
        </StyleSection>

        {/* ── SectionHeading ── */}
        <StyleSection title="SectionHeading">
          <div className="flex flex-col gap-12">
            <div className="rounded-sm border border-border p-8">
              <SectionHeading
                overline="O nás"
                heading="Květinářství, které rozumí chvílím, kdy na tom záleží."
                body="Známe prostředí loučení a víme, jak důležité je umět vyjádřit pocity ve chvílích, kdy na tom záleží."
              />
            </div>
            <div className="rounded-sm border border-border p-8">
              <SectionHeading
                heading="Vybrané pro vás"
                alignment="center"
              />
            </div>
          </div>
        </StyleSection>

        {/* ── Accordion ── */}
        <StyleSection title="Accordion">
          <div className="max-w-[var(--max-width-narrow)]">
            <Accordion type="single" collapsible>
              <AccordionItem value="popis">
                <AccordionTrigger>Popis</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Jemná smuteční kytice v tlumených tónech bílé a krémové.
                    Vyjadřuje úctu a tiché souznění.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="slozeni">
                <AccordionTrigger>Složení kytice</AccordionTrigger>
                <AccordionContent>
                  <p>Bílé růže, eustoma, eucalyptus, gypsophila, zeleň.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="dodani">
                <AccordionTrigger>Dodání</AccordionTrigger>
                <AccordionContent>
                  <p>
                    Doručení v Praze do 4 hodin. Mimo Prahu následující pracovní
                    den.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </StyleSection>

        {/* ── QuantitySelector ── */}
        <StyleSection title="QuantitySelector">
          <QuantitySelector />
        </StyleSection>

        {/* ── QuickOrderForm ── */}
        <StyleSection title="QuickOrderForm (funeral)">
          <div className="max-w-md">
            <QuickOrderForm />
          </div>
        </StyleSection>

        {/* ── ProductCard ── */}
        <StyleSection title="ProductCard">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                title={product.name}
                price={product.price}
                badge={product.badge}
                slug={product.slug}
                category={product.category}
              />
            ))}
          </div>
        </StyleSection>

        {/* ── CategoryCard ── */}
        <StyleSection title="CategoryCard">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <CategoryCard
              title="Smuteční květiny"
              subtitle="S respektem a pochopením"
              href="/smutecni/"
            />
            <CategoryCard
              title="Svatební květiny"
              subtitle="Pro váš den"
              href="/svatebni/"
            />
            <CategoryCard
              title="Kytice & Dárky"
              subtitle="Když slova nestačí"
              href="/kytice/"
            />
          </div>
        </StyleSection>

        {/* ── Hero ── */}
        <StyleSection title="Hero">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
                Variant: full (min-h-screen)
              </span>
              <p className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
                Shown on homepage — too tall for inline preview. See{" "}
                <a href="/" className="underline hover:text-deep-plum">
                  homepage
                </a>
                .
              </p>
            </div>
            <div className="overflow-hidden rounded-sm border border-border">
              <Hero
                heading="Smuteční květiny"
                subheading="Květiny pro chvíle loučení — s respektem a pochopením."
                variant="sub"
              />
            </div>
          </div>
        </StyleSection>
      </div>
    </main>
  )
}
