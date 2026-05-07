import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Hareketsizlik · BadHabits.world" };

const bars = [
  { country: "Asya Pasifik", countryCode: "—",  value: 48, display: "%48", displayEn: "48%" },
  { country: "Güney Asya",   countryCode: "—",  value: 45, display: "%45", displayEn: "45%" },
  { country: "MENA",         countryCode: "—",  value: 36, display: "%36", displayEn: "36%" },
  { country: "Türkiye",      countryCode: "TR", value: 35, display: "%35", displayEn: "35%" },
  { country: "ABD",          countryCode: "US", value: 32, display: "%32", displayEn: "32%" },
  { country: "Latin Amerika",countryCode: "—",  value: 31, display: "%31", displayEn: "31%" },
  { country: "Avrupa",       countryCode: "—",  value: 28, display: "%28", displayEn: "28%" },
  { country: "Sahra altı",   countryCode: "—",  value: 22, display: "%22", displayEn: "22%" },
  { country: "Okyanusya",    countryCode: "—",  value: 14, display: "%14", displayEn: "14%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 17 · Hareketsizlik"
      title={
        <>
          <span className="roman">1,8 milyar</span>
          yetişkin <span className="acc">risk altında.</span>
        </>
      }
      lede="DSÖ 2024: dünya genelinde 1,8 milyar yetişkin (%31,3) yeterli fiziksel aktiviteden yoksun. Asya Pasifik'te oran %48 — küresel zirve. Avrupa %28, Sahra altı Afrika %22, Okyanusya %14. Hareketsizlik yıllık 5 milyon erken ölüme bağlanıyor."
      accent="inactivity"
      keyStat={{
        label: "Bölgesel hareketsizlik oranı",
        value: "%48",
        where: "Asya Pasifik bölgesi",
        blurb: "Yetişkinlerin yarıya yakını DSÖ önerisi olan haftada 150 dakika orta yoğunlukta hareketin altında.",
      }}
      chartTitle="Yetersiz fiziksel aktivite oranı, bölge bazında."
      chartMeta="18+ yetişkin · %"
      bars={bars}
      callout={{
        label: "Tek satırda hatırla",
        quote:
          "1,8 milyar yetişkin risk altında. Eğilim devam ederse 2030'da %35'e çıkacak — DSÖ'nün ulaşmayı hedeflediği %15 düşüş tersine işliyor.",
      }}
      notes={[
        { title: "Şehir tasarımı", body: "Otomobil merkezli kentleşme hareketsizliğin asıl mimarı. Yürünebilirlik skoru yüksek şehirlerde aktivite oranları %40 daha iyi." },
        { title: "Cinsiyet farkı", body: "Kadınların hareketsizlik oranı erkeklerden ortalama 5 puan yüksek. Güvenlik ve kamusal alan erişimi ana faktörler." },
        { title: "Pandemi etkisi", body: "Kapatma sonrası egzersiz alışkanlığını kaybedenlerin %63'ü geri kazanmadı. Salon üyelikleri 2024'te bile pandemi öncesi seviyenin altında." },
        { title: "Türkiye notu", body: "Sağlık Bakanlığı 2023: yetişkinlerin %35,1'i yeterli fiziksel aktivite yapmıyor. Kentsel/kırsal fark 12 puan." },
      ]}
      notesIntro="Hareketsizlik, modern yaşamın varsayılan ayarı. Sigara veya alkol gibi 'aktif' bir kötü alışkanlık değil — 'eksik' bir alışkanlık. Sağlık yükü ise diğerleriyle aynı."
      prev={{ href: "/uyku", label: "Uyku" }}
      next={{ href: "/kafein", label: "Kafein" }}
      en={{
        edition: "№ 17 · Inactivity",
        title: (
          <>
            <span className="roman">1.8 billion</span>
            adults <span className="acc">at risk.</span>
          </>
        ),
        lede:
          "WHO 2024: 1.8 billion adults worldwide (31.3%) lack sufficient physical activity. The Asia-Pacific rate is 48% — the global peak. Europe 28%, Sub-Saharan Africa 22%, Oceania 14%. Inactivity is linked to 5 million premature deaths a year.",
        keyStat: {
          label: "Regional inactivity rate",
          value: "48%",
          where: "Asia-Pacific region",
          blurb: "Almost half of adults fall below the WHO recommendation of 150 minutes per week of moderate movement.",
        },
        chartTitle: "Insufficient physical activity, by region.",
        chartMeta: "Adults 18+ · %",
        callout: {
          label: "Remember in one line",
          quote:
            "1.8 billion adults at risk. On current trends the rate will reach 35% by 2030 — moving in the wrong direction relative to the WHO's 15% reduction target.",
        },
        notes: [
          { title: "City design", body: "Car-centric urbanization is the real architect of inactivity. Activity rates are 40% better in cities with high walkability scores." },
          { title: "Gender gap", body: "Women's inactivity rate runs 5 points above men's on average. Safety and access to public space are the main factors." },
          { title: "Pandemic effect", body: "63% of those who lost the exercise habit during lockdowns never recovered it. Gym memberships in 2024 still sit below pre-pandemic levels." },
          { title: "Türkiye note", body: "Ministry of Health 2023: 35.1% of adults do not get enough physical activity. The urban/rural gap is 12 points." },
        ],
        notesIntro:
          "Inactivity is the default setting of modern life. Not an 'active' bad habit like smoking or alcohol — a 'missing' one. The health burden is in the same league as the others.",
        prev: { href: "/uyku", label: "Sleep" },
        next: { href: "/kafein", label: "Caffeine" },
      }}
    />
  );
}
