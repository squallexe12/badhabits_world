import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "E-sigara · BadHabits.world" };

const bars = [
  { country: "Endonezya",   countryCode: "ID", value: 32.0, display: "%32,0", displayEn: "32.0%" },
  { country: "ABD (genç)",  countryCode: "US", value: 29.0, display: "%29,0", displayEn: "29.0%" },
  { country: "Yunanistan",  countryCode: "GR", value: 24.5, display: "%24,5", displayEn: "24.5%" },
  { country: "Polonya",     countryCode: "PL", value: 22.2, display: "%22,2", displayEn: "22.2%" },
  { country: "İngiltere",   countryCode: "GB", value: 18.3, display: "%18,3", displayEn: "18.3%" },
  { country: "Fransa",      countryCode: "FR", value: 11.2, display: "%11,2", displayEn: "11.2%" },
  { country: "Almanya",     countryCode: "DE", value:  9.5, display: "%9,5",  displayEn: "9.5%"  },
  { country: "Türkiye",     countryCode: "TR", value:  6.4, display: "%6,4",  displayEn: "6.4%"  },
  { country: "Japonya",     countryCode: "JP", value:  4.1, display: "%4,1",  displayEn: "4.1%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 02 · E-sigara"
      title={
        <>
          <span className="roman">Çocuklar yetişkinden</span>
          <span className="acc">9 kat</span> daha hızlı.
        </>
      }
      lede="Endonezya, %32 yetişkin yaygınlığıyla dünya birincisi; Yunanistan ikinci sırada. ABD'de gençler arasında günlük vaping oranı 2020–2024'te %15'ten %29'a sıçradı, kırsalda %16'dan %42'ye. Küresel: 100 milyon vaper, çocuklar yetişkinlerden dokuz kat fazla."
      accent="vaping"
      keyStat={{
        label: "En yüksek yetişkin yaygınlığı",
        value: "%32",
        where: "Endonezya",
        blurb: "Aroma ve düşük fiyat, geçiş yapan eski sigara içicilerinin yarısından fazlasını yakalıyor.",
      }}
      chartTitle="Yetişkin/genç vaping yaygınlığı."
      chartMeta="Nüfus · %"
      bars={bars}
      callout={{
        label: "Akıldan çıkmasın",
        quote:
          "Bırakma başarısızlığı %28'den %53'e çıktı: e-sigara klasiği bırakmak yerine ikisini de tutan ikili kullanıcı kuşağı yarattı.",
      }}
      notes={[
        { title: "Genç patlaması", body: "ABD CDC: 13–17 yaş grubunda günlük vaping 2020'de %15 iken 2024'te %29. Aynı dönemde sigara oranı %3'ün altına indi." },
        { title: "Kırsal etkisi", body: "ABD kırsal bölgelerinde gençlik vaping oranı %16,4 → %41,8. Erişim ve sosyal kabul birlikte arttı." },
        { title: "Bağımlılık eşiği", body: "Tek kullanımlık cihazlar 600+ nefes ve 3–5 paket sigaraya eşdeğer nikotin. Bağımlılık günler içinde kuruluyor." },
        { title: "Endonezya tablosu", body: "Yetişkinlerin üçte biri vape kullanıyor. Devlet düzenlemesi sınırlı, agresif pazarlamaya açık." },
      ]}
      notesIntro="E-sigara, klasik sigara karşıtı kazanımları geri çevirdi: nikotin bağımlılığı yeni bir nesle, daha hızlı ve daha sessiz biçimde yayılıyor."
      prev={{ href: "/sigara", label: "Sigara" }}
      next={{ href: "/alkol", label: "Alkol" }}
      en={{
        edition: "№ 02 · Vaping",
        title: (
          <>
            <span className="roman">Children pick it up</span>
            <span className="acc">9× faster</span> than adults.
          </>
        ),
        lede:
          "Indonesia is the world leader at 32% adult prevalence; Greece sits second. Daily teen vaping in the U.S. jumped from 15% to 29% between 2020 and 2024 — and from 16% to 42% in rural areas. Globally: 100 million vapers, with children using nine times more than adults.",
        keyStat: {
          label: "Highest adult prevalence",
          value: "32%",
          where: "Indonesia",
          blurb: "Flavor and low price catch over half of the former smokers crossing over from cigarettes.",
        },
        chartTitle: "Adult/teen vaping prevalence.",
        chartMeta: "Population · %",
        callout: {
          label: "Don't forget",
          quote:
            "Quit-failure rose from 28% to 53%: vaping created a generation of dual users who keep both habits instead of dropping cigarettes.",
        },
        notes: [
          { title: "Teen surge", body: "U.S. CDC: daily vaping in 13–17 year-olds was 15% in 2020 and reached 29% in 2024. Smoking in the same group fell below 3%." },
          { title: "Rural effect", body: "U.S. rural teen vaping rose from 16.4% to 41.8%. Access and social acceptance moved together." },
          { title: "Addiction threshold", body: "Single-use devices deliver 600+ puffs and nicotine equivalent to 3–5 packs of cigarettes. Dependence sets in within days." },
          { title: "Indonesia picture", body: "One in three adults vapes. State regulation is limited and the market is open to aggressive marketing." },
        ],
        notesIntro:
          "Vaping reversed the gains made against cigarettes: nicotine dependence is spreading to a new generation more quickly and more quietly.",
        prev: { href: "/sigara", label: "Smoking" },
        next: { href: "/alkol", label: "Alcohol" },
      }}
    />
  );
}
