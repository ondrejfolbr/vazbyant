"use client"

import * as React from "react"
import Link from "next/link"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useProfileStore } from "@/store/profile-store"

const SAMPLE_USER = {
  name: "Jana Nováková",
  email: "jana.novakova@email.cz",
  phone: "+420 604 123 456",
  address: "Vinohradská 42, 120 00 Praha 2",
}

const SAMPLE_ORDERS = [
  {
    id: "OBJ-2026-0412",
    date: "8. 4. 2026",
    status: "Doručeno",
    total: 3490,
    items: "Kytice na rakev Ticho",
  },
  {
    id: "OBJ-2026-0389",
    date: "22. 3. 2026",
    status: "Doručeno",
    total: 2890,
    items: "Věnec Vzpomínka",
  },
  {
    id: "OBJ-2026-0345",
    date: "14. 3. 2026",
    status: "Doručeno",
    total: 14990,
    items: "Smuteční set Vzpomínky",
  },
]

const SAMPLE_SUBSCRIPTION = {
  name: "VK BOX — měsíční předplatné",
  nextDelivery: "15. 4. 2026",
  frequency: "Měsíčně",
  price: 1290,
}

type Tab = "profile" | "orders" | "subscription"

function ProfileDrawer() {
  const { isDrawerOpen, closeDrawer } = useProfileStore()
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<Tab>("profile")

  React.useEffect(() => {
    if (isDrawerOpen) {
      setActiveTab("profile")
    }
  }, [isDrawerOpen])

  return (
    <Sheet open={isDrawerOpen} onOpenChange={(open) => !open && closeDrawer()}>
      <SheetContent
        side="right"
        className="flex w-full flex-col sm:max-w-[520px]"
        aria-label="Můj účet"
      >
        <SheetHeader>
          <SheetTitle className="font-heading text-[length:var(--font-size-h3)] font-[40]">
            {isLoggedIn ? "Můj účet" : "Přihlášení"}
          </SheetTitle>
          <SheetDescription className="sr-only">
            Správa vašeho účtu
          </SheetDescription>
        </SheetHeader>

        {isLoggedIn ? (
          <LoggedInView
            activeTab={activeTab}
            onTabChange={setActiveTab}
            onLogout={() => setIsLoggedIn(false)}
          />
        ) : (
          <LoginView onLogin={() => setIsLoggedIn(true)} />
        )}
      </SheetContent>
    </Sheet>
  )
}

// --- Login view ---

function LoginView({ onLogin }: { onLogin: () => void }) {
  return (
    <div className="flex flex-1 flex-col gap-6 px-6 pt-4">
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1.5">
          <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
            E-mail
          </span>
          <input
            type="email"
            placeholder="vas@email.cz"
            autoComplete="email"
            required
            className="rounded-sm border border-border bg-background px-4 py-2.5 text-[length:var(--font-size-body)] text-foreground placeholder:text-muted-foreground focus:border-deep-plum focus:outline-none"
          />
        </label>
        <label className="flex flex-col gap-1.5">
          <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
            Heslo
          </span>
          <input
            type="password"
            placeholder="••••••••"
            autoComplete="current-password"
            required
            className="rounded-sm border border-border bg-background px-4 py-2.5 text-[length:var(--font-size-body)] text-foreground placeholder:text-muted-foreground focus:border-deep-plum focus:outline-none"
          />
        </label>
        <button
          type="button"
          className="self-start text-[length:var(--font-size-body-sm)] text-muted-foreground underline transition-colors hover:text-foreground"
        >
          Zapomenuté heslo?
        </button>
      </div>

      <Button size="lg" className="w-full" onClick={onLogin}>
        Přihlásit se
      </Button>

      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-border" />
        <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
          nebo
        </span>
        <div className="h-px flex-1 bg-border" />
      </div>

      <Button variant="secondary" size="lg" className="w-full" onClick={onLogin}>
        Vytvořit účet
      </Button>

      <p className="text-center text-[length:var(--font-size-caption)] leading-relaxed text-muted-foreground">
        Registrací získáte přehled objednávek, správu předplatného a rychlejší
        objednávání.
      </p>
    </div>
  )
}

// --- Logged in view ---

function LoggedInView({
  activeTab,
  onTabChange,
  onLogout,
}: {
  activeTab: Tab
  onTabChange: (tab: Tab) => void
  onLogout: () => void
}) {
  const tabs: { id: Tab; label: string }[] = [
    { id: "profile", label: "Moje údaje" },
    { id: "orders", label: "Objednávky" },
    { id: "subscription", label: "Předplatné" },
  ]

  return (
    <div className="flex flex-1 flex-col gap-0 overflow-hidden px-6">
      <div className="flex gap-1 border-b border-border" role="tablist" aria-label="Sekce účtu">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            aria-controls={`tabpanel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2.5 text-[length:var(--font-size-body-sm)] transition-colors ${
              activeTab === tab.id
                ? "border-b-2 border-deep-plum font-[30] text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 overflow-y-auto py-6" role="tabpanel" id={`tabpanel-${activeTab}`} aria-labelledby={`tab-${activeTab}`}>
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "orders" && <OrdersTab />}
        {activeTab === "subscription" && <SubscriptionTab />}
      </div>

      <div className="border-t border-border pt-4 pb-2">
        <button
          type="button"
          onClick={onLogout}
          className="text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:text-foreground"
        >
          Odhlásit se
        </button>
      </div>
    </div>
  )
}

// --- Profile tab ---

function ProfileTab() {
  const [isEditing, setIsEditing] = React.useState(false)
  const [form, setForm] = React.useState({
    name: SAMPLE_USER.name,
    email: SAMPLE_USER.email,
    phone: SAMPLE_USER.phone,
    address: SAMPLE_USER.address,
  })

  if (isEditing) {
    return (
      <div className="flex flex-col gap-5">
        <EditField label="Jméno" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
        <EditField label="E-mail" value={form.email} onChange={(v) => setForm({ ...form, email: v })} type="email" />
        <EditField label="Telefon" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} type="tel" />
        <EditField label="Doručovací adresa" value={form.address} onChange={(v) => setForm({ ...form, address: v })} />

        <div className="flex gap-3 pt-2">
          <Button size="md" onClick={() => setIsEditing(false)}>
            Uložit změny
          </Button>
          <Button variant="secondary" size="md" onClick={() => setIsEditing(false)}>
            Zrušit
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-full bg-deep-plum-10">
          <span className="text-[length:var(--font-size-h3)] font-[40] text-deep-plum">
            {form.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-[length:var(--font-size-body)] font-[30] text-foreground">
            {form.name}
          </p>
          <p className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
            {form.email}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <InfoRow label="Telefon" value={form.phone} />
        <InfoRow label="Doručovací adresa" value={form.address} />
      </div>

      <Button variant="secondary" size="md" className="self-start" onClick={() => setIsEditing(true)}>
        Upravit údaje
      </Button>

      <div className="border-t border-border pt-6">
        <h3 className="mb-3 text-[length:var(--font-size-body-sm)] font-[30] uppercase tracking-wider text-muted-foreground">
          Nastavení
        </h3>
        <div className="flex flex-col gap-3">
          <SettingRow label="E-mailová upozornění" checked />
          <SettingRow label="SMS o doručení" checked />
          <SettingRow label="Marketingové novinky" checked={false} />
        </div>
      </div>
    </div>
  )
}

function EditField({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string
  value: string
  onChange: (value: string) => void
  type?: string
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
        {label}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-sm border border-border bg-background px-4 py-2.5 text-[length:var(--font-size-body)] text-foreground focus:border-deep-plum focus:outline-none"
      />
    </label>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="text-[length:var(--font-size-caption)] text-muted-foreground">
        {label}
      </span>
      <span className="text-[length:var(--font-size-body)] text-foreground">
        {value}
      </span>
    </div>
  )
}

function SettingRow({ label, checked }: { label: string; checked: boolean }) {
  return (
    <label className="flex cursor-pointer items-center justify-between py-1">
      <span className="text-[length:var(--font-size-body-sm)] text-foreground">
        {label}
      </span>
      <input
        type="checkbox"
        defaultChecked={checked}
        className="sr-only peer"
      />
      <div
        className={`flex h-5 w-9 items-center rounded-full px-0.5 transition-colors ${
          checked ? "bg-deep-plum" : "bg-border"
        } peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2`}
        aria-hidden="true"
      >
        <div
          className={`size-4 rounded-full bg-neutral-white shadow-sm transition-transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
    </label>
  )
}

// --- Orders tab ---

function OrdersTab() {
  return (
    <div className="flex flex-col gap-4">
      {SAMPLE_ORDERS.map((order) => (
        <div
          key={order.id}
          className="flex flex-col gap-2 rounded-sm border border-border p-4"
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
                {order.id}
              </p>
              <p className="text-[length:var(--font-size-caption)] text-muted-foreground">
                {order.date}
              </p>
            </div>
            <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[length:var(--font-size-caption)] font-[30] text-green-700">
              {order.status}
            </span>
          </div>
          <p className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
            {order.items}
          </p>
          <div className="flex items-center justify-between border-t border-border pt-2">
            <span className="text-[length:var(--font-size-body-sm)] font-[30] text-foreground">
              {order.total.toLocaleString("cs-CZ")} Kč
            </span>
            <button
              type="button"
              className="text-[length:var(--font-size-caption)] text-deep-plum underline transition-colors hover:text-deep-plum-70"
            >
              Detail objednávky
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

// --- Subscription tab ---

function SubscriptionTab() {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-sm border border-border p-5">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <p className="text-[length:var(--font-size-body)] font-[30] text-foreground">
              {SAMPLE_SUBSCRIPTION.name}
            </p>
            <p className="mt-1 text-[length:var(--font-size-body-sm)] text-muted-foreground">
              {SAMPLE_SUBSCRIPTION.price.toLocaleString("cs-CZ")} Kč / měsíc
            </p>
          </div>
          <span className="rounded-full bg-green-50 px-2.5 py-0.5 text-[length:var(--font-size-caption)] font-[30] text-green-700">
            Aktivní
          </span>
        </div>

        <div className="flex flex-col gap-3 border-t border-border pt-4">
          <InfoRow label="Další doručení" value={SAMPLE_SUBSCRIPTION.nextDelivery} />
          <InfoRow label="Frekvence" value={SAMPLE_SUBSCRIPTION.frequency} />
          <InfoRow label="Doručovací adresa" value={SAMPLE_USER.address} />
        </div>

        <div className="mt-5 flex gap-3">
          <Button variant="secondary" size="sm">
            Pozastavit
          </Button>
          <button
            type="button"
            className="px-3 py-1.5 text-[length:var(--font-size-body-sm)] text-muted-foreground transition-colors hover:text-foreground"
          >
            Zrušit předplatné
          </button>
        </div>
      </div>

      <div className="rounded-sm border border-dashed border-border p-5 text-center">
        <p className="text-[length:var(--font-size-body-sm)] text-muted-foreground">
          Chcete přidat další předplatné?
        </p>
        <Link
          href="/kytice"
          className="mt-2 inline-block text-[length:var(--font-size-body-sm)] text-deep-plum underline transition-colors hover:text-deep-plum-70"
          onClick={() => useProfileStore.getState().closeDrawer()}
        >
          Prohlédnout nabídku
        </Link>
      </div>

      <div>
        <h3 className="mb-3 text-[length:var(--font-size-body-sm)] font-[30] uppercase tracking-wider text-muted-foreground">
          Historie doručení
        </h3>
        <div className="flex flex-col gap-2">
          {["15. 3. 2026", "15. 2. 2026", "15. 1. 2026"].map((date) => (
            <div
              key={date}
              className="flex items-center justify-between py-2 text-[length:var(--font-size-body-sm)]"
            >
              <span className="text-foreground">{date}</span>
              <span className="text-muted-foreground">Doručeno</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export { ProfileDrawer }
