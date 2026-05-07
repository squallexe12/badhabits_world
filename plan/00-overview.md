# Küresel Kötü Alışkanlıklar Atlası — Site Planı Genel Bakış

**Proje Adı:** BadHabits.world
**Araştırmacı:** Metehan | Son güncelleme: 6 Mayıs 2026 (sürekli güncelleniyor)
**Amaç:** Ülkelerin sağlıksız alışkanlıklarını kıta bazlı ve kategori bazlı interaktif veri görselleştirmeleriyle sunan eğitici web sitesi.

---

## Kategori Sayfaları (20)

| Rota | Sayfa | Öne Çıkan Veri |
|------|-------|----------------|
| `/sigara` | Sigara | Sırbistan/Bulgaristan %35,5 · Dünya %20 · 7M ölüm/yıl |
| `/e-sigara` | E-Sigara & Vaping | Endonezya %32 · Çocuklar yetişkinlerden 9x fazla |
| `/alkol` | Alkol | Avrupa 9,2 L/kişi · Dünya 5,5 L |
| `/uyusturucu` | Opioid & Uyuşturucu | ABD 224 ölüm/gün · Estonya 6x AB ort. |
| `/benzodiazepin` | Benzodiazepin & Uyku İlacı | ABD 5,3M kötüye kullanım · 10.964 overdoz ölümü |
| `/obezite` | Obezite & Fast Food | ABD %41 · 2035'te dünya %54 yüksek BMI |
| `/sosyal-medya` | Sosyal Medya & Telefon | Güney Afrika 9sa24dk · 33,2M Amerikalı |
| `/online-taciz` | Online Nefret & Taciz | Hindistan %85 · ABD ergen %50 |
| `/kumar` | Kumar | Avrupa ergen %8→%14 · Asya Pasifik $185M pazar |
| `/oyun` | Gaming Bağımlılığı | ABD %1,7–10 · Avrupa %2,7 |
| `/yeme-bozuklugu` | Yeme Bozuklukları | ABD 30M · Mortalite 5,31 |
| `/vucut-dismorfisi` | Vücut Dismorfisi & Estetik | Hastaların %18,6'sı BDD · 15x genel nüfus |
| `/aile-ici-siddet` | Aile İçi Şiddet | 840M kadın etkileniyor · Yılda 50.000 femisit |
| `/is-bagimliligi` | Workaholism | Güney Kore %39,7 · Karoshi |
| `/uyku` | Uyku Yoksunluğu | Singapur %56 yetersiz · Hollanda en iyi |
| `/hareketsizlik` | Fiziksel İnaktivite | Asya Pasifik %48 · 1,8M yetişkin risk |
| `/kafein` | Kafein & Kahve | Lüksemburg 5+ fincan/gün |
| `/alisveris` | Alışveriş Bağımlılığı | %5–8 global · %80 kadın |
| `/pornografi` | Pornografi | ~100M kişi · Asya %19 |
| `/seker` | Şeker & Obezite | 178,79M metrik ton global |

## Yapısal Sayfalar

| Rota | Sayfa |
|------|-------|
| `/` | Ana Sayfa — hero + 5 çarpıcı stat + 20 kategori kartı |
| `/siralama` | Küresel Sıralama — kategori bazlı leaderboard'lar |
| `/kita/[slug]` | Kıta Sayfası — americas / europe / asia / mena / africa |
| `/hakkinda` | Hakkında — araştırmacı, metodoloji, 50+ kaynak |

---

## Tech Stack

| Katman | Teknoloji |
|--------|-----------|
| Framework | Next.js 15 (App Router) |
| Dil | TypeScript |
| Stil | Tailwind CSS v4 |
| Grafik | Recharts |
| Animasyon | Framer Motion |
| Veri | Statik JSON (src/data/) |
| Deploy | Vercel |

---

## Renk Paleti (20 kategori)

| Kategori | Renk |
|----------|------|
| Sigara | red-500 |
| E-Sigara | red-300 |
| Alkol | purple-500 |
| Uyuşturucu | rose-700 |
| Benzodiazepin | rose-400 |
| Obezite | orange-500 |
| Sosyal Medya | sky-500 |
| Online Taciz | sky-700 |
| Kumar | yellow-500 |
| Gaming | green-500 |
| Yeme Bozukluğu | pink-500 |
| Vücut Dismorfisi | fuchsia-500 |
| Aile İçi Şiddet | red-800 |
| Workaholism | slate-400 |
| Uyku | blue-500 |
| Hareketsizlik | teal-500 |
| Kafein | amber-600 |
| Alışveriş | violet-500 |
| Pornografi | gray-500 |
| Şeker | lime-500 |
