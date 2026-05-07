import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Benzodiazepin · BadHabits.world" };

const bars = [
  { country: "Mısır (ergen)",   countryCode: "EG", value: 5.1, display: "%5,1", displayEn: "5.1%" },
  { country: "ABD (yaşam boyu)",countryCode: "US", value: 2.1, display: "%2,1", displayEn: "2.1%" },
  { country: "Brezilya",        countryCode: "BR", value: 1.8, display: "%1,8", displayEn: "1.8%" },
  { country: "Avustralya",      countryCode: "AU", value: 1.5, display: "%1,5", displayEn: "1.5%" },
  { country: "Finlandiya",      countryCode: "FI", value: 1.4, display: "%1,4", displayEn: "1.4%" },
  { country: "İspanya",         countryCode: "ES", value: 1.2, display: "%1,2", displayEn: "1.2%" },
  { country: "Almanya",         countryCode: "DE", value: 0.9, display: "%0,9", displayEn: "0.9%" },
  { country: "Türkiye",         countryCode: "TR", value: 0.6, display: "%0,6", displayEn: "0.6%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 05 · Benzodiazepin"
      title={
        <>
          <span className="roman">Reçeteyle</span>
          <span className="acc">10.964</span> doz aşımı ölümü.
        </>
      }
      lede="ABD'de 30,6 milyon kullanıcı; 5,3 milyonu kötüye kullanıcı sınıfında. 2022 yılında 10.964 doz aşımı ölümü doğrudan benzodiazepin kaynaklı. Kadınlar erkeklere göre iki kat fazla kullanıyor; en yüksek kötüye kullanım 18–35 yaş grubunda."
      accent="benzo"
      keyStat={{
        label: "ABD yıllık ölüm",
        value: "10.964",
        unit: "kişi",
        where: "Birleşik Devletler · 2022",
        blurb: "Opioid + benzo ko-presetreksiyonu doz aşımı riskini 4 kat artırıyor.",
      }}
      chartTitle="Genel nüfus kötüye kullanım yaygınlığı."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "Yaşlılarda kronikleşme",
        quote:
          "Finlandiya'da 75+ yaş hastaların üçte biri kronik benzodiazepin kullanıcısı. Geriatrik düşme ve demans riski 2 kat.",
      }}
      notes={[
        { title: "Cinsiyet farkı", body: "Kadınlar reçete ve kötüye kullanım istatistiklerinde erkeklerin iki katı. Anksiyete tanısı ve toplumsal cinsiyet baskısının kesişimi." },
        { title: "Genç dalgası", body: "ABD 18–35 yaş grubu en yüksek kötüye kullanım oranına sahip. Sosyal medya kanallarından 'rahatlama' söylemiyle popülerleşti." },
        { title: "Ergen istisnası", body: "Mısır'da liseli ergenlerin %5,1'i benzo kullanıcısı — ülke ortalamasının çok üstünde." },
        { title: "Kombinasyon riski", body: "Opioid ile birlikte kullanım, doz aşımı ölümlerinin yarısını oluşturuyor. Tek başına alındığında ölüm nadir." },
      ]}
      notesIntro="Reçeteli olmasına rağmen benzodiazepin kötüye kullanımı klasik uyuşturuculardan daha sessiz ilerliyor. Tedavi kapasitesi neredeyse yok."
      prev={{ href: "/uyusturucu", label: "Uyuşturucu" }}
      next={{ href: "/obezite", label: "Obezite" }}
      en={{
        edition: "№ 05 · Benzodiazepines",
        title: (
          <>
            <span className="roman">By prescription:</span>
            <span className="acc">10,964</span> overdose deaths.
          </>
        ),
        lede:
          "30.6 million users in the U.S.; 5.3 million classified as misusers. In 2022, 10,964 overdose deaths were directly benzodiazepine-related. Women use them at twice the rate of men; the highest misuse sits in the 18–35 age group.",
        keyStat: {
          label: "U.S. annual deaths",
          value: "10,964",
          unit: "people",
          where: "United States · 2022",
          blurb: "Co-prescription of opioids and benzos raises overdose risk 4×.",
        },
        chartTitle: "General-population misuse prevalence.",
        chartMeta: "Adults · %",
        callout: {
          label: "Chronic use in older adults",
          quote:
            "In Finland, one in three patients aged 75+ is a chronic benzodiazepine user. The geriatric falls and dementia risk doubles.",
        },
        notes: [
          { title: "Gender gap", body: "Women appear at twice the rate of men in both prescription and misuse statistics. The intersection of anxiety diagnosis and gendered social pressure." },
          { title: "Young wave", body: "The U.S. 18–35 cohort has the highest misuse rate. Popularized through social-media channels under a 'relaxation' framing." },
          { title: "Teen exception", body: "5.1% of high-school teens in Egypt use benzos — far above the country average." },
          { title: "Combination risk", body: "Used together with opioids, benzos drive half of all overdose deaths. Taken alone, fatal outcomes are rare." },
        ],
        notesIntro:
          "Despite being prescribed, benzodiazepine misuse spreads more quietly than classic illicit drugs. Treatment capacity is essentially absent.",
        prev: { href: "/uyusturucu", label: "Illicit Drugs" },
        next: { href: "/obezite", label: "Obesity" },
      }}
    />
  );
}
