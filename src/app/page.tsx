"use client";

import Link from "next/link";
import Masthead from "@/components/layout/Masthead";
import Colophon from "@/components/layout/Colophon";
import AnimatedCounter from "@/components/AnimatedCounter";
import Reveal from "@/components/Reveal";
import smokingData from "@/data/smoking.json";
import alcoholData from "@/data/alcohol.json";
import obesityData from "@/data/obesity.json";
import sleepData from "@/data/sleep.json";
import rankingData from "@/data/ranking.json";
import type {
  SmokingEntry,
  AlcoholEntry,
  ObesityEntry,
  SleepEntry,
  RankingEntry,
  CategoryKey,
} from "@/types";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";
import { localizeCountry } from "@/i18n/countries";

const smokingTop = (smokingData as SmokingEntry[]).reduce((a, b) =>
  (a.rate ?? 0) >= (b.rate ?? 0) ? a : b
);
const alcoholTop = (alcoholData as AlcoholEntry[]).reduce((a, b) =>
  (a.litersPerCapita ?? 0) >= (b.litersPerCapita ?? 0) ? a : b
);
const obesityTop = (obesityData as ObesityEntry[]).reduce((a, b) =>
  (a.obesityRate ?? 0) >= (b.obesityRate ?? 0) ? a : b
);
const sleepTop = (sleepData as SleepEntry[]).find((e) => e.countryCode === "US")!;
const ranking = rankingData as RankingEntry[];

const tagClass: Record<CategoryKey, string> = {
  smoking: "tag tag-smoking",
  alcohol: "tag tag-alcohol",
  obesity: "tag tag-obesity",
  sleep:   "tag tag-sleep",
};

const mainIssueEN: Record<string, string> = {
  "Sigara · Alkol": "Smoking · Alcohol",
  "Sigara · Obezite": "Smoking · Obesity",
  "Alkol · Sigara": "Alcohol · Smoking",
  "Alkol · Hareketsizlik": "Alcohol · Inactivity",
  "Obezite · Hareketsizlik": "Obesity · Inactivity",
  "Sigara · Hareketsizlik": "Smoking · Inactivity",
};

export default function HomePage() {
  const { locale } = useLocale();
  const isEN = locale === "en";

  const tagLabel: Record<CategoryKey, string> = {
    smoking: pick(locale, dict.navSmoking),
    alcohol: pick(locale, dict.navAlcohol),
    obesity: pick(locale, dict.navObesity),
    sleep:   pick(locale, dict.navSleep),
  };

  const noteSmoking = isEN
    ? `Adults ${smokingTop.rate}%. Among the highest in the world.`
    : smokingTop.note;
  const noteAlcohol = isEN
    ? `Annual ${alcoholTop.litersPerCapita} L of pure alcohol per adult.`
    : alcoholTop.note;
  const noteObesity = isEN
    ? `Around one in three adults exceeds the obesity threshold.`
    : obesityTop.note;
  const noteSleep = isEN
    ? `Below the WHO 7–9 h recommendation for the U.S. adult population.`
    : sleepTop.note;

  return (
    <>
      <Masthead />
      <main id="main">

        <section className="hero">
          <svg className="wisp" viewBox="0 0 220 280" aria-hidden="true">
            <defs>
              <linearGradient id="smoke" x1="50%" y1="100%" x2="50%" y2="0%">
                <stop offset="0%" stopColor="#1B140C" stopOpacity=".55" />
                <stop offset="100%" stopColor="#1B140C" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M110 280 C 70 240 150 200 90 160 C 40 130 160 100 100 60 C 60 30 140 0 110 -20"
              stroke="url(#smoke)" strokeWidth="14" fill="none" strokeLinecap="round"
            />
            <path
              d="M130 280 C 100 240 170 200 130 160 C 100 130 180 100 140 60"
              stroke="url(#smoke)" strokeWidth="8" fill="none" strokeLinecap="round" opacity=".6"
            />
          </svg>

          <Reveal>
            <div className="eyebrow">{pick(locale, dict.homeEyebrow)}</div>
            <h1>
              <span className="roman">{pick(locale, dict.homeHeroLine1)}</span>{" "}
              {pick(locale, dict.homeHeroLine2A)}{" "}
              <em className="gold">{pick(locale, dict.homeHeroLine2B)}</em>{" "}
              {pick(locale, dict.homeHeroLine2C)}
            </h1>
            <p className="lede">
              {pick(locale, dict.homeLede1)}{" "}
              <strong>{pick(locale, dict.homeLedeEm)}</strong>{" "}
              {pick(locale, dict.homeLede2)}
            </p>
          </Reveal>

          <Reveal as="aside" className="hero-aside">
            <div className="label">{pick(locale, dict.inThisIssue)}</div>
            <p>
              {smokingData.length + alcoholData.length}{" "}
              {pick(locale, dict.homeAside)}
            </p>
            <Link className="cta" href="/siralama">
              {pick(locale, dict.homeCta)}
              <span className="arr" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </section>

        <section className="stats section-pad">
          <div className="section-head">
            <h2>{pick(locale, dict.homeStatsTitle)}</h2>
            <div className="meta">
              {pick(locale, dict.homeStatsTablePrefix)}<br />
              <strong>{pick(locale, dict.homeStatsMeta)}</strong>
            </div>
          </div>

          <Reveal stagger className="stat-grid">
            <article className="stat stat--smoking" aria-labelledby="s-smoking">
              <div className="corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 18h14v-3H3zm15 0h3v-3h-3zM6 11c2-1 0-3 2-4M10 11c2-1 0-3 2-4" />
                </svg>
                {pick(locale, dict.statSmokingCorner)}
              </div>
              <div className="label">{pick(locale, dict.statSmokingLabel)}</div>
              <div className="num">
                %<AnimatedCounter target={smokingTop.rate ?? 0} decimals={1} />
              </div>
              <div className="country" id="s-smoking">
                {localizeCountry(locale, smokingTop.countryCode, smokingTop.country)}{" "}
                <code>{smokingTop.countryCode}</code>
              </div>
              <p className="note">{noteSmoking}</p>
            </article>

            <article className="stat stat--alcohol" aria-labelledby="s-alcohol">
              <div className="corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 4h8l-1 6a4 4 0 1 1-6 0zM12 16v4M9 21h6" />
                </svg>
                {pick(locale, dict.statAlcoholCorner)}
              </div>
              <div className="label">{pick(locale, dict.statAlcoholLabel)}</div>
              <div className="num">
                <AnimatedCounter target={alcoholTop.litersPerCapita ?? 0} decimals={1} />
                <span className="unit">L</span>
              </div>
              <div className="country" id="s-alcohol">
                {localizeCountry(locale, alcoholTop.countryCode, alcoholTop.country)}{" "}
                <code>{alcoholTop.countryCode}</code>
              </div>
              <p className="note">{noteAlcohol}</p>
            </article>

            <article className="stat stat--obesity" aria-labelledby="s-obesity">
              <div className="corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 14c1 1.5 2.5 2 4 2s3-.5 4-2" />
                </svg>
                {pick(locale, dict.statObesityCorner)}
              </div>
              <div className="label">{pick(locale, dict.statObesityLabel)}</div>
              <div className="num">
                %<AnimatedCounter target={obesityTop.obesityRate ?? 0} decimals={0} />
              </div>
              <div className="country" id="s-obesity">
                {localizeCountry(locale, obesityTop.countryCode, obesityTop.country)}{" "}
                <code>{obesityTop.countryCode}</code>
              </div>
              <p className="note">{noteObesity}</p>
            </article>

            <article className="stat stat--sleep" aria-labelledby="s-sleep">
              <div className="corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 13a8 8 0 1 1-9-10c-1 4 1 8 5 9 1 .25 2 .5 4 1z" />
                </svg>
                {pick(locale, dict.statSleepCorner)}
              </div>
              <div className="label">{pick(locale, dict.statSleepLabel)}</div>
              <div className="num">
                <AnimatedCounter target={sleepTop.avgHoursPerNight ?? 0} decimals={1} />
                <span className="unit">{pick(locale, dict.statSleepHoursUnit)}</span>
              </div>
              <div className="country" id="s-sleep">
                {localizeCountry(locale, sleepTop.countryCode, sleepTop.country)}{" "}
                <code>{sleepTop.countryCode}</code>
              </div>
              <p className="note">
                {pick(locale, dict.statSleepWhoPrefix)} {noteSleep}
              </p>
            </article>

            <article className="stat stat--mega" aria-labelledby="s-mega">
              <div className="corner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 12h18M3 6h18M3 18h18" />
                </svg>
                {pick(locale, dict.statMegaCorner)}
              </div>
              <div className="label">{pick(locale, dict.statMegaLabel)}</div>
              <div className="num">
                <AnimatedCounter target={500} decimals={0} />
                <span className="unit">{isEN ? "million+" : "milyon+"}</span>
              </div>
              <div className="country" id="s-mega">
                {isEN ? "Worldwide" : "Dünya geneli"}
              </div>
              <p className="note">{pick(locale, dict.statMegaNote)}</p>
            </article>
          </Reveal>
        </section>

        <section className="ranking section-pad">
          <div className="section-head">
            <h2>{pick(locale, dict.homeRankTitle)}</h2>
            <div className="meta">
              {pick(locale, dict.homeRankTablePrefix)}<br />
              <strong>{pick(locale, dict.homeRankMeta)}</strong>
            </div>
          </div>

          <Reveal stagger as="ol" className="rank-list">
            {ranking.slice(0, 3).map((r) => (
              <li key={r.rank} className="rank-row">
                <div className="rank-num">
                  {String(r.rank).padStart(2, "0")}
                </div>
                <div className="rank-name">
                  {localizeCountry(locale, r.countryCode, r.country)}
                  <small>{isEN ? (mainIssueEN[r.mainIssue] ?? r.mainIssue) : r.mainIssue}</small>
                </div>
                <div className="rank-tags">
                  {r.categories.map((c) => (
                    <span key={c} className={tagClass[c]}>
                      {tagLabel[c]}
                    </span>
                  ))}
                </div>
                <div className="rank-arrow" aria-hidden="true">→</div>
              </li>
            ))}
          </Reveal>

          <Link href="/siralama" className="more">
            {pick(locale, dict.homeRankMore)} <span aria-hidden="true">→</span>
          </Link>
        </section>

        <section className="cats section-pad">
          <div className="section-head">
            <h2>{pick(locale, dict.homeCatTitle)}</h2>
            <div className="meta">
              {pick(locale, dict.homeCatTablePrefix)}<br />
              <strong>{pick(locale, dict.homeCatMeta)}</strong>
            </div>
          </div>

          <Reveal stagger className="cat-grid">
            <Link className="cat cat--smoking" href="/sigara">
              <div className="num">№ 01</div>
              <h3>{pick(locale, dict.navSmoking)}</h3>
              <p>{pick(locale, dict.catSmokingBlurb)}</p>
              <div className="stat-strip">
                <span>{localizeCountry(locale, smokingTop.countryCode, smokingTop.country)}</span>
                <span className="big">%{String(smokingTop.rate).replace(".", isEN ? "." : ",")}</span>
                <span className="arr" aria-hidden="true">→</span>
              </div>
            </Link>
            <Link className="cat cat--alcohol" href="/alkol">
              <div className="num">№ 02</div>
              <h3>{pick(locale, dict.navAlcohol)}</h3>
              <p>{pick(locale, dict.catAlcoholBlurb)}</p>
              <div className="stat-strip">
                <span>{localizeCountry(locale, alcoholTop.countryCode, alcoholTop.country)}</span>
                <span className="big">{String(alcoholTop.litersPerCapita).replace(".", isEN ? "." : ",")} L</span>
                <span className="arr" aria-hidden="true">→</span>
              </div>
            </Link>
            <Link className="cat cat--obesity" href="/obezite">
              <div className="num">№ 03</div>
              <h3>{pick(locale, dict.navObesity)}</h3>
              <p>{pick(locale, dict.catObesityBlurb)}</p>
              <div className="stat-strip">
                <span>{localizeCountry(locale, obesityTop.countryCode, obesityTop.country)}</span>
                <span className="big">%{obesityTop.obesityRate}</span>
                <span className="arr" aria-hidden="true">→</span>
              </div>
            </Link>
            <Link className="cat cat--sleep" href="/uyku">
              <div className="num">№ 04</div>
              <h3>{pick(locale, dict.navSleep)}</h3>
              <p>{pick(locale, dict.catSleepBlurb)}</p>
              <div className="stat-strip">
                <span>{localizeCountry(locale, sleepTop.countryCode, sleepTop.country)}</span>
                <span className="big">
                  {String(sleepTop.avgHoursPerNight).replace(".", isEN ? "." : ",")}{" "}
                  {isEN ? "h" : "sa"}
                </span>
                <span className="arr" aria-hidden="true">→</span>
              </div>
            </Link>
          </Reveal>
        </section>

        <section className="cats section-pad" style={{ borderTop: "1px solid var(--hairline)" }}>
          <div className="section-head">
            <h2>{pick(locale, dict.homeExtraTitle)}</h2>
            <div className="meta">
              {pick(locale, dict.homeExtraTablePrefix)}<br />
              <strong>{pick(locale, dict.homeExtraMeta)}</strong>
            </div>
          </div>

          <Reveal stagger className="cat-strip">
            <Link className="cat--vaping" href="/e-sigara">
              <div className="num">№ 02</div>
              <h4>{pick(locale, dict.extraVaping)}</h4>
              <p>{pick(locale, dict.extraVapingBlurb)}</p>
            </Link>
            <Link className="cat--drugs" href="/uyusturucu">
              <div className="num">№ 04</div>
              <h4>{pick(locale, dict.extraDrugs)}</h4>
              <p>{pick(locale, dict.extraDrugsBlurb)}</p>
            </Link>
            <Link className="cat--benzo" href="/benzodiazepin">
              <div className="num">№ 05</div>
              <h4>{pick(locale, dict.extraBenzo)}</h4>
              <p>{pick(locale, dict.extraBenzoBlurb)}</p>
            </Link>
            <Link className="cat--social" href="/sosyal-medya">
              <div className="num">№ 08</div>
              <h4>{pick(locale, dict.extraSocial)}</h4>
              <p>{pick(locale, dict.extraSocialBlurb)}</p>
            </Link>
            <Link className="cat--harassment" href="/online-taciz">
              <div className="num">№ 09</div>
              <h4>{pick(locale, dict.extraHarass)}</h4>
              <p>{pick(locale, dict.extraHarassBlurb)}</p>
            </Link>
            <Link className="cat--gambling" href="/kumar">
              <div className="num">№ 10</div>
              <h4>{pick(locale, dict.extraGambling)}</h4>
              <p>{pick(locale, dict.extraGamblingBlurb)}</p>
            </Link>
            <Link className="cat--gaming" href="/oyun">
              <div className="num">№ 11</div>
              <h4>{pick(locale, dict.extraGaming)}</h4>
              <p>{pick(locale, dict.extraGamingBlurb)}</p>
            </Link>
            <Link className="cat--eating" href="/yeme-bozuklugu">
              <div className="num">№ 12</div>
              <h4>{pick(locale, dict.extraEating)}</h4>
              <p>{pick(locale, dict.extraEatingBlurb)}</p>
            </Link>
            <Link className="cat--bdd" href="/vucut-dismorfisi">
              <div className="num">№ 13</div>
              <h4>{pick(locale, dict.extraBdd)}</h4>
              <p>{pick(locale, dict.extraBddBlurb)}</p>
            </Link>
            <Link className="cat--violence" href="/aile-ici-siddet">
              <div className="num">№ 14</div>
              <h4>{pick(locale, dict.extraViolence)}</h4>
              <p>{pick(locale, dict.extraViolenceBlurb)}</p>
            </Link>
            <Link className="cat--work" href="/is-bagimliligi">
              <div className="num">№ 16</div>
              <h4>{pick(locale, dict.extraWork)}</h4>
              <p>{pick(locale, dict.extraWorkBlurb)}</p>
            </Link>
            <Link className="cat--inactivity" href="/hareketsizlik">
              <div className="num">№ 17</div>
              <h4>{pick(locale, dict.extraInactivity)}</h4>
              <p>{pick(locale, dict.extraInactivityBlurb)}</p>
            </Link>
            <Link className="cat--caffeine" href="/kafein">
              <div className="num">№ 18</div>
              <h4>{pick(locale, dict.extraCaffeine)}</h4>
              <p>{pick(locale, dict.extraCaffeineBlurb)}</p>
            </Link>
            <Link className="cat--shopping" href="/alisveris">
              <div className="num">№ 19</div>
              <h4>{pick(locale, dict.extraShopping)}</h4>
              <p>{pick(locale, dict.extraShoppingBlurb)}</p>
            </Link>
            <Link className="cat--porn" href="/pornografi">
              <div className="num">№ 20</div>
              <h4>{pick(locale, dict.extraPorn)}</h4>
              <p>{pick(locale, dict.extraPornBlurb)}</p>
            </Link>
            <Link className="cat--sugar" href="/seker">
              <div className="num">№ 21</div>
              <h4>{pick(locale, dict.extraSugar)}</h4>
              <p>{pick(locale, dict.extraSugarBlurb)}</p>
            </Link>
          </Reveal>
        </section>

        <section className="cats section-pad" style={{ borderTop: "1px solid var(--hairline)" }}>
          <div className="section-head">
            <h2>{pick(locale, dict.homeContTitle)}</h2>
            <div className="meta">
              {pick(locale, dict.homeContTablePrefix)}<br />
              <strong>{pick(locale, dict.homeContMeta)}</strong>
            </div>
          </div>

          <Reveal stagger className="kita-grid">
            <Link href="/kita/americas">
              <div className="label">{pick(locale, dict.contLabel)} № 01</div>
              <h4>{pick(locale, dict.contAmericas)}</h4>
              <div className="topics">{pick(locale, dict.contAmericasTopics)}</div>
            </Link>
            <Link href="/kita/europe">
              <div className="label">{pick(locale, dict.contLabel)} № 02</div>
              <h4>{pick(locale, dict.contEurope)}</h4>
              <div className="topics">{pick(locale, dict.contEuropeTopics)}</div>
            </Link>
            <Link href="/kita/asia">
              <div className="label">{pick(locale, dict.contLabel)} № 03</div>
              <h4>{pick(locale, dict.contAsia)}</h4>
              <div className="topics">{pick(locale, dict.contAsiaTopics)}</div>
            </Link>
            <Link href="/kita/mena">
              <div className="label">{pick(locale, dict.contLabel)} № 04</div>
              <h4>{pick(locale, dict.contMena)}</h4>
              <div className="topics">{pick(locale, dict.contMenaTopics)}</div>
            </Link>
            <Link href="/kita/africa">
              <div className="label">{pick(locale, dict.contLabel)} № 05</div>
              <h4>{pick(locale, dict.contAfrica)}</h4>
              <div className="topics">{pick(locale, dict.contAfricaTopics)}</div>
            </Link>
          </Reveal>
        </section>

      </main>
      <Colophon />
    </>
  );
}
