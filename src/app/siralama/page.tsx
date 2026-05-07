"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import Reveal from "@/components/Reveal";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";
import { localizeCountry } from "@/i18n/countries";
import type { Bilingual } from "@/i18n/types";

type Row = {
  rank: number;
  country: string;
  countryCode: string;
  value: string;
  valueEn?: string;
  countryEnOverride?: string;
};

type Group = {
  href: string;
  num: string;
  title: Bilingual<string>;
  unit: Bilingual<string>;
  rows: Row[];
};

const groups: Group[] = [
  { href: "/sigara", num: "№ 01",
    title: { tr: "Sigara", en: "Smoking" },
    unit:  { tr: "Yetişkin · %", en: "Adults · %" },
    rows: [
      { rank: 1, country: "Sırbistan",   countryCode: "RS", value: "%35,5", valueEn: "35.5%" },
      { rank: 2, country: "Bulgaristan", countryCode: "BG", value: "%33,0", valueEn: "33.0%" },
      { rank: 3, country: "Yunanistan",  countryCode: "GR", value: "%30,6", valueEn: "30.6%" },
    ]},
  { href: "/e-sigara", num: "№ 02",
    title: { tr: "E-sigara", en: "Vaping" },
    unit:  { tr: "Yetişkin/genç · %", en: "Adults/teens · %" },
    rows: [
      { rank: 1, country: "Endonezya",   countryCode: "ID", value: "%32,0", valueEn: "32.0%" },
      { rank: 2, country: "ABD (genç)",  countryCode: "US", value: "%29,0", valueEn: "29.0%", countryEnOverride: "U.S. (teens)" },
      { rank: 3, country: "Yunanistan",  countryCode: "GR", value: "%24,5", valueEn: "24.5%" },
    ]},
  { href: "/alkol", num: "№ 03",
    title: { tr: "Alkol", en: "Alcohol" },
    unit:  { tr: "Litre · kişi/yıl", en: "Litres · per capita/yr" },
    rows: [
      { rank: 1, country: "Litvanya",    countryCode: "LT", value: "13,2 L", valueEn: "13.2 L" },
      { rank: 2, country: "Çekya",       countryCode: "CZ", value: "11,8 L", valueEn: "11.8 L" },
      { rank: 3, country: "Letonya",     countryCode: "LV", value: "11,3 L", valueEn: "11.3 L" },
    ]},
  { href: "/uyusturucu", num: "№ 04",
    title: { tr: "Uyuşturucu", en: "Illicit Drugs" },
    unit:  { tr: "Yaşam boyu · %", en: "Lifetime · %" },
    rows: [
      { rank: 1, country: "Ekvador",     countryCode: "EC", value: "%51,2", valueEn: "51.2%" },
      { rank: 2, country: "Şili",        countryCode: "CL", value: "%38,0", valueEn: "38.0%" },
      { rank: 3, country: "Arjantin",    countryCode: "AR", value: "%30,4", valueEn: "30.4%" },
    ]},
  { href: "/benzodiazepin", num: "№ 05",
    title: { tr: "Benzodiazepin", en: "Benzodiazepines" },
    unit:  { tr: "Kötüye kullanım · %", en: "Misuse · %" },
    rows: [
      { rank: 1, country: "Mısır (ergen)", countryCode: "EG", value: "%5,1", valueEn: "5.1%", countryEnOverride: "Egypt (teens)" },
      { rank: 2, country: "ABD",           countryCode: "US", value: "%2,1", valueEn: "2.1%" },
      { rank: 3, country: "Brezilya",      countryCode: "BR", value: "%1,8", valueEn: "1.8%" },
    ]},
  { href: "/obezite", num: "№ 07",
    title: { tr: "Obezite", en: "Obesity" },
    unit:  { tr: "Yetişkin · %", en: "Adults · %" },
    rows: [
      { rank: 1, country: "ABD",        countryCode: "US", value: "%41", valueEn: "41%" },
      { rank: 2, country: "Türkiye",    countryCode: "TR", value: "%32", valueEn: "32%" },
      { rank: 3, country: "İngiltere",  countryCode: "GB", value: "%28", valueEn: "28%" },
    ]},
  { href: "/sosyal-medya", num: "№ 08",
    title: { tr: "Sosyal medya", en: "Social Media" },
    unit:  { tr: "Günlük ekran", en: "Daily screen" },
    rows: [
      { rank: 1, country: "Güney Afrika", countryCode: "ZA", value: "9 sa 24 dk", valueEn: "9 h 24 m" },
      { rank: 2, country: "Brezilya",     countryCode: "BR", value: "9 sa 8 dk",  valueEn: "9 h 8 m"  },
      { rank: 3, country: "Filipinler",   countryCode: "PH", value: "8 sa 52 dk", valueEn: "8 h 52 m" },
    ]},
  { href: "/online-taciz", num: "№ 09",
    title: { tr: "Online taciz", en: "Online Harassment" },
    unit:  { tr: "Nefret söylemi · %", en: "Hate speech · %" },
    rows: [
      { rank: 1, country: "Hindistan",    countryCode: "IN", value: "%85", valueEn: "85%" },
      { rank: 2, country: "Bangladeş",    countryCode: "BD", value: "%84", valueEn: "84%" },
      { rank: 3, country: "Güney Afrika", countryCode: "ZA", value: "%79", valueEn: "79%" },
    ]},
  { href: "/kumar", num: "№ 10",
    title: { tr: "Kumar", en: "Gambling" },
    unit:  { tr: "Yıllık katılım · %", en: "Annual participation · %" },
    rows: [
      { rank: 1, country: "İtalya",      countryCode: "IT", value: "%45", valueEn: "45%" },
      { rank: 2, country: "İzlanda",     countryCode: "IS", value: "%41", valueEn: "41%" },
      { rank: 3, country: "Yunanistan",  countryCode: "GR", value: "%36", valueEn: "36%" },
    ]},
  { href: "/oyun", num: "№ 11",
    title: { tr: "Oyun", en: "Gaming" },
    unit:  { tr: "IGD · %", en: "IGD · %" },
    rows: [
      { rank: 1, country: "ABD (ergen)", countryCode: "US", value: "%8,5", valueEn: "8.5%", countryEnOverride: "U.S. (teens)" },
      { rank: 2, country: "Güney Kore",  countryCode: "KR", value: "%8,0", valueEn: "8.0%" },
      { rank: 3, country: "Çin",         countryCode: "CN", value: "%6,5", valueEn: "6.5%" },
    ]},
  { href: "/yeme-bozuklugu", num: "№ 12",
    title: { tr: "Yeme bozukluğu", en: "Eating Disorders" },
    unit:  { tr: "Tanı · milyon", en: "Diagnoses · million" },
    rows: [
      { rank: 1, country: "ABD",        countryCode: "US", value: "30 M", valueEn: "30M" },
      { rank: 2, country: "Hindistan",  countryCode: "IN", value: "20 M", valueEn: "20M" },
      { rank: 3, country: "Çin",        countryCode: "CN", value: "9 M",  valueEn: "9M"  },
    ]},
  { href: "/vucut-dismorfisi", num: "№ 13",
    title: { tr: "Vücut dismorfisi", en: "Body Dysmorphia" },
    unit:  { tr: "Cerrahi hastası · %", en: "Surgery patients · %" },
    rows: [
      { rank: 1, country: "Brezilya",   countryCode: "BR", value: "%24,0", valueEn: "24.0%" },
      { rank: 2, country: "G. Kore",    countryCode: "KR", value: "%22,5", valueEn: "22.5%", countryEnOverride: "S. Korea" },
      { rank: 3, country: "ABD",        countryCode: "US", value: "%18,6", valueEn: "18.6%" },
    ]},
  { href: "/aile-ici-siddet", num: "№ 14",
    title: { tr: "Aile içi şiddet", en: "Domestic Violence" },
    unit:  { tr: "Yaşam boyu · %", en: "Lifetime · %" },
    rows: [
      { rank: 1, country: "Türkiye",      countryCode: "TR", value: "%38", valueEn: "38%" },
      { rank: 2, country: "Yeni Zelanda", countryCode: "NZ", value: "%35", valueEn: "35%" },
      { rank: 3, country: "Mısır",        countryCode: "EG", value: "%34", valueEn: "34%" },
    ]},
  { href: "/uyku", num: "№ 15",
    title: { tr: "Uyku borcu", en: "Sleep Debt" },
    unit:  { tr: "Yetersiz · %", en: "Insufficient · %" },
    rows: [
      { rank: 1, country: "Singapur",   countryCode: "SG", value: "%56", valueEn: "56%" },
      { rank: 2, country: "BAE",        countryCode: "AE", value: "%55", valueEn: "55%" },
      { rank: 3, country: "Endonezya",  countryCode: "ID", value: "%52", valueEn: "52%" },
    ]},
  { href: "/is-bagimliligi", num: "№ 16",
    title: { tr: "İş bağımlılığı", en: "Workaholism" },
    unit:  { tr: "BWAS · %", en: "BWAS · %" },
    rows: [
      { rank: 1, country: "Güney Kore", countryCode: "KR", value: "%39,7", valueEn: "39.7%" },
      { rank: 2, country: "Kanada",     countryCode: "CA", value: "%27,0", valueEn: "27.0%" },
      { rank: 3, country: "ABD",        countryCode: "US", value: "%25,0", valueEn: "25.0%" },
    ]},
  { href: "/hareketsizlik", num: "№ 17",
    title: { tr: "Hareketsizlik", en: "Inactivity" },
    unit:  { tr: "Bölgesel · %", en: "Regional · %" },
    rows: [
      { rank: 1, country: "Asya Pasifik", countryCode: "AP",   value: "%48", valueEn: "48%" },
      { rank: 2, country: "Güney Asya",   countryCode: "ASIA", value: "%45", valueEn: "45%", countryEnOverride: "South Asia" },
      { rank: 3, country: "MENA",         countryCode: "MENA", value: "%36", valueEn: "36%" },
    ]},
  { href: "/kafein", num: "№ 18",
    title: { tr: "Kafein", en: "Caffeine" },
    unit:  { tr: "Kahve · fincan/gün", en: "Coffee · cups/day" },
    rows: [
      { rank: 1, country: "Lüksemburg", countryCode: "LU", value: "6,5", valueEn: "6.5" },
      { rank: 2, country: "Finlandiya", countryCode: "FI", value: "5,4", valueEn: "5.4" },
      { rank: 3, country: "İsveç",      countryCode: "SE", value: "4,8", valueEn: "4.8" },
    ]},
  { href: "/alisveris", num: "№ 19",
    title: { tr: "Alışveriş", en: "Shopping" },
    unit:  { tr: "CBD · %", en: "CBD · %" },
    rows: [
      { rank: 1, country: "Almanya",     countryCode: "DE", value: "%8,5", valueEn: "8.5%" },
      { rank: 2, country: "ABD",         countryCode: "US", value: "%7,0", valueEn: "7.0%" },
      { rank: 3, country: "İngiltere",   countryCode: "GB", value: "%6,8", valueEn: "6.8%" },
    ]},
  { href: "/pornografi", num: "№ 20",
    title: { tr: "Pornografi", en: "Pornography" },
    unit:  { tr: "Yetişkin · %", en: "Adults · %" },
    rows: [
      { rank: 1, country: "Hindistan",   countryCode: "IN", value: "%21", valueEn: "21%" },
      { rank: 2, country: "Asya ort.",   countryCode: "ASIA", value: "%19", valueEn: "19%", countryEnOverride: "Asia avg." },
      { rank: 3, country: "Filipinler",  countryCode: "PH", value: "%18", valueEn: "18%" },
    ]},
  { href: "/seker", num: "№ 21",
    title: { tr: "Şeker", en: "Sugar" },
    unit:  { tr: "Yıllık · milyon ton", en: "Annual · million tons" },
    rows: [
      { rank: 1, country: "Hindistan",   countryCode: "IN", value: "28 mt",   valueEn: "28 Mt"   },
      { rank: 2, country: "AB",          countryCode: "EU", value: "18,5 mt", valueEn: "18.5 Mt" },
      { rank: 3, country: "Çin",         countryCode: "CN", value: "16,2 mt", valueEn: "16.2 Mt" },
    ]},
];

export default function Page() {
  const { locale } = useLocale();
  const isEN = locale === "en";

  return (
    <>
      <Masthead />
      <main id="main">
        <section className="detail-hero" style={{ ["--accent" as string]: "var(--gold)" } as React.CSSProperties}>
          <div>
            <div className="eyebrow">
              {isEN ? "Rankings · Edition № 01" : "Sıralama · Edisyon № 01"}
            </div>
            <h1>
              <span className="roman">
                {isEN ? "Twenty habits," : "Yirmi alışkanlık,"}
              </span>
              {isEN ? "sixty " : "altmış "}
              <span className="acc">{isEN ? "countries." : "ülke."}</span>
            </h1>
            <p className="lede">
              {isEN
                ? "The atlas at a glance: top three for every category, the unit used, and a link to the detail page. All figures are sourced on the individual category pages."
                : "Atlasın tek bakışta okunan özeti: her kategoride ilk üç ülke, kullanılan birim ve bağlantılı detay sayfası. Tüm rakamlar bireysel kategori sayfalarında kaynaklara bağlanır."}
            </p>
          </div>
          <aside className="key-stat">
            <div className="label">{pick(locale, dict.inThisIssue)}</div>
            <div className="big" style={{ color: "var(--gold)" }}>20×3</div>
            <div className="where">
              {isEN ? "Twenty categories, top three per category" : "Yirmi kategori, kategori başına ilk üç"}
            </div>
            <p>
              {isEN ? (
                <>For context, see the category pages; for a regional read, see the{" "}
                <Link href="/kita/europe">continent dossiers</Link>.</>
              ) : (
                <>Bağlamı için kategori sayfalarına; bölgesel okuma için{" "}
                <Link href="/kita/europe">kıta dosyalarına</Link>.</>
              )}
            </p>
          </aside>
        </section>

        <section className="section-pad">
          <div className="section-head">
            <h2>{isEN ? "Top three per category." : "Kategori başına ilk üç."}</h2>
            <div className="meta">
              {pick(locale, dict.tableI)}<br />
              <strong>Top 3 by category</strong>
            </div>
          </div>

          <Reveal stagger className="cat-strip">
            {groups.map((g) => (
              <Link key={g.href} href={g.href}>
                <div className="num">{g.num} · {pick(locale, g.unit)}</div>
                <h4>{pick(locale, g.title)}</h4>
                <p>
                  {g.rows.map((r, i) => {
                    const country = r.countryEnOverride && isEN
                      ? r.countryEnOverride
                      : localizeCountry(locale, r.countryCode, r.country);
                    const val = isEN && r.valueEn ? r.valueEn : r.value;
                    return (
                      <span key={r.country + r.rank}>
                        {i > 0 ? " · " : ""}
                        <strong>{country}</strong> {val}
                      </span>
                    );
                  })}
                </p>
              </Link>
            ))}
          </Reveal>
        </section>

        <nav className="detail-foot">
          <Link href="/">← {pick(locale, dict.homeLabel)}</Link>
          <Link href="/hakkinda">{pick(locale, dict.hakkindaLink)} →</Link>
        </nav>
      </main>
      <Colophon />
    </>
  );
}
