"use client";

import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { siteConfig } from "@/lib/data";

const navItems = [
  { href: "#projects", ja: "プロジェクト", en: "Projects" },
  { href: "#visual-works", ja: "ビジュアルワークス", en: "Visual Works" },
  { href: "#about", ja: "自己紹介", en: "About" },
  { href: "#timeline", ja: "経歴", en: "Timeline" },
  { href: "#contact", ja: "連絡先", en: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="#top" className="text-lg font-medium tracking-tight text-foreground">
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              {item.ja}
              <span className="ml-1.5 font-en text-[10px] text-muted-foreground">{item.en}</span>
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={open}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm text-foreground/90 last:border-none"
              >
                {item.ja}
                <span className="ml-1.5 font-en text-[10px] text-muted-foreground">{item.en}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
