import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Uyuşturucu · BadHabits.world" };

const bars = [
  { country: "Ekvador",      countryCode: "EC", value: 51.2, display: "%51,2", displayEn: "51.2%" },
  { country: "Şili",         countryCode: "CL", value: 38.0, display: "%38,0", displayEn: "38.0%" },
  { country: "Arjantin",     countryCode: "AR", value: 30.4, display: "%30,4", displayEn: "30.4%" },
  { country: "ABD",          countryCode: "US", value: 18.0, display: "%18,0", displayEn: "18.0%" },
  { country: "Kanada",       countryCode: "CA", value: 15.3, display: "%15,3", displayEn: "15.3%" },
  { country: "İspanya",      countryCode: "ES", value: 11.0, display: "%11,0", displayEn: "11.0%" },
  { country: "Almanya",      countryCode: "DE", value:  7.0, display: "%7,0",  displayEn: "7.0%"  },
  { country: "İskoçya",      countryCode: "GB", value:  5.4, display: "%5,4",  displayEn: "5.4%"  },
  { country: "Türkiye",      countryCode: "TR", value:  2.7, display: "%2,7",  displayEn: "2.7%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 04 · Uyuşturucu"
      title={
        <>
          <span className="roman">ABD'de günde</span>
          <span className="acc">224</span> opioid ölümü.
        </>
      }
      lede="Yaşam boyu en az bir kez yasadışı uyuşturucu kullanımı oranı. Güney Amerika'da esrar normalleşmiş; Kuzey Amerika'da fentanil krizi sürüyor. ABD'de 2002–2022 arasında doz aşımı ölümleri %885,8 arttı; %69,3'ü fentanil kaynaklı."
      accent="drugs"
      keyStat={{
        label: "Yaşam boyu kullanım",
        value: "%51,2",
        where: "Ekvador",
        blurb: "Esrar kullanımı yetişkinlerin yarısından fazlasında. Bölge ortalamasının üstünde, küresel ortalamanın iki katı.",
      }}
      chartTitle="Yaşam boyu yasadışı uyuşturucu kullanımı."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "Fentanil çağı",
        quote:
          "ABD'de günde 224 opioid kaynaklı ölüm. Doz aşımı ölümlerinin %69,3'ü sentetik opioidlerden — büyük çoğunluğu fentanil.",
        dark: true,
      }}
      notes={[
        { title: "Avrupa'nın iki ucu", body: "İskoçya 100 binde 16,2 ölüm — AB ortalamasının altı katı. Estonya benzodiazepin-opioid karışımıyla zirvede." },
        { title: "MENA Captagon", body: "Suudi Arabistan ve Körfez'de gençlerin %40'a varan kısmı amfetamin türevi Captagon ile karşı karşıya. İhracat merkezi: Suriye." },
        { title: "Afrika yükü", body: "BM 2024: kıtada 15,3 milyon yetişkin uyuşturucu kullanıcısı. Tedavi kapasitesi nüfusun %1'inden az." },
        { title: "Nitazene tehdidi", body: "İsveç ve Norveç'te ortaya çıkan yeni sentetik opioidler fentanilden 10 kat daha güçlü." },
      ]}
      notesIntro="Uyuşturucu kullanımı tek bir kategori değil — fentanil, esrar, amfetamin, sentetik opioid kuşakları farklı coğrafyalarda farklı dönemlerde patlıyor."
      prev={{ href: "/alkol", label: "Alkol" }}
      next={{ href: "/benzodiazepin", label: "Benzodiazepin" }}
      en={{
        edition: "№ 04 · Illicit Drugs",
        title: (
          <>
            <span className="roman">In the U.S., daily</span>
            <span className="acc">224</span> opioid deaths.
          </>
        ),
        lede:
          "The rate of having used illicit drugs at least once in life. Cannabis is normalized in South America; in North America the fentanyl crisis continues. U.S. overdose deaths rose 885.8% between 2002 and 2022; 69.3% involve fentanyl.",
        keyStat: {
          label: "Lifetime use",
          value: "51.2%",
          where: "Ecuador",
          blurb: "Cannabis use covers more than half the adult population. Above the regional average and twice the global mean.",
        },
        chartTitle: "Lifetime illicit drug use.",
        chartMeta: "Adults · %",
        callout: {
          label: "The fentanyl era",
          quote:
            "224 opioid-related deaths a day in the U.S. 69.3% of overdose deaths involve synthetic opioids — the vast majority fentanyl.",
          dark: true,
        },
        notes: [
          { title: "Two ends of Europe", body: "Scotland: 16.2 deaths per 100,000 — six times the EU average. Estonia leads with a benzo-opioid mix." },
          { title: "MENA Captagon", body: "Up to 40% of youth in Saudi Arabia and the Gulf are exposed to the amphetamine derivative Captagon. Production hub: Syria." },
          { title: "Africa burden", body: "UN 2024: 15.3 million adult drug users on the continent. Treatment capacity covers less than 1% of the population." },
          { title: "Nitazene threat", body: "New synthetic opioids emerging in Sweden and Norway are 10× more potent than fentanyl." },
        ],
        notesIntro:
          "Drug use is not a single category — fentanyl, cannabis, amphetamines, and synthetic opioids each detonate in different geographies during different periods.",
        prev: { href: "/alkol", label: "Alcohol" },
        next: { href: "/benzodiazepin", label: "Benzodiazepines" },
      }}
    />
  );
}
