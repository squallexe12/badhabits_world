# Teknoloji Kararları

---

## Framework: Next.js 15 (App Router)

**Neden:** Statik veri + çok sayfalı site için ideal. JSON import + SSG ile sıfır runtime maliyeti. Vercel'e doğal deploy.

**Reddedilen alternatifler:** Remix (gereksiz server karmaşıklığı), Vite SPA (SEO eksik).

---

## Dil: TypeScript

**Neden:** JSON veri modelleri tip güvencesiyle korunur. `SmokingEntry[]` gibi tipler veri değiştiğinde derleme hatası verir.

---

## Stil: Tailwind CSS v4

**Neden:** Utility-first, koyu tema kolaylığı, responsive sınıflar hızlı iterasyon sağlar.

Kategori renkleri CSS değişkeni olarak:
```css
/* globals.css */
:root {
  --color-smoking: theme(colors.red.500);
  --color-alcohol: theme(colors.purple.500);
  --color-obesity:  theme(colors.orange.500);
  --color-sleep:    theme(colors.blue.500);
}
```

---

## Grafik: Recharts

**Neden:** React-native, TypeScript desteği, `ResponsiveContainer` ile mobil uyum kolay. D3.js'e kıyasla çok daha az boilerplate.

**Kullanılan bileşenler:** `BarChart`, `Bar`, `XAxis`, `YAxis`, `Tooltip`, `ResponsiveContainer`

---

## Animasyon: Framer Motion

**Kullanım yerleri:**
- Ana sayfa stat kartları giriş animasyonu
- Obezite sayfası "500 milyon+" sayaç animasyonu
- Sayfa geçiş fade efekti

---

## Veri: Statik JSON

**Neden:** Veri sabit (Mayıs 2026 araştırması). Veritabanı/API gereksiz.

```ts
import smokingData from "@/data/smoking.json";
```

---

## Deploy: Vercel

**Neden:** Next.js native platform. Otomatik HTTPS, CDN, preview URL'leri.

---

## Paket Yöneticisi: pnpm

---

## Kurulum

```bash
pnpm create next-app@latest bad-habits-atlas \
  --typescript --tailwind --app --import-alias "@/*"

pnpm add recharts framer-motion
