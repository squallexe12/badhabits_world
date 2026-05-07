import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Pornografi · BadHabits.world" };

const bars = [
  { country: "Hindistan",    countryCode: "IN", value: 21, display: "%21", displayEn: "21%" },
  { country: "Asya ort.",    countryCode: "—",  value: 19, display: "%19", displayEn: "19%" },
  { country: "Filipinler",   countryCode: "PH", value: 18, display: "%18", displayEn: "18%" },
  { country: "Japonya",      countryCode: "JP", value: 14, display: "%14", displayEn: "14%" },
  { country: "Türkiye",      countryCode: "TR", value: 12, display: "%12", displayEn: "12%" },
  { country: "Avrupa ort.",  countryCode: "—",  value: 11, display: "%11", displayEn: "11%" },
  { country: "K. Amerika",   countryCode: "—",  value:  7, display: "%7",  displayEn: "7%"  },
  { country: "Latin Amerika",countryCode: "—",  value:  6, display: "%6",  displayEn: "6%"  },
  { country: "Avustralya",   countryCode: "AU", value:  5, display: "%5",  displayEn: "5%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 20 · Pornografi"
      title={
        <>
          <span className="roman">İlk maruz kalma:</span>
          ortalama <span className="acc">11 yaş.</span>
        </>
      }
      lede="Küresel klinik bağımlılık tahmini yaklaşık 100 milyon — DSÖ ICD-11 'Compulsive Sexual Behaviour Disorder' tanısı altında. Bölgesel yaygınlık Asya'da %19, Avrupa'da %11, Kuzey Amerika'da %7, Avustralya'da %5. İlk maruz kalma yaşı küresel ortalama 11."
      accent="porn"
      keyStat={{
        label: "Bölgesel yetişkin yaygınlığı",
        value: "%19",
        where: "Asya",
        blurb: "Bağımlılık kriterlerini karşılayan yetişkin oranı. Dünya genelinde tahminî 100 milyon klinik vaka.",
      }}
      chartTitle="Yetişkin yaygınlığı, bölge ve ülke."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "İlk maruz kalma",
        quote:
          "Küresel ortalama 11 yaş. ABD'de erkek ergenlerin %93'ü, kız ergenlerin %62'si 18 yaşına gelmeden maruz kaldı. Anlık tıkla erişim 2010 sonrası standart.",
      }}
      notes={[
        { title: "İçerik filtresi yetersizliği", body: "Yaş doğrulama yasaları (Birleşik Krallık, Texas) işliyor olsa da VPN ve sosyal medya tehdidi azaltmıyor. Kısa video uygulamaları gri alan." },
        { title: "Cinsiyet farkı", body: "Erkeklerde tahminî 4 katı yaygın. Bağımlılığa eşlik eden anksiyete ve disfonksiyon erkekleri klinikte daha görünür kılıyor." },
        { title: "Çocukluk maruziyeti", body: "Plan International 2024: 8–12 yaş çocukların %30'u son 12 ayda 'kazara' pornografik içerikle karşılaştı. Aile içi konuşmaların yarısı yapılmıyor." },
        { title: "Türkiye notu", body: "BTK 2024 raporu: yetişkin internet trafiğinde pornografi sitelerinin payı %12. Erişim engellerine rağmen VPN ile devam." },
      ]}
      notesIntro="Pornografi tüketimi, internetin yapısal varsayılanı haline geldi. Kötü alışkanlıklar atlasında ölçümü en zor olanı — gizlilik, stigma ve yasal kısıtlar nedeniyle gerçek rakamlar büyük olasılıkla bildirilenden yüksek."
      prev={{ href: "/alisveris", label: "Alışveriş" }}
      next={{ href: "/seker", label: "Şeker" }}
      en={{
        edition: "№ 20 · Pornography",
        title: (
          <>
            <span className="roman">First exposure:</span>
            on average <span className="acc">age 11.</span>
          </>
        ),
        lede:
          "Estimated global clinical addiction is around 100 million — under the WHO ICD-11 'Compulsive Sexual Behaviour Disorder' diagnosis. Regional adult prevalence: Asia 19%, Europe 11%, North America 7%, Australia 5%. The global average age of first exposure is 11.",
        keyStat: {
          label: "Regional adult prevalence",
          value: "19%",
          where: "Asia",
          blurb: "Adult share meeting addiction criteria. An estimated 100 million clinical cases worldwide.",
        },
        chartTitle: "Adult prevalence, by region and country.",
        chartMeta: "Adults · %",
        callout: {
          label: "First exposure",
          quote:
            "Global average age 11. In the U.S., 93% of male teens and 62% of female teens were exposed before age 18. Instant tap-access has been standard since 2010.",
        },
        notes: [
          { title: "Content-filter inadequacy", body: "Age-verification laws (UK, Texas) work, but VPNs and social media keep the threat steady. Short-video apps remain a grey area." },
          { title: "Gender gap", body: "Estimated 4× more prevalent in men. Co-occurring anxiety and dysfunction make men more clinically visible." },
          { title: "Childhood exposure", body: "Plan International 2024: 30% of children aged 8–12 'accidentally' encountered pornographic content in the past 12 months. Half of household conversations never happen." },
          { title: "Türkiye note", body: "BTK 2024 report: pornographic sites account for 12% of adult internet traffic. Despite access blocks, use continues via VPN." },
        ],
        notesIntro:
          "Pornography consumption has become the structural default of the internet. The hardest category in the bad-habits atlas to measure — privacy, stigma, and legal constraints make the real numbers likely higher than reported.",
        prev: { href: "/alisveris", label: "Shopping" },
        next: { href: "/seker", label: "Sugar" },
      }}
    />
  );
}
