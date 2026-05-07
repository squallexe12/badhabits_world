"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import Reveal from "@/components/Reveal";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";
import { localizeCountry } from "@/i18n/countries";

export type BarRow = {
  country: string;
  countryCode?: string;
  value: number;
  display: string;
  displayEn?: string;
  muted?: boolean;
};

export type DetailNote = {
  title: string;
  body: string;
};

export type AccentKey =
  | "smoking"
  | "alcohol"
  | "obesity"
  | "sleep"
  | "vaping"
  | "drugs"
  | "benzo"
  | "social"
  | "harassment"
  | "gambling"
  | "gaming"
  | "eating"
  | "bdd"
  | "violence"
  | "work"
  | "inactivity"
  | "caffeine"
  | "shopping"
  | "porn"
  | "sugar";

const accentVar: Record<AccentKey, string> = {
  smoking: "var(--smoking)",
  alcohol: "var(--alcohol)",
  obesity: "var(--obesity)",
  sleep:   "var(--sleep)",
  vaping:     "#C44A2C",
  drugs:      "#5B2D2A",
  benzo:      "#6E5A8A",
  social:     "#2B6A6A",
  harassment: "#7C3A55",
  gambling:   "#1F5C3F",
  gaming:     "#2A4A8C",
  eating:     "#A04A6F",
  bdd:        "#8C5C9A",
  violence:   "#4A1F1A",
  work:       "#6B5C2A",
  inactivity: "#3F4A3F",
  caffeine:   "#6B4A2C",
  shopping:   "#B07A2C",
  porn:       "#4A2A4A",
  sugar:      "#C97A3D",
};

export type EnContent = {
  edition?: string;
  title?: React.ReactNode;
  lede?: string;
  keyStat?: {
    label: string;
    value?: string;
    unit?: string;
    where: string;
    blurb: string;
  };
  chartTitle?: string;
  chartMeta?: string;
  callout?: { label: string; quote: string; dark?: boolean };
  notes?: DetailNote[];
  notesIntro?: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

type Props = {
  edition: string;
  title: React.ReactNode;
  lede: string;
  accent: AccentKey;
  keyStat: {
    label: string;
    value: string;
    unit?: string;
    where: string;
    blurb: string;
  };
  chartTitle: string;
  chartMeta: string;
  bars: BarRow[];
  callout?: { label: string; quote: string; dark?: boolean };
  notes: DetailNote[];
  notesIntro?: string;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  /** English overrides — supplied per page; falls back to TR when absent */
  en?: EnContent;
};

export default function CategoryDetail(props: Props) {
  const { locale } = useLocale();
  const isEN = locale === "en";
  const en = props.en;

  const accentColor = accentVar[props.accent];
  const max = Math.max(...props.bars.map((b) => b.value));

  const edition  = isEN && en?.edition  ? en.edition  : props.edition;
  const title    = isEN && en?.title    ? en.title    : props.title;
  const lede     = isEN && en?.lede     ? en.lede     : props.lede;
  const keyStat  = isEN && en?.keyStat
    ? {
        ...props.keyStat,
        ...en.keyStat,
        value: en.keyStat.value ?? props.keyStat.value,
      }
    : props.keyStat;
  const chartTitle = isEN && en?.chartTitle ? en.chartTitle : props.chartTitle;
  const chartMeta  = isEN && en?.chartMeta  ? en.chartMeta  : props.chartMeta;
  const callout    = isEN && en?.callout    ? en.callout    : props.callout;
  const notes      = isEN && en?.notes      ? en.notes      : props.notes;
  const notesIntro = isEN && en?.notesIntro ? en.notesIntro : props.notesIntro;
  const prev       = isEN && en?.prev       ? en.prev       : props.prev;
  const next       = isEN && en?.next       ? en.next       : props.next;

  return (
    <>
      <Masthead />
      <main id="main" style={{ ["--accent" as string]: accentColor } as React.CSSProperties}>
        <Reveal as="section" className="detail-hero">
          <div>
            <div className="eyebrow">{edition}</div>
            <h1>{title}</h1>
            <p className="lede">{lede}</p>
          </div>
          <aside className="key-stat">
            <div className="label">{keyStat.label}</div>
            <div className="big">
              {keyStat.value}
              {keyStat.unit ? <span className="unit">{keyStat.unit}</span> : null}
            </div>
            <div className="where">{keyStat.where}</div>
            <p>{keyStat.blurb}</p>
          </aside>
        </Reveal>

        <section className="section-pad">
          <div className="section-head">
            <h2>{chartTitle}</h2>
            <div className="meta">
              {pick(locale, dict.tableI)}<br />
              <strong>{chartMeta}</strong>
            </div>
          </div>

          <Reveal stagger className="barchart">
            {props.bars.map((b) => {
              const country = localizeCountry(locale, b.countryCode, b.country);
              const display = isEN && b.displayEn ? b.displayEn : b.display;
              return (
                <div
                  key={b.country + b.value}
                  className={"bar-row" + (b.muted ? " muted" : "")}
                >
                  <div className="name">
                    {country}
                    {b.countryCode ? <code>{b.countryCode}</code> : null}
                  </div>
                  <div className="track">
                    <div
                      className="fill"
                      style={{ ["--w" as string]: `${(b.value / max) * 100}%` } as React.CSSProperties}
                    />
                  </div>
                  <div className="val">{display}</div>
                </div>
              );
            })}
          </Reveal>

          {callout ? (
            <div className={"callout" + (callout.dark ? " callout--dark" : "")}>
              <div className="label">{callout.label}</div>
              <p>{callout.quote}</p>
            </div>
          ) : null}
        </section>

        <section className="section-pad" style={{ borderTop: "1px solid var(--hairline)" }}>
          <div className="section-head">
            <h2>{pick(locale, dict.fieldNotes)}</h2>
            <div className="meta">
              {pick(locale, dict.tableII)}<br />
              <strong>{pick(locale, dict.contextNuance)}</strong>
            </div>
          </div>

          <div className="two-up">
            <div>
              {notesIntro ? (
                <p style={{ fontSize: "1.05rem", color: "var(--ink-soft)", lineHeight: 1.6 }}>
                  {notesIntro}
                </p>
              ) : null}
              <ul className="note-list">
                {notes.map((n) => (
                  <li key={n.title}>
                    <strong>{n.title}</strong>
                    {n.body}
                  </li>
                ))}
              </ul>
            </div>
            <aside className="col-aside">
              <h3>{pick(locale, dict.methodology)}</h3>
              <p>
                {pick(locale, dict.methodologyText)}{" "}
                <Link href="/hakkinda">{pick(locale, dict.hakkindaLink)}</Link>{" "}
                {pick(locale, dict.hakkindaTrailing)}
              </p>
              <h3 style={{ marginTop: "1.6rem" }}>{pick(locale, dict.inThisIssue)}</h3>
              <p>
                {isEN
                  ? `Edition № 01 · 6 May 2026 · ${props.bars.length} country records · 1 researcher · 1 atlas.`
                  : `Edisyon № 01 · 6 Mayıs 2026 · ${props.bars.length} ülke verisi · 1 araştırmacı · 1 atlas.`}
              </p>
            </aside>
          </div>
        </section>

        <nav className="detail-foot">
          {prev ? (
            <Link href={prev.href}>← {prev.label}</Link>
          ) : (
            <Link href="/">← {pick(locale, dict.homeLabel)}</Link>
          )}
          {next ? (
            <Link href={next.href}>{next.label} →</Link>
          ) : (
            <Link href="/siralama">{pick(locale, dict.rankingsLabel)} →</Link>
          )}
        </nav>
      </main>
      <Colophon />
    </>
  );
}
