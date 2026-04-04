import type { Metadata } from "next"
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google"

import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Vazby Květin — Květiny pro chvíle, na kterých záleží",
    template: "%s | Vazby Květin",
  },
  description:
    "Smuteční, svatební a dárkové květiny s doručením po Praze. Součást ekosystému pohřební služby PEGAS.",
  metadataBase: new URL("https://vazbykvetin.cz"),
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    siteName: "Vazby Květin",
  },
}
import { ThemeProvider } from "@/components/theme-provider"
import { NavBar } from "@/components/navbar/navbar"
import { Footer } from "@/components/footer"
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

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
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
        jetbrainsMono.variable,
      )}
    >
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/tkt6gli.css" />
      </head>
      <body>
        <ThemeProvider>
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
