import type { Metadata } from "next"
import Image from "next/image"

import { SectionHeading } from "@/components/ui/section-heading"

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte nás — Vazby Květin, Mirošovická 704, Mnichovice. Objednávky a dotazy na 604 585 271.",
}

const CONTACT_SECTIONS = [
  {
    label: "Kontakty",
    items: [
      {
        heading: "E-mail",
        content: "info@vazbykvetin.cz",
        href: "mailto:info@vazbykvetin.cz",
      },
      {
        heading: "Vedoucí výroby květin a objednávky e-shop",
        content: "604 585 271",
        href: "tel:+420604585271",
      },
      {
        heading: "Výrobní hala vazárny",
        content: "608 348 111",
        href: "tel:+420608348111",
      },
    ],
  },
  {
    label: "Adresa provozovny",
    items: [
      {
        heading: "VAZBY KVĚTIN s.r.o.",
        content: "Mirošovická 704\n251 64 Mnichovice",
      },
      {
        heading: "IČ",
        content: "75339170",
      },
      {
        heading: "DIČ",
        content: "CZ8406100505",
      },
    ],
  },
  {
    label: "Otevírací doba výrobní haly",
    items: [
      {
        heading: "Pondělí – Pátek",
        content: "7:00 – 15:30",
      },
      {
        heading: "Sobota",
        content: "Zavřeno",
      },
      {
        heading: "Neděle",
        content: "7:00 – 12:00",
      },
    ],
  },
] as const

export default function KontaktPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-deep-plum-10 py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-site)] px-[var(--spacing-section-x)]">
          <SectionHeading
            overline="Kontakt"
            heading="Jsme tu pro vás."
            body="Ať potřebujete poradit s výběrem, domluvit doručení nebo cokoliv jiného — ozvěte se nám."
          />
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto grid max-w-[var(--max-width-content)] grid-cols-1 gap-16 px-[var(--spacing-section-x)] md:grid-cols-3">
          {CONTACT_SECTIONS.map((section) => (
            <div key={section.label} className="flex flex-col gap-6">
              <span className="text-[length:var(--font-size-overline)] font-[40] uppercase tracking-widest text-foreground">
                {section.label}
              </span>
              <div className="flex flex-col gap-5">
                {section.items.map((item) => (
                  <div key={item.heading} className="flex flex-col gap-1">
                    <span className="text-[length:var(--font-size-caption)] font-[40] text-muted-foreground">
                      {item.heading}
                    </span>
                    {"href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="text-[length:var(--font-size-body)] text-foreground transition-colors hover:text-deep-plum-70"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <span className="whitespace-pre-line text-[length:var(--font-size-body)] text-foreground">
                        {item.content}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo */}
      <section className="py-[var(--spacing-section-y)]">
        <div className="mx-auto max-w-[var(--max-width-content)] px-[var(--spacing-section-x)]">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <Image
              src="/zivot/zivot-9.jpg"
              alt="Naše vazárna — floristky při práci"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-border">
        <iframe
          src="https://maps.google.com/maps?q=Miro%C5%A1ovick%C3%A1+704%2C+251+64+Mnichovice&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa — Mirošovická 704, Mnichovice"
        />
      </section>
    </main>
  )
}
