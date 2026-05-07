import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Oyun · BadHabits.world" };

const bars = [
  { country: "ABD (ergen)",  countryCode: "US", value: 8.5, display: "%8,5", displayEn: "8.5%" },
  { country: "Güney Kore",   countryCode: "KR", value: 8.0, display: "%8,0", displayEn: "8.0%" },
  { country: "Çin",          countryCode: "CN", value: 6.5, display: "%6,5", displayEn: "6.5%" },
  { country: "Japonya",      countryCode: "JP", value: 5.1, display: "%5,1", displayEn: "5.1%" },
  { country: "Avustralya",   countryCode: "AU", value: 4.4, display: "%4,4", displayEn: "4.4%" },
  { country: "Türkiye",      countryCode: "TR", value: 4.1, display: "%4,1", displayEn: "4.1%" },
  { country: "İngiltere",    countryCode: "GB", value: 3.4, display: "%3,4", displayEn: "3.4%" },
  { country: "Almanya",      countryCode: "DE", value: 3.2, display: "%3,2", displayEn: "3.2%" },
  { country: "Avrupa ort.",  countryCode: "EU", value: 2.7, display: "%2,7", displayEn: "2.7%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 11 · Oyun"
      title={
        <>
          <span className="roman">Ergenlerde</span>
          <span className="acc">%8,5</span> klinik bağımlılık.
        </>
      }
      lede="DSÖ tarafından 2018'de resmî tanı (Gaming Disorder) listesine alındı. ABD ergenlerinin %8,5'i klinik kriterleri karşılıyor; Avrupa'da yetişkin oranı %2,7. Çin'in 'oyun yasaları' altında 18 yaş altı haftada 3 saat sınırı var, fakat ergenlerin %20'si bu sınırı aşıyor."
      accent="gaming"
      keyStat={{
        label: "Ergen klinik bağımlılık",
        value: "%8,5",
        where: "Birleşik Devletler",
        blurb: "DSÖ tanı kriterleri: 12+ ay süren işlevsel bozulma, kontrol kaybı, sürelerin gizlenmesi.",
      }}
      chartTitle="Internet Gaming Disorder yaygınlığı."
      chartMeta="Yetişkin/ergen · %"
      bars={bars}
      callout={{
        label: "Akıldan çıkmasın",
        quote:
          "ABD genel nüfusunda oran %1,7–10. Bağımlılığı olanların %78'inde anksiyete, %47'sinde majör depresyon eşlik ediyor.",
      }}
      notes={[
        { title: "Çin yasası", body: "2021'den bu yana 18 yaş altı haftalık 3 saatle sınırlı. Yasanın etkisi tartışmalı — VPN ve aile hesaplarıyla aşılıyor." },
        { title: "Loot-box gri alanı", body: "Oyun içi mikro ödemeler, kumarın yasal düzenlenmemiş türevi. Belçika ve Hollanda yasakladı." },
        { title: "MMO yorgunluk", body: "Güney Kore'de PC bang kültürü hâlâ güçlü. Yetişkinlerde yoğun oyun + uyku borcu kombinasyonu kalp ölümlerine yol açtı." },
        { title: "Türkiye notu", body: "TÜİK 2024: 16–24 yaş erkeklerin %18'i haftada 30+ saat oyun. Klinik bağımlılık tahmini %4,1." },
      ]}
      notesIntro="Oyun, kumar ve sosyal medyanın bağımlılık döngülerini tek bir uygulamada birleştirdi. Bağımsız bir kategori olarak izlenmesi yeni — fakat hızla büyüyor."
      prev={{ href: "/kumar", label: "Kumar" }}
      next={{ href: "/yeme-bozuklugu", label: "Yeme bozukluğu" }}
      en={{
        edition: "№ 11 · Gaming",
        title: (
          <>
            <span className="roman">In teens:</span>
            <span className="acc">8.5%</span> clinical addiction.
          </>
        ),
        lede:
          "WHO recognized Gaming Disorder as a formal diagnosis in 2018. 8.5% of U.S. teens meet the clinical criteria; the European adult rate is 2.7%. Under China's 'gaming laws' those under 18 are limited to 3 hours per week, but 20% of teens exceed it.",
        keyStat: {
          label: "Teen clinical addiction",
          value: "8.5%",
          where: "United States",
          blurb: "WHO criteria: 12+ months of functional impairment, loss of control, and concealment of time spent.",
        },
        chartTitle: "Internet Gaming Disorder prevalence.",
        chartMeta: "Adults/teens · %",
        callout: {
          label: "Don't forget",
          quote:
            "In the U.S. general population the rate is 1.7–10%. 78% of those affected also have anxiety; 47% have major depression.",
        },
        notes: [
          { title: "China's law", body: "Since 2021, those under 18 are capped at 3 hours per week. The law's effectiveness is debated — VPNs and family accounts work around it." },
          { title: "Loot-box grey area", body: "In-game micro-payments are gambling's unregulated derivative. Belgium and the Netherlands have banned them." },
          { title: "MMO fatigue", body: "South Korea's PC bang culture is still strong. In adults, intensive gaming combined with sleep debt has caused cardiac deaths." },
          { title: "Türkiye note", body: "TÜİK 2024: 18% of men aged 16–24 game 30+ hours per week. Estimated clinical addiction: 4.1%." },
        ],
        notesIntro:
          "Gaming has merged the addiction loops of gambling and social media into a single application. Tracked as a standalone category only recently — but growing fast.",
        prev: { href: "/kumar", label: "Gambling" },
        next: { href: "/yeme-bozuklugu", label: "Eating Disorders" },
      }}
    />
  );
}
