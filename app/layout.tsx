import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
    template: "%s | Vazby Květin",
  },
  description:
    "Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS.",
  metadataBase: new URL("https://vazbykvetin.cz"),
  alternates: {
    canonical: "./",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Vazby Květin",
    title: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
    description:
      "Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS.",
    url: "./",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vazby Květin — smuteční a svatební květiny",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
    description:
      "Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS.",
  },
}
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
import { CartDrawer } from "@/components/cart/CartDrawer"
import { ProfileDrawer } from "@/components/profile/ProfileDrawer"
import { SearchDialog } from "@/components/search/SearchDialog"
import { cn } from "@/lib/utils"

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading-fallback",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="cs"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        cormorant.variable,
        dmSans.variable,
      )}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/dnw8jfr.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Florist",
              "name": "Vazby Květin",
              "url": "https://vazbykvetin.cz",
              "telephone": "+420604585271",
              "email": "info@vazbykvetin.cz",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mirošovická 704",
                "addressLocality": "Mnichovice",
                "postalCode": "251 64",
                "addressCountry": "CZ",
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "07:00",
                  "closes": "15:30",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "07:00",
                  "closes": "12:00",
                },
              ],
              "description":
                "Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS.",
              "parentOrganization": {
                "@type": "Organization",
                "name": "PEGAS pohřební služba",
                "url": "https://pohrebpegas.cz",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-deep-plum focus:px-4 focus:py-2 focus:text-neutral-white focus:outline-none"
          >
            Přeskočit na obsah
          </a>
          <NavBar />
          {children}
          <Footer />
          <CartDrawer />
          <ProfileDrawer />
          <SearchDialog />
        </ThemeProvider>
      </body>
    </html>
  )
}
