import type { Metadata } from "next";
import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";
import { LocaleProvider } from "@/i18n/LocaleContext";
import LayoutSkipLink from "@/components/layout/LayoutSkipLink";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-fraunces",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin", "latin-ext"],
  style: ["normal", "italic"],
  variable: "--font-public-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sağlıksız Alışkanlıkların Atlası · BadHabits.world",
  description:
    "Sigara, alkol, obezite ve uyku — dünyanın önlenebilir ölüm yükünü taşıyan dört alışkanlığın küresel atlası. DSÖ, OECD ve Eurostat verileriyle.",
  metadataBase: new URL("https://badhabits.world"),
  openGraph: {
    title: "Sağlıksız Alışkanlıkların Atlası",
    description:
      "Halk sağlığının küresel portresi: sigara, alkol, obezite, uyku.",
    type: "website",
    locale: "tr_TR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      className={`${fraunces.variable} ${publicSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <LocaleProvider>
          <LayoutSkipLink />
          <div className="frame">{children}</div>
        </LocaleProvider>
      </body>
    </html>
  );
}
