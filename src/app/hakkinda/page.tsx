"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";

export default function Page() {
  const { locale } = useLocale();
  const isEN = locale === "en";

  return (
    <>
      <Masthead />
      <main id="main">
        <section className="hero" style={{ borderBottom: "1px solid var(--hairline)" }}>
          <div>
            <div className="eyebrow">
              {isEN ? "About · Edition № 01" : "Hakkında · Edisyon № 01"}
            </div>
            <h1>
              <span className="roman">
                {isEN ? "Public health, told" : "Sayılarla anlatılan"}
              </span>
              <em className="gold">
                {isEN ? "in numbers." : "halk sağlığı."}
              </em>
            </h1>
            <p className="lede">
              {isEN
                ? "This atlas is an attempt to turn smoking · alcohol · obesity · sleep data into a readable story through country comparisons. Not sensation; fidelity to the data."
                : "Bu atlas, sigara · alkol · obezite · uyku verilerini ülke karşılaştırmaları üzerinden okunabilir bir hikâyeye dönüştürmek için bir denemedir. Senasyon değil; veriye sadakat hedeflenir."}
            </p>
          </div>
          <aside className="hero-aside">
            <div className="label">{pick(locale, dict.imprint)}</div>
            <p>
              <strong>{pick(locale, dict.research)}</strong> · Metehan<br />
              <strong>{pick(locale, dict.design)}</strong> · Barış<br />
              <strong>{pick(locale, dict.code)}</strong> · Beren<br />
              <strong>{isEN ? "Date" : "Tarih"}</strong> · {isEN ? "6 May 2026" : "6 Mayıs 2026"}
            </p>
            <Link className="cta" href="/">
              {pick(locale, dict.homeLabel)}
              <span className="arr" aria-hidden="true">←</span>
            </Link>
          </aside>
        </section>

        <section className="section-pad">
          <div className="section-head">
            <h2>{isEN ? "Methodology." : "Metodoloji."}</h2>
            <div className="meta">
              {isEN ? "Note" : "Not"}<br /><strong>v 0.1</strong>
            </div>
          </div>
          <div style={{ maxWidth: "62ch", lineHeight: 1.65, color: "var(--ink-soft)" }}>
            <p>
              {isEN ? (
                <>
                  Data is compiled from the World Health Organization (WHO),
                  OECD Health Statistics, Eurostat, and the NCD Risk Factor
                  Collaboration. The most recent annual reports as of May 2026
                  were used; unknown or unreported values are marked as{" "}
                  <code style={{ fontFamily: "var(--mono)", fontSize: ".85em" }}>null</code>.
                </>
              ) : (
                <>
                  Veriler; DSÖ (Dünya Sağlık Örgütü), OECD Health Statistics,
                  Eurostat ve NCD Risk Factor Collaboration kaynaklarından
                  derlenmiştir. Mayıs 2026 itibarıyla en güncel yıllık raporlar
                  esas alınmış; bilinmeyen veya raporlanmamış değerler{" "}
                  <code style={{ fontFamily: "var(--mono)", fontSize: ".85em" }}>null</code>{" "}
                  olarak işaretlenmiştir.
                </>
              )}
            </p>
            <p>
              {isEN
                ? "The ranking (Plate II) is not a single composite score; it is a qualitative summary of multiple \"high risk\" indicators a country shows across the four categories. It is therefore designed to read trends rather than enforce a strict mathematical hierarchy."
                : "Sıralama (Tablo II), tek bir bileşik skor değildir; ülkenin dört kategorideki birden fazla \"yüksek risk\" göstergesinin nitel özetidir. Bu nedenle kesin bir matematiksel hiyerarşi yerine eğilimleri okumak için tasarlanmıştır."}
            </p>
          </div>
        </section>
      </main>
      <Colophon />
    </>
  );
}
