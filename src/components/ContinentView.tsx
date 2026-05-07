"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import Reveal from "@/components/Reveal";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";
import type { Bilingual } from "@/i18n/types";

export type ContinentVM = {
  slug: string;
  name: Bilingual<string>;
  edition: Bilingual<string>;
  lede: Bilingual<string>;
  topStat: { value: string; label: Bilingual<string> };
  bullets: { title: Bilingual<string>; body: Bilingual<string> }[];
  categories: { href: string; label: Bilingual<string>; note: Bilingual<string> }[];
};

export default function ContinentView({ c }: { c: ContinentVM }) {
  const { locale } = useLocale();
  const isEN = locale === "en";

  return (
    <>
      <Masthead />
      <main id="main">
        <Reveal as="section" className="detail-hero" style={{ ["--accent" as string]: "var(--gold)" } as React.CSSProperties}>
          <div>
            <div className="eyebrow">{pick(locale, c.edition)}</div>
            <h1>
              <span className="roman">{isEN ? "Continent dossier:" : "Kıta dosyası:"}</span>
              <span className="acc">{pick(locale, c.name)}.</span>
            </h1>
            <p className="lede">{pick(locale, c.lede)}</p>
          </div>
          <aside className="key-stat">
            <div className="label">{isEN ? "Headline figure" : "Öne çıkan rakam"}</div>
            <div className="big" style={{ color: "var(--gold)" }}>{c.topStat.value}</div>
            <div className="where">{pick(locale, c.topStat.label)}</div>
            <p>
              {isEN
                ? "A single figure standing for the headline category in this region — context below."
                : "Kıtaya özgü öne çıkan kategoriyi temsil eden tek rakam — bağlamı aşağıda."}
            </p>
          </aside>
        </Reveal>

        <section className="section-pad">
          <div className="section-head">
            <h2>{isEN ? "Field notes from the continent." : "Kıtadan saha notları."}</h2>
            <div className="meta">
              {pick(locale, dict.tableI)}<br />
              <strong>{isEN ? "Regional summary" : "Bölgesel özet"}</strong>
            </div>
          </div>
          <div className="two-up">
            <ul className="note-list">
              {c.bullets.map((b) => (
                <li key={pick(locale, b.title)}>
                  <strong>{pick(locale, b.title)}</strong>
                  {pick(locale, b.body)}
                </li>
              ))}
            </ul>
            <aside className="col-aside">
              <h3>{isEN ? "Other continents" : "Diğer kıtalar"}</h3>
              <p>
                <Link href="/kita/americas">{pick(locale, dict.contAmericas)}</Link>{" · "}
                <Link href="/kita/europe">{pick(locale, dict.contEurope)}</Link>{" · "}
                <Link href="/kita/asia">{pick(locale, dict.contAsia)}</Link>{" · "}
                <Link href="/kita/mena">{pick(locale, dict.contMena)}</Link>{" · "}
                <Link href="/kita/africa">{pick(locale, dict.contAfrica)}</Link>
              </p>
              <h3 style={{ marginTop: "1.6rem" }}>{pick(locale, dict.methodology)}</h3>
              <p>
                {isEN ? (
                  <>The continent dossiers summarize the regional clustering of country-level data
                  drawn from the relevant category pages. All sources are listed on the category
                  pages and on the <Link href="/hakkinda">About</Link> page.</>
                ) : (
                  <>Kıta dosyaları, ilgili kategori sayfalarındaki ülke verilerinin
                  bölgesel yoğunlaşmasını özetler. Tüm rakamların kaynakları
                  kategori sayfalarında ve <Link href="/hakkinda">Hakkında</Link>{" "}
                  bölümünde listelidir.</>
                )}
              </p>
            </aside>
          </div>
        </section>

        <section className="section-pad" style={{ borderTop: "1px solid var(--hairline)" }}>
          <div className="section-head">
            <h2>{isEN ? "Categories for this continent." : "Bu kıta için kategoriler."}</h2>
            <div className="meta">
              {pick(locale, dict.tableII)}<br />
              <strong>{isEN ? "Go deeper" : "Derinleştir"}</strong>
            </div>
          </div>
          <Reveal stagger className="cat-strip">
            {c.categories.map((k, i) => (
              <Link key={k.href} href={k.href}>
                <div className="num">№ {String(i + 1).padStart(2, "0")}</div>
                <h4>{pick(locale, k.label)}</h4>
                <p>{pick(locale, k.note)}</p>
              </Link>
            ))}
          </Reveal>
        </section>

        <nav className="detail-foot">
          <Link href="/">← {pick(locale, dict.homeLabel)}</Link>
          <Link href="/siralama">{pick(locale, dict.rankingsLabel)} →</Link>
        </nav>
      </main>
      <Colophon />
    </>
  );
}
