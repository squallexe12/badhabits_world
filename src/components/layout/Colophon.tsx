"use client";

import Link from "next/link";
import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";

export default function Colophon() {
  const { locale } = useLocale();
  return (
    <footer className="colophon">
      <div className="colophon-grid">
        <div>
          <h4>{pick(locale, dict.colophon)}</h4>
          <p className="colophon-mast">{pick(locale, dict.colophonMast)}</p>
          <p>{pick(locale, dict.colophonBody)}</p>
        </div>
        <div>
          <h4>{pick(locale, dict.sources)}</h4>
          <ul>
            <li>
              <a href="https://www.who.int" target="_blank" rel="noreferrer">
                {pick(locale, dict.whoLong)}
              </a>
            </li>
            <li>
              <a href="https://www.oecd.org" target="_blank" rel="noreferrer">
                OECD Health Statistics
              </a>
            </li>
            <li>
              <a href="https://ec.europa.eu/eurostat" target="_blank" rel="noreferrer">
                Eurostat
              </a>
            </li>
            <li>
              <a href="https://ncdrisc.org" target="_blank" rel="noreferrer">
                NCD Risk Factor Collaboration
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>{pick(locale, dict.imprint)}</h4>
          <ul>
            <li>
              {pick(locale, dict.research)} ·{" "}
              <Link href="/hakkinda">Metehan</Link>
            </li>
            <li>{pick(locale, dict.design)} · Barış</li>
            <li>{pick(locale, dict.code)} · Beren</li>
            <li>{pick(locale, dict.dataLockup)}</li>
          </ul>
        </div>
      </div>
      <div className="imprint">
        <span>{pick(locale, dict.copyright)}</span>
        <span>{pick(locale, dict.versionLineTR)}</span>
      </div>
    </footer>
  );
}
