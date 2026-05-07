import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Vücut dismorfisi · BadHabits.world" };

const bars = [
  { country: "Brezilya",     countryCode: "BR", value: 24.0, display: "%24,0", displayEn: "24.0%" },
  { country: "G. Kore",      countryCode: "KR", value: 22.5, display: "%22,5", displayEn: "22.5%" },
  { country: "ABD",          countryCode: "US", value: 18.6, display: "%18,6", displayEn: "18.6%" },
  { country: "İran",         countryCode: "IR", value: 15.0, display: "%15,0", displayEn: "15.0%" },
  { country: "Japonya",      countryCode: "JP", value: 12.0, display: "%12,0", displayEn: "12.0%" },
  { country: "İtalya",       countryCode: "IT", value: 10.5, display: "%10,5", displayEn: "10.5%" },
  { country: "Türkiye",      countryCode: "TR", value:  9.0, display: "%9,0",  displayEn: "9.0%"  },
  { country: "İngiltere",    countryCode: "GB", value:  7.4, display: "%7,4",  displayEn: "7.4%"  },
  { country: "Almanya",      countryCode: "DE", value:  6.2, display: "%6,2",  displayEn: "6.2%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 13 · Vücut dismorfisi"
      title={
        <>
          <span className="roman">Plastik cerrahide</span>
          <span className="acc">15 katı</span> yaygın.
        </>
      }
      lede="Beden dismorfik bozukluğu (BDD) plastik cerrahi hastalarında %18,6 — genel nüfus oranının on beş katı. Hastaların %22,2'si bağımlılık kriterlerini karşılıyor. Kozmetik cerrahinin %90'ı kadın; bronzlaşma popülasyonunun %20'si UV bağımlılığı belirtileri gösteriyor."
      accent="bdd"
      keyStat={{
        label: "Plastik cerrahi hastalarında BDD",
        value: "%18,6",
        where: "Birleşik Devletler",
        blurb: "Genel nüfus oranı %1,2; cerrahi başvurusu yapanlarda 15 katı — birden fazla operasyon riski.",
      }}
      chartTitle="Plastik cerrahi hastalarında BDD prevalansı."
      chartMeta="Hasta · %"
      bars={bars}
      callout={{
        label: "Tek satırda hatırla",
        quote:
          "Bronzlaşmanın %20'si bağımlılık belirtisi: UV → β-endorfin → dopamin döngüsü. Cilt kanseri riski 2,5 kata çıkıyor.",
      }}
      notes={[
        { title: "Filtre etkisi", body: "Kısa video uygulamalarındaki yüz filtreleri 'Snapchat dismorfisi' adıyla yeni bir alt-tanı oluşturdu. 18–25 yaş kadınlarda kozmetik cerrahi başvurusu %150 arttı." },
        { title: "Erkek tarafı", body: "Erkeklerde 'kas dismorfisi' (bigorexia) artıyor. Steroid kullanımı ve aşırı egzersiz bu kategorinin görünmez yüzü." },
        { title: "G. Kore yüz cerrahisi", body: "Lisans töreni hediyesi olarak göz kapağı operasyonu sıradan; 18–25 yaş kadınların %30'u en az bir kozmetik müdahale geçirdi." },
        { title: "Türkiye notu", body: "Türk Plastik Cerrahi Derneği 2024: estetik cerrahi hasta sayısı son 5 yılda 3 katına çıktı. Tıp turizmi etkisi büyük." },
      ]}
      notesIntro="Vücut dismorfisi, sosyal medyanın görünür olmayan zarar kategorisi. Kozmetik prosedürlerin demokratikleşmesi tedavi olmadan ulaşılan kapı."
      prev={{ href: "/yeme-bozuklugu", label: "Yeme bozukluğu" }}
      next={{ href: "/aile-ici-siddet", label: "Aile içi şiddet" }}
      en={{
        edition: "№ 13 · Body Dysmorphia",
        title: (
          <>
            <span className="roman">In cosmetic surgery,</span>
            <span className="acc">15×</span> more common.
          </>
        ),
        lede:
          "Body Dysmorphic Disorder (BDD) sits at 18.6% in cosmetic surgery patients — fifteen times the general-population rate. 22.2% of patients meet addiction criteria. 90% of cosmetic surgery patients are women; 20% of the tanning population shows UV-addiction signs.",
        keyStat: {
          label: "BDD in cosmetic surgery patients",
          value: "18.6%",
          where: "United States",
          blurb: "General population rate is 1.2%; in surgical applicants, 15× higher — with risk of multiple operations.",
        },
        chartTitle: "BDD prevalence in cosmetic surgery patients.",
        chartMeta: "Patients · %",
        callout: {
          label: "Remember in one line",
          quote:
            "20% of tanning is an addiction sign: UV → β-endorphin → dopamine loop. Skin-cancer risk rises 2.5×.",
        },
        notes: [
          { title: "Filter effect", body: "Face filters in short-video apps created a new sub-diagnosis called 'Snapchat dysmorphia'. Cosmetic surgery applications among women aged 18–25 rose 150%." },
          { title: "Male side", body: "Muscle dysmorphia (bigorexia) is rising in men. Steroid use and excessive exercise are the invisible side of this category." },
          { title: "S. Korea facial surgery", body: "Eyelid surgery as a graduation gift is routine; 30% of women aged 18–25 have had at least one cosmetic procedure." },
          { title: "Türkiye note", body: "Turkish Plastic Surgery Association 2024: cosmetic surgery patients tripled in 5 years. Medical tourism has a large effect." },
        ],
        notesIntro:
          "Body dysmorphia is the invisible-harm category of social media. The democratization of cosmetic procedures opens a door that requires no diagnosis to walk through.",
        prev: { href: "/yeme-bozuklugu", label: "Eating Disorders" },
        next: { href: "/aile-ici-siddet", label: "Domestic Violence" },
      }}
    />
  );
}
