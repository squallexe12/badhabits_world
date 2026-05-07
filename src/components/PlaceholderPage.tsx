"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";

type Props = {
  category: string;
  categoryEn?: string;
  accent: "smoking" | "alcohol" | "obesity" | "sleep" | "neutral";
  blurb: string;
  blurbEn?: string;
};

const accentColor: Record<Props["accent"], string> = {
  smoking: "var(--smoking)",
  alcohol: "var(--alcohol)",
  obesity: "var(--obesity)",
  sleep:   "var(--sleep)",
  neutral: "var(--gold)",
};

export default function PlaceholderPage({ category, categoryEn, accent, blurb, blurbEn }: Props) {
  const { locale } = useLocale();
  const isEN = locale === "en";

  const cat = isEN && categoryEn ? categoryEn : category;
  const blu = isEN && blurbEn ? blurbEn : blurb;

  return (
    <>
      <Masthead />
      <main id="main" style={{ minHeight: "70vh" }}>
        <section className="hero" style={{ borderBottom: 0 }}>
          <div>
            <div
              className="eyebrow"
              style={{ color: accentColor[accent] }}
            >
              {isEN ? "In progress · Edition № 01" : "Yapım aşamasında · Edisyon № 01"}
            </div>
            <h1>
              <span className="roman">{cat}</span>
              <em
                className="gold"
                style={{ color: accentColor[accent] }}
              >
                {isEN ? "soon." : "yakında."}
              </em>
            </h1>
            <p className="lede">{blu}</p>
          </div>
          <aside className="hero-aside">
            <div className="label">{isEN ? "This section" : "Bu bölüm"}</div>
            <p>
              {isEN
                ? "Bar charts, country cards, and comparison tables are in preparation. For now, see the headline figures on the home page."
                : "Bar grafikleri, ülke kartları ve karşılaştırma tabloları hazırlanıyor. Şimdilik ana sayfada öne çıkan rakamlara göz atın."}
            </p>
            <Link className="cta" href="/">
              {pick(locale, dict.homeLabel)}
              <span className="arr" aria-hidden="true">←</span>
            </Link>
          </aside>
        </section>
      </main>
      <Colophon />
    </>
  );
}
