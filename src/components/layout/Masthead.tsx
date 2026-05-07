"use client";

import Link from "next/link";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";

export default function Masthead() {
  const { locale, toggle } = useLocale();
  const isEN = locale === "en";

  const NAV = [
    { href: "/sigara",   label: pick(locale, dict.navSmoking) },
    { href: "/alkol",    label: pick(locale, dict.navAlcohol) },
    { href: "/obezite",  label: pick(locale, dict.navObesity) },
    { href: "/uyku",     label: pick(locale, dict.navSleep) },
    { href: "/siralama", label: pick(locale, dict.navRanking) },
    { href: "/ekonomi",  label: pick(locale, dict.navEconomy) },
  ];

  return (
    <header className="masthead">
      <Link href="/" className="mark" aria-label={pick(locale, dict.ariaHome)}>
        <span className="glyph">B</span>
        <span>
          BadHabits
          <span style={{ color: "var(--ink-mute)" }}>·</span>
          World
        </span>
      </Link>
      <nav className="nav-links" aria-label={pick(locale, dict.ariaMainNav)}>
        {NAV.map((n) => (
          <Link key={n.href} href={n.href}>{n.label}</Link>
        ))}
      </nav>
      <div className="edition">
        <strong>{pick(locale, dict.edition)}</strong>
        {pick(locale, dict.editionDate)}
      </div>
      <button
        type="button"
        className="lang-toggle"
        onClick={toggle}
        aria-label={
          isEN
            ? pick(locale, dict.toggleAriaToTR)
            : pick(locale, dict.toggleAriaToEN)
        }
        title={
          isEN
            ? pick(locale, dict.toggleAriaToTR)
            : pick(locale, dict.toggleAriaToEN)
        }
      >
        <span className={isEN ? "active" : ""}>EN</span>
        <span aria-hidden="true">·</span>
        <span className={!isEN ? "active" : ""}>TR</span>
      </button>
    </header>
  );
}
