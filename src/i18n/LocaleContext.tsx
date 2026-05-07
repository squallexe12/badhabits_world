"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Bilingual, Locale } from "./types";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggle: () => void;
};

const LocaleContext = createContext<Ctx>({
  locale: "tr",
  setLocale: () => {},
  toggle: () => {},
});

const STORAGE_KEY = "bh.locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("tr");

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "tr" || stored === "en") {
        setLocaleState(stored);
        document.documentElement.lang = stored;
        return;
      }
      const browser = (navigator.language || "tr").toLowerCase();
      const initial: Locale = browser.startsWith("tr") ? "tr" : "en";
      setLocaleState(initial);
      document.documentElement.lang = initial;
    } catch {
      // localStorage / navigator unavailable — keep default
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.lang = next;
    } catch {
      // ignore
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "tr" ? "en" : "tr");
  }, [locale, setLocale]);

  const value = useMemo<Ctx>(
    () => ({ locale, setLocale, toggle }),
    [locale, setLocale, toggle]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): Ctx {
  return useContext(LocaleContext);
}

export function pick<T>(locale: Locale, bundle: Bilingual<T>): T {
  return locale === "en" ? bundle.en : bundle.tr;
}

export function t<T>(locale: Locale, tr: T, en: T): T {
  return locale === "en" ? en : tr;
}
