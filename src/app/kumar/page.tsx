import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Kumar · BadHabits.world" };

const bars = [
  { country: "İtalya",      countryCode: "IT", value: 45, display: "%45", displayEn: "45%" },
  { country: "İzlanda",     countryCode: "IS", value: 41, display: "%41", displayEn: "41%" },
  { country: "Yunanistan",  countryCode: "GR", value: 36, display: "%36", displayEn: "36%" },
  { country: "Avustralya",  countryCode: "AU", value: 33, display: "%33", displayEn: "33%" },
  { country: "İngiltere",   countryCode: "GB", value: 28, display: "%28", displayEn: "28%" },
  { country: "Kanada",      countryCode: "CA", value: 22, display: "%22", displayEn: "22%" },
  { country: "ABD",         countryCode: "US", value: 18, display: "%18", displayEn: "18%" },
  { country: "Almanya",     countryCode: "DE", value: 14, display: "%14", displayEn: "14%" },
  { country: "Türkiye",     countryCode: "TR", value:  9, display: "%9",  displayEn: "9%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 10 · Kumar"
      title={
        <>
          <span className="roman">Avrupa ergeni:</span>
          <span className="acc">3 katı</span> kız.
        </>
      }
      lede="Avrupa'da ergen kumar oranı 2019'da %8 iken 2024'te %14'e çıktı; kız ergenler arasında üç katına ulaştı. İtalya yetişkinlerin %45'iyle bölge zirvesinde. Asya Pasifik kumar pazarı 2033'e kadar 185,2 milyar dolara ulaşacak — küresel mobil bahis büyümesinin merkezi."
      accent="gambling"
      keyStat={{
        label: "Yetişkin yıllık katılım",
        value: "%45",
        where: "İtalya",
        blurb: "Otomat ve online bahis kombine etkisi. 18+ nüfusun yarıya yakını yıl içinde en az bir kez bahis oynadı.",
      }}
      chartTitle="Yetişkin yıllık kumar/bahis katılımı."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "Genç kuşağın patlaması",
        quote:
          "Avrupa ergen kumar oranı 5 yılda %8'den %14'e — kız ergenlerde üç katına çıktı. Mobil bahis uygulamaları başlıca tetikleyici.",
        dark: true,
      }}
      notes={[
        { title: "Loot-box bağlantısı", body: "Oyun içi şans kutuları kumarın 'eğitim ortamı'; 14–17 yaş kullanıcıların %35'i sonradan gerçek bahis hesabı açıyor." },
        { title: "Asya Pasifik patlaması", body: "Pazar 2024'te 89 milyar dolar, 2033 projeksiyonu 185,2 milyar. Mobil cüzdanlar ve canlı yayın bahisleri başı çekiyor." },
        { title: "Borç sarmalı", body: "İngiltere ulusal anketi: kumar bağımlılarının %65'i kredi kartı borcu kullanıyor. Aile içi mali şiddet vakaları üç katı." },
        { title: "Türkiye notu", body: "Yasal piyango ve iddaa katılımı %20'nin üzerinde. Yasadışı online bahis, ESH 2024 raporlarına göre 12 milyar dolarlık gri pazar oluşturuyor." },
      ]}
      notesIntro="Kumar, dijitalleşmenin en hızlı kâr eden kategorisi. Düzenleyiciler her zaman bir adım geride — bahis ürünleri sosyal medya hızıyla yayılıyor."
      prev={{ href: "/online-taciz", label: "Online taciz" }}
      next={{ href: "/oyun", label: "Oyun" }}
      en={{
        edition: "№ 10 · Gambling",
        title: (
          <>
            <span className="roman">European teens:</span>
            <span className="acc">3×</span> the rate among girls.
          </>
        ),
        lede:
          "European teen gambling rose from 8% in 2019 to 14% in 2024 — and tripled among teenage girls. Italy leads the region with 45% of adults. The Asia-Pacific gambling market will reach $185.2 billion by 2033 — the center of global mobile-betting growth.",
        keyStat: {
          label: "Adult annual participation",
          value: "45%",
          where: "Italy",
          blurb: "The combined effect of slot machines and online betting. Nearly half of the 18+ population placed at least one bet in the past year.",
        },
        chartTitle: "Adult annual gambling/betting participation.",
        chartMeta: "Adults · %",
        callout: {
          label: "Youth surge",
          quote:
            "European teen gambling rose from 8% to 14% in five years — tripling among teenage girls. Mobile betting apps are the primary trigger.",
          dark: true,
        },
        notes: [
          { title: "Loot-box link", body: "In-game chance boxes act as gambling's 'training environment'; 35% of users aged 14–17 later open a real betting account." },
          { title: "Asia-Pacific surge", body: "The market hit $89B in 2024; projected $185.2B by 2033. Mobile wallets and live-stream betting lead." },
          { title: "Debt spiral", body: "U.K. national survey: 65% of gambling addicts use credit-card debt. Cases of household financial abuse triple." },
          { title: "Türkiye note", body: "Legal lottery and İddaa participation runs above 20%. Illegal online betting forms a $12B grey market per ESH 2024 reports." },
        ],
        notesIntro:
          "Gambling is the fastest-monetizing category of digitalization. Regulators are always one step behind — betting products spread at social-media speed.",
        prev: { href: "/online-taciz", label: "Online Harassment" },
        next: { href: "/oyun", label: "Gaming" },
      }}
    />
  );
}
