import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Kafein · BadHabits.world" };

const bars = [
  { country: "Lüksemburg",  countryCode: "LU", value: 6.5, display: "6,5 fincan", displayEn: "6.5 cups" },
  { country: "Finlandiya",  countryCode: "FI", value: 5.4, display: "5,4 fincan", displayEn: "5.4 cups" },
  { country: "İsveç",       countryCode: "SE", value: 4.8, display: "4,8 fincan", displayEn: "4.8 cups" },
  { country: "Norveç",      countryCode: "NO", value: 4.5, display: "4,5 fincan", displayEn: "4.5 cups" },
  { country: "Hollanda",    countryCode: "NL", value: 3.7, display: "3,7 fincan", displayEn: "3.7 cups" },
  { country: "ABD",         countryCode: "US", value: 3.1, display: "3,1 fincan", displayEn: "3.1 cups" },
  { country: "Türkiye",     countryCode: "TR", value: 2.8, display: "2,8 fincan", displayEn: "2.8 cups" },
  { country: "İngiltere",   countryCode: "GB", value: 2.3, display: "2,3 fincan", displayEn: "2.3 cups" },
  { country: "Japonya",     countryCode: "JP", value: 1.9, display: "1,9 fincan", displayEn: "1.9 cups" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 18 · Kafein"
      title={
        <>
          <span className="roman">Lüksemburg:</span>
          günde <span className="acc">5+</span> fincan.
        </>
      }
      lede="Lüksemburg yetişkinlerinin %18'i günlük 5+ fincan kahve tüketiyor. Kuzey Avrupa 3–4 fincan bandında. İran'da yetişkinlerin %13,8'i klinik kafein kullanım bozukluğu kriterlerini karşılıyor — enerji içeceği patlamasıyla genç kuşakta yükselen kategori."
      accent="caffeine"
      keyStat={{
        label: "Günlük kahve fincanı",
        value: "6,5",
        unit: "fincan",
        where: "Lüksemburg",
        blurb: "Yetişkin başına ortalama. Tek başına çekirdek kahve dahil; çay ve enerji içeceği hariç.",
      }}
      chartTitle="Yetişkin günlük ortalama kahve fincanı."
      chartMeta="Kahve · fincan/gün"
      bars={bars}
      callout={{
        label: "Klinik bağımlılık",
        quote:
          "İran'da yetişkinlerin %13,8'i Caffeine Use Disorder kriterlerini karşılıyor. Genç kuşakta enerji içeceği temel kapı.",
      }}
      notes={[
        { title: "Kafein ≠ kahve", body: "Enerji içeceği, çay, çikolata ve reçeteli ilaçlar dahil edildiğinde günlük alım miktarı bireysel olarak yedi katına çıkabiliyor." },
        { title: "Genç kategori", body: "ABD ve İngiltere'de 12–17 yaş enerji içeceği tüketimi son 10 yılda iki katına çıktı. Aritmi vakaları doğrulanmış sonuç." },
        { title: "İran istisnası", body: "Çay merkezli kültür hızla kahveye dönüyor. Yetişkinlerin %13,8'i klinik bağımlılık kriterlerini karşılıyor — küresel istisna." },
        { title: "Türkiye notu", body: "TÜSEB 2024: Türk kahvesi + filtre kombinasyonu. Yetişkin günlük kafein alımı 280 mg — DSÖ üst sınırı 400 mg." },
      ]}
      notesIntro="Kafein, sosyal kabul gören tek psikoaktif madde. Tüketim sınırının üzerinde olduğunda uyku, anksiyete ve kalp ritmi üzerinde ölçülebilir etkiler bırakıyor — fakat 'kötü alışkanlık' algısı çok düşük."
      prev={{ href: "/hareketsizlik", label: "Hareketsizlik" }}
      next={{ href: "/alisveris", label: "Alışveriş" }}
      en={{
        edition: "№ 18 · Caffeine",
        title: (
          <>
            <span className="roman">Luxembourg:</span>
            <span className="acc">5+</span> cups a day.
          </>
        ),
        lede:
          "18% of Luxembourg adults drink 5+ cups of coffee a day. Northern Europe sits in the 3–4 cup band. In Iran, 13.8% of adults meet clinical caffeine-use disorder criteria — a category rising in younger generations alongside the energy-drink boom.",
        keyStat: {
          label: "Daily coffee cups",
          value: "6.5",
          unit: "cups",
          where: "Luxembourg",
          blurb: "Adult average. Coffee bean–based drinks only; tea and energy drinks excluded.",
        },
        chartTitle: "Adult average daily coffee cups.",
        chartMeta: "Coffee · cups/day",
        callout: {
          label: "Clinical addiction",
          quote:
            "13.8% of Iranian adults meet Caffeine Use Disorder criteria. In younger generations, energy drinks are the primary entry point.",
        },
        notes: [
          { title: "Caffeine ≠ coffee", body: "When energy drinks, tea, chocolate, and prescription drugs are included, daily individual intake can rise sevenfold." },
          { title: "Young category", body: "Energy-drink consumption among 12–17 year-olds in the U.S. and U.K. has doubled in the past 10 years. Confirmed cases of arrhythmia." },
          { title: "Iran outlier", body: "A tea-centered culture is rapidly turning to coffee. 13.8% of adults meet clinical addiction criteria — a global outlier." },
          { title: "Türkiye note", body: "TÜSEB 2024: Turkish coffee + filter coffee combined. Adult daily caffeine intake is 280 mg — WHO upper limit is 400 mg." },
        ],
        notesIntro:
          "Caffeine is the only socially accepted psychoactive substance. Above the consumption threshold, it leaves measurable effects on sleep, anxiety, and heart rhythm — yet the 'bad habit' perception is very low.",
        prev: { href: "/hareketsizlik", label: "Inactivity" },
        next: { href: "/alisveris", label: "Shopping" },
      }}
    />
  );
}
