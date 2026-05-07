import CategoryDetail from "@/components/CategoryDetail";
import sleepData from "@/data/sleep.json";
import type { SleepEntry } from "@/types";

export const metadata = { title: "Uyku · BadHabits.world" };

export default function Page() {
  const data = (sleepData as SleepEntry[])
    .filter((e) => e.avgHoursPerNight !== null)
    .sort((a, b) => (a.avgHoursPerNight ?? 0) - (b.avgHoursPerNight ?? 0));

  const worst = data[0];

  return (
    <CategoryDetail
      edition="№ 15 · Uyku"
      title={
        <>
          <span className="roman">En sessiz</span>
          alışkanlık <span className="acc">borcu.</span>
        </>
      }
      lede="DSÖ önerisi gece başına 7–9 saat. Singapur'un %56'sı, BAE'nin %55'i ve Endonezya'nın %52'si yetersiz uyuyor. En iyi performans Hollanda ve Fransa'da: 8 saatin üzerinde gece ortalaması."
      accent="sleep"
      keyStat={{
        label: "En kısa gece ortalaması",
        value: String(worst.avgHoursPerNight).replace(".", ","),
        unit: "saat",
        where: worst.country,
        blurb: worst.note,
      }}
      chartTitle="Gece başına ortalama uyku."
      chartMeta="Yetişkin · saat"
      bars={data.map((e) => ({
        country: e.country,
        countryCode: e.countryCode,
        value: e.avgHoursPerNight ?? 0,
        display: `${String(e.avgHoursPerNight).replace(".", ",")} sa`,
        displayEn: `${String(e.avgHoursPerNight)} h`,
      }))}
      callout={{
        label: "DSÖ eşiği",
        quote:
          "Yetişkinler için önerilen 7–9 saat. Bu sınırın altındaki her saat, kalp-damar hastalığı riskini %13, anksiyete riskini ise %17 artırıyor.",
      }}
      notes={[
        {
          title: "Asya–Avrupa farkı",
          body:
            "Asya başkentlerinde uyku 6,5 saatin altında. Avrupa'da Hollanda ve Fransa 8 saati aşıyor. Çalışma kültürü ve gün ışığına maruziyet temel ayrım noktaları.",
        },
        {
          title: "Karoshi mirası",
          body:
            "Japonya'da 'aşırı çalışma' kaynaklı ölümler kayıt altında. Yıllık 604 bin iş günü kaybı bu nedenle.",
        },
        {
          title: "Kapatma sonrası",
          body:
            "Pandemi sonrası 'rapor uykusu' arttı: insanlar kayıt veriyor ama gerçek dinlenme süresi düşük. Telefon ekranı en büyük geç uyku tetikleyicisi.",
        },
        {
          title: "Türkiye notu",
          body:
            "TÜİK 2023: yetişkinlerin %48'i kendini uykusuz hissediyor; 18–24 yaş grubunda bu oran %57.",
        },
      ]}
      notesIntro="Uyku, kötü alışkanlıklar arasında en az görünür olanı. Doğrudan ölüm istatistiğine yansımasa da diğer bütün risklerin (obezite, alkol, depresyon) çarpanı."
      prev={{ href: "/yeme-bozuklugu", label: "Yeme bozukluğu" }}
      next={{ href: "/hareketsizlik", label: "Hareketsizlik" }}
      en={{
        edition: "№ 15 · Sleep",
        title: (
          <>
            <span className="roman">The quietest</span>
            kind of <span className="acc">debt.</span>
          </>
        ),
        lede:
          "WHO recommends 7–9 hours per night. 56% in Singapore, 55% in the UAE, and 52% in Indonesia sleep insufficiently. The Netherlands and France perform best, averaging above 8 hours per night.",
        keyStat: {
          label: "Shortest nightly average",
          value: String(worst.avgHoursPerNight),
          unit: "hours",
          where: worst.country,
          blurb: worst.note,
        },
        chartTitle: "Average sleep per night.",
        chartMeta: "Adults · hours",
        callout: {
          label: "WHO threshold",
          quote:
            "Adults are recommended 7–9 hours. Each hour below this threshold raises cardiovascular disease risk by 13% and anxiety risk by 17%.",
        },
        notes: [
          { title: "Asia–Europe gap", body: "In Asian capitals, sleep falls below 6.5 hours. The Netherlands and France exceed 8 hours in Europe. Work culture and daylight exposure are the key dividers." },
          { title: "Karoshi legacy", body: "Japan logs 'overwork-related' deaths officially. 604,000 lost workdays a year are attributed to this cause." },
          { title: "Post-lockdown", body: "'Reported sleep' rose after the pandemic: people log time but actual rest is low. The phone screen is the largest late-bedtime trigger." },
          { title: "Türkiye note", body: "TÜİK 2023: 48% of adults feel sleep-deprived; in the 18–24 age group the figure reaches 57%." },
        ],
        notesIntro:
          "Sleep is the least visible of the bad habits. Even though it does not show up directly in mortality statistics, it is the multiplier on every other risk (obesity, alcohol, depression).",
        prev: { href: "/yeme-bozuklugu", label: "Eating Disorders" },
        next: { href: "/hareketsizlik", label: "Inactivity" },
      }}
    />
  );
}
