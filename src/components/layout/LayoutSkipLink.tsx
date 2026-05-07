"use client";

import { useLocale, pick } from "@/i18n/LocaleContext";
import { dict } from "@/i18n/dict";

export default function LayoutSkipLink() {
  const { locale } = useLocale();
  return (
    <a className="skip" href="#main">
      {pick(locale, dict.skip)}
    </a>
  );
}
