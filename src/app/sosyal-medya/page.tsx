import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Sosyal medya · BadHabits.world" };

const bars = [
  { country: "Güney Afrika", countryCode: "ZA", value: 9.40, display: "9 sa 24 dk", displayEn: "9 h 24 m" },
  { country: "Brezilya",     countryCode: "BR", value: 9.13, display: "9 sa 8 dk",  displayEn: "9 h 8 m"  },
  { country: "Filipinler",   countryCode: "PH", value: 8.52, display: "8 sa 52 dk", displayEn: "8 h 52 m" },
  { country: "Tayland",      countryCode: "TH", value: 8.36, display: "8 sa 36 dk", displayEn: "8 h 36 m" },
  { country: "Bangladeş",    countryCode: "BD", value: 8.10, display: "8 sa 10 dk", displayEn: "8 h 10 m" },
  { country: "Türkiye",      countryCode: "TR", value: 7.24, display: "7 sa 24 dk", displayEn: "7 h 24 m" },
  { country: "ABD",          countryCode: "US", value: 7.13, display: "7 sa 13 dk", displayEn: "7 h 13 m" },
  { country: "İngiltere",    countryCode: "GB", value: 6.36, display: "6 sa 36 dk", displayEn: "6 h 36 m" },
  { country: "Japonya",      countryCode: "JP", value: 4.13, display: "4 sa 13 dk", displayEn: "4 h 13 m" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 08 · Sosyal medya"
      title={
        <>
          <span className="roman">Günde</span>
          <span className="acc">9 saat</span> ekran.
        </>
      }
      lede="Günlük internet ekran süresi sıralamasında Güney Afrika 9 saat 24 dakikayla zirvede. ABD'de 33,2 milyon yetişkin sosyal medya bağımlılığı kriterlerini karşılıyor; Gen Z'nin %82'si kendini bağımlı tarif ediyor. Bangladeş gençlerinin %61,4'ü bağımlı sayılıyor."
      accent="social"
      keyStat={{
        label: "En uzun günlük ekran süresi",
        value: "9 sa 24 dk",
        where: "Güney Afrika",
        blurb: "Mobil veri tarifelerinin ucuzlaması ve kısa video uygulamalarının yayılmasıyla 2020 sonrası iki kat arttı.",
      }}
      chartTitle="Günlük ortalama internet ekran süresi."
      chartMeta="Yetişkin · saat:dakika"
      bars={bars}
      callout={{
        label: "Tek satırda hatırla",
        quote:
          "Gen Z'nin %82'si kendini sosyal medya bağımlısı olarak tanımlıyor. ABD'de 33,2 milyon yetişkin klinik bağımlılık kriterlerini karşılıyor.",
      }}
      notes={[
        { title: "Kısa video etkisi", body: "TikTok ve benzeri uygulamalar günlük süreye 2020'den bu yana ortalama 90 dakika ekledi. Beyin dopamin döngüsünü 8 saniyede yeniliyor." },
        { title: "Uyku borcu bağlantısı", body: "Yatağa giderken ekran kullanımı, uyku başlangıcını ortalama 47 dakika geciktiriyor. Bağımlı kullanıcılarda 2 saatin üzerinde gecikme." },
        { title: "Bangladeş üniversitelileri", body: "Dakka'da yapılan 2024 araştırması: lisans öğrencilerinin %61,4'ü teşhis kriterlerini karşılıyor — küresel rekor." },
        { title: "Türkiye notu", body: "We Are Social 2025: 16–64 yaş günlük 7 sa 24 dk ekran. Sosyal medya hesap sayısı kişi başı 8,2 — dünya ortalamasının üstünde." },
      ]}
      notesIntro="Sosyal medya, kötü alışkanlıklar arasında en yeni ama en hızlı yayılanı. Etki sadece dikkat değil — uyku, ruh sağlığı ve fiziksel hareket dolaylı olarak çöküyor."
      prev={{ href: "/obezite", label: "Obezite" }}
      next={{ href: "/online-taciz", label: "Online taciz" }}
      en={{
        edition: "№ 08 · Social Media",
        title: (
          <>
            <span className="roman">Per day:</span>
            <span className="acc">9 hours</span> on screen.
          </>
        ),
        lede:
          "South Africa leads daily internet screen time at 9 hours 24 minutes. In the U.S., 33.2 million adults meet social-media addiction criteria; 82% of Gen Z describe themselves as addicted. 61.4% of Bangladeshi students count as addicted.",
        keyStat: {
          label: "Longest daily screen time",
          value: "9 h 24 m",
          where: "South Africa",
          blurb: "Doubled after 2020 as mobile-data prices fell and short-video apps spread.",
        },
        chartTitle: "Average daily internet screen time.",
        chartMeta: "Adults · hh:mm",
        callout: {
          label: "Remember in one line",
          quote:
            "82% of Gen Z describe themselves as social-media addicted. 33.2 million U.S. adults meet clinical addiction criteria.",
        },
        notes: [
          { title: "Short-video effect", body: "TikTok and similar apps have added 90 minutes per day on average since 2020. The brain refreshes its dopamine cycle every 8 seconds." },
          { title: "Sleep-debt link", body: "Screen use at bedtime delays sleep onset by 47 minutes on average. Among addicted users, the delay exceeds 2 hours." },
          { title: "Bangladesh students", body: "A 2024 Dhaka study: 61.4% of undergraduates meet diagnostic criteria — a global record." },
          { title: "Türkiye note", body: "We Are Social 2025: 7 h 24 m daily for 16–64 year-olds. Per-capita social accounts: 8.2 — above the global average." },
        ],
        notesIntro:
          "Social media is the newest of the bad habits — and the fastest-spreading. The effect is not just attention: sleep, mental health, and physical movement all collapse downstream.",
        prev: { href: "/obezite", label: "Obesity" },
        next: { href: "/online-taciz", label: "Online Harassment" },
      }}
    />
  );
}
