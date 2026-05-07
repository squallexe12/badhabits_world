import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Yeme bozukluğu · BadHabits.world" };

const bars = [
  { country: "ABD",        countryCode: "US", value: 30.0, display: "30 milyon",   displayEn: "30 million"   },
  { country: "Hindistan",  countryCode: "IN", value: 20.0, display: "20 milyon",   displayEn: "20 million"   },
  { country: "Çin",        countryCode: "CN", value:  9.0, display: "9 milyon",    displayEn: "9 million"    },
  { country: "Brezilya",   countryCode: "BR", value:  4.5, display: "4,5 milyon",  displayEn: "4.5 million"  },
  { country: "Japonya",    countryCode: "JP", value:  2.0, display: "2 milyon",    displayEn: "2 million"    },
  { country: "İngiltere",  countryCode: "GB", value:  1.25,display: "1,25 milyon", displayEn: "1.25 million" },
  { country: "Almanya",    countryCode: "DE", value:  1.10,display: "1,1 milyon",  displayEn: "1.1 million"  },
  { country: "Türkiye",    countryCode: "TR", value:  0.9, display: "900 bin",     displayEn: "900K"         },
  { country: "Kanada",     countryCode: "CA", value:  0.8, display: "800 bin",     displayEn: "800K"         },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 12 · Yeme bozukluğu"
      title={
        <>
          <span className="roman">En ölümcül</span>
          psikiyatrik <span className="acc">tanı.</span>
        </>
      }
      lede="ABD'de 30 milyon, İngiltere'de 1,25 milyon, Kanada'da 800 bin yetişkin tanı kriterlerini karşılıyor. Anoreksiya, mortalite oranı 5,31 ile psikiyatrik bozukluklar arasında ölümün en yüksek olduğu kategori. Hastaların %95'i 12–25 yaş arası kadın."
      accent="eating"
      keyStat={{
        label: "Yetişkin tanı sayısı",
        value: "30 milyon",
        where: "Birleşik Devletler",
        blurb: "Anoreksiya, bulimia ve binge eating birlikte. Tedavi alanların oranı %20'nin altında.",
      }}
      chartTitle="Yetişkin tanı sayısı (milyon kişi)."
      chartMeta="Klinik tanı · milyon"
      bars={bars}
      callout={{
        label: "Mortalite",
        quote:
          "Anoreksiya nervoza için standart mortalite oranı 5,31 — şizofreni, bipolar ve depresyondan daha öldürücü. Hastaların %20'si 20 yıl içinde yaşamını kaybediyor.",
        dark: true,
      }}
      notes={[
        { title: "Sosyal medya etkisi", body: "Kısa video uygulamalarında 'thinspo' ve 'cleanse' içerikleri 14–17 yaş kızlarda risk faktörü. Maruziyet süresinin %25 üzerinde olması, semptom skorunu iki katına çıkarıyor." },
        { title: "Erkek görünmezliği", body: "Hastaların %5–25'i erkek; ancak tanı oranı çok daha düşük. Toplumsal stigma tedaviye erişimi kısıtlıyor." },
        { title: "Binge eating gerçeği", body: "ABD'de en yaygın yeme bozukluğu binge eating. Obezite ile karıştırılıyor, ancak ayrı bir psikiyatrik tanı." },
        { title: "Türkiye notu", body: "Türk Yeme Bozuklukları Derneği 2023: tahminî 900 bin tanı, fakat tedavi sistemine kayıtlı sadece 28 bin hasta." },
      ]}
      notesIntro="Yeme bozuklukları, popüler kültürde 'görsel' bir hastalık olarak resmedilse de psikiyatrik bir tanı. Mortalite klasik depresyondan yüksek; tedavi erişimi düşük."
      prev={{ href: "/oyun", label: "Oyun" }}
      next={{ href: "/uyku", label: "Uyku" }}
      en={{
        edition: "№ 12 · Eating Disorders",
        title: (
          <>
            <span className="roman">The deadliest</span>
            psychiatric <span className="acc">diagnosis.</span>
          </>
        ),
        lede:
          "30 million adults in the U.S., 1.25 million in the U.K., 800,000 in Canada meet diagnostic criteria. Anorexia, with a mortality ratio of 5.31, has the highest death rate among psychiatric disorders. 95% of patients are women aged 12–25.",
        keyStat: {
          label: "Adult diagnoses",
          value: "30 million",
          where: "United States",
          blurb: "Anorexia, bulimia, and binge eating combined. Fewer than 20% of those affected receive treatment.",
        },
        chartTitle: "Adult diagnoses (millions of people).",
        chartMeta: "Clinical diagnoses · million",
        callout: {
          label: "Mortality",
          quote:
            "The standardized mortality ratio for anorexia nervosa is 5.31 — deadlier than schizophrenia, bipolar, and depression. 20% of patients die within 20 years.",
          dark: true,
        },
        notes: [
          { title: "Social media effect", body: "'Thinspo' and 'cleanse' content on short-video apps is a risk factor in girls aged 14–17. Exposure above 25% of viewing time doubles symptom scores." },
          { title: "Male invisibility", body: "5–25% of patients are male; their diagnosis rate is far lower. Social stigma constrains access to treatment." },
          { title: "Binge-eating reality", body: "Binge eating is the most common eating disorder in the U.S. Often confused with obesity, but it is a distinct psychiatric diagnosis." },
          { title: "Türkiye note", body: "Turkish Eating Disorders Association 2023: an estimated 900,000 diagnoses, but only 28,000 patients on the treatment system." },
        ],
        notesIntro:
          "Eating disorders are framed in popular culture as a 'visual' illness, but they are a psychiatric diagnosis. Mortality is higher than classic depression; treatment access is low.",
        prev: { href: "/oyun", label: "Gaming" },
        next: { href: "/uyku", label: "Sleep" },
      }}
    />
  );
}
