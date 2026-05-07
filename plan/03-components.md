# Bileşen Mimarisi

---

## Klasör Yapısı

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── sigara/page.tsx
│   ├── alkol/page.tsx
│   ├── uyusturucu/page.tsx
│   ├── obezite/page.tsx
│   ├── sosyal-medya/page.tsx
│   ├── kumar/page.tsx
│   ├── oyun/page.tsx
│   ├── yeme-bozuklugu/page.tsx
│   ├── is-bagimliligi/page.tsx
│   ├── uyku/page.tsx
│   ├── hareketsizlik/page.tsx
│   ├── kafein/page.tsx
│   ├── alisveris/page.tsx
│   ├── pornografi/page.tsx
│   ├── seker/page.tsx
│   ├── siralama/page.tsx
│   ├── kita/[slug]/page.tsx
│   └── hakkinda/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── StatCard.tsx
│   │   ├── CountryCard.tsx
│   │   ├── CategoryCard.tsx
│   │   ├── RankBadge.tsx
│   │   ├── ContinentFilter.tsx   ← yeni
│   │   ├── BigNumber.tsx         ← yeni (animasyonlu sayı)
│   │   └── SourceList.tsx
│   └── charts/
│       ├── HorizontalBarChart.tsx
│       ├── VerticalBarChart.tsx
│       ├── ComparisonTable.tsx
│       └── RegionCompareBar.tsx  ← yeni (WHO bölge karşılaştırması)
└── data/  (15 JSON dosyası)
```

---

## Yeni Bileşenler

### `ContinentFilter`
```ts
type ContinentFilterProps = {
  active: Continent | "all";
  onChange: (c: Continent | "all") => void;
};
```
Kategori sayfalarında veriyi kıtaya göre filtreler.

### `BigNumber`
```ts
type BigNumberProps = {
  value: number;
  suffix?: string;   // "M", "K", "%"
  label: string;
  color: string;
};
```
Framer Motion ile 0'dan hedefe sayar. Örnek: "100M pornografi bağımlısı".

### `RegionCompareBar`
Alkol sayfası için: Avrupa 9,2L vs Amerika 7,5L vs Dünya 5,5L karşılaştırması.

---

## Sayfa → Bileşen Matrisi

| Sayfa | Bileşenler |
|-------|-----------|
| Ana Sayfa | StatCard×5, CategoryCard×15, ContinentFilter |
| Sigara | HorizontalBarChart, CountryCard×n, SourceList |
| Alkol | HorizontalBarChart, RegionCompareBar, CountryCard×n |
| Uyuşturucu | BigNumber×3, CountryCard×n, ComparisonTable |
| Obezite | VerticalBarChart, CountryCard×n, BigNumber |
| Sosyal Medya | HorizontalBarChart (ekran süresi), CountryCard×n |
| Kumar | ComparisonTable, CountryCard×n |
| Gaming | ComparisonTable, CountryCard×n |
| Yeme Bozukluğu | BigNumber×3, CountryCard×n |
| Workaholism | HorizontalBarChart, CountryCard×n |
| Uyku | ComparisonTable (en kötü/en iyi), CountryCard×n |
| Hareketsizlik | RegionCompareBar, BigNumber |
| Kafein | HorizontalBarChart, CountryCard×n |
| Alışveriş | CountryCard×n, BigNumber |
| Pornografi | RegionCompareBar, BigNumber |
| Şeker | BigNumber×2, CountryCard×n |
| Sıralama | RankBadge × her kategori |
| Kıta/[slug] | ContinentFilter, tüm kategori özetleri |
