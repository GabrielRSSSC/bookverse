"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"

export type HeaderVariant = "public" | "app"

type HeaderProps = {
  variant?: HeaderVariant
  active?: "home" | "biblioteca" | "upload" | "perfil"
}

const PUBLIC_LINKS = [
  { href: "/home", label: "Home", key: "home" as const },
  {
    href: "/biblioteca",
    label: "Minha Biblioteca",
    key: "biblioteca" as const,
  },
  { href: "/biblioteca#upload", label: "Upload", key: "upload" as const },
]

const APP_LINKS = [
  { href: "/home", label: "Home", key: "home" as const },
  {
    href: "/biblioteca",
    label: "Minha Biblioteca",
    key: "biblioteca" as const,
  },
  { href: "/biblioteca#upload", label: "Upload", key: "upload" as const },
  { href: "/perfil", label: "Perfil", key: "perfil" as const },
]

export function Header({ variant = "public", active }: HeaderProps) {
  const [open, setOpen] = useState(false)
  const links = variant === "app" ? APP_LINKS : PUBLIC_LINKS
  const showSearch = variant === "public"

  const linkClass = (key: HeaderProps["active"]) =>
    cn(
      "text-sm font-medium transition-colors hover:text-primary",
      active === key ? "font-semibold text-primary" : "text-foreground"
    )

  return (
    <header className="w-full bg-background px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <Link
          href="/home"
          className="flex shrink-0 items-center gap-2 text-xl font-bold text-foreground"
        >
          <BookOpen className="size-6" strokeWidth={2.5} />
          <span>BookVerse</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={linkClass(link.key)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {showSearch ? (
          <div className="hidden w-full max-w-xs md:block">
            <input
              type="text"
              placeholder="Pesquisar"
              className="w-full rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            />
          </div>
        ) : (
          <div className="hidden md:block" />
        )}

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="rounded-full p-2 text-foreground transition-colors hover:bg-muted md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-3 flex max-w-7xl flex-col gap-1 md:hidden">
          {links.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                active === link.key
                  ? "bg-muted text-primary"
                  : "text-foreground hover:bg-muted"
              )}
            >
              {link.label}
            </Link>
          ))}

          {showSearch && (
            <input
              type="text"
              placeholder="Pesquisar"
              className="mt-2 w-full rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            />
          )}
        </nav>
      )}
    </header>
  )
}
