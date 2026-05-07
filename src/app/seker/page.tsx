import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Şeker · BadHabits.world" };

const bars = [
  { country: "Hindistan",  countryCode: "IN", value: 28.0, display: "28 mt",   displayEn: "28 Mt"   },
  { country: "AB",         countryCode: "EU", value: 18.5, display: "18,5 mt", displayEn: "18.5 Mt" },
  { country: "Çin",        countryCode: "CN", value: 16.2, display: "16,2 mt", displayEn: "16.2 Mt" },
  { country: "ABD",        countryCode: "US", value: 11.0, display: "11 mt",   displayEn: "11 Mt"   },
  { country: "Brezilya",   countryCode: "BR", value: 10.7, display: "10,7 mt", displayEn: "10.7 Mt" },
  { country: "Rusya",      countryCode: "RU", value:  6.1, display: "6,1 mt",  displayEn: "6.1 Mt"  },
  { country: "Endonezya",  countryCode: "ID", value:  6.0, display: "6,0 mt",  displayEn: "6.0 Mt"  },
  { country: "Meksika",    countryCode: "MX", value:  4.5, display: "4,5 mt",  displayEn: "4.5 Mt"  },
  { country: "Türkiye",    countryCode: "TR", value:  3.0, display: "3,0 mt",  displayEn: "3.0 Mt"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 21 · Şeker"
      title={
        <>
          <span className="roman">Yıllık</span>
          <span className="acc">178,79 mt</span> şeker.
        </>
      }
      lede="Küresel yıllık şeker tüketimi 178,79 milyon metrik ton. En büyük üç tüketici Hindistan, Avrupa Birliği ve Çin. Şeker; diş çürüğü, tip-2 diyabet (422 milyon hasta) ve obeziteye (650 milyon+) doğrudan bağlı. DSÖ önerisi günlük enerji alımının %5'inin altında — gerçek tüketim çoğu ülkede iki katı."
      accent="sugar"
      keyStat={{
        label: "Yıllık tüketim hacmi",
        value: "178,79",
        unit: "milyon ton",
        where: "Dünya geneli",
        blurb: "Hindistan tek başına dünya tüketiminin %16'sını oluşturuyor. AB ikinci, Çin üçüncü.",
      }}
      chartTitle="Ülke/blok yıllık şeker tüketimi."
      chartMeta="Milyon metrik ton · yıl"
      bars={bars}
      callout={{
        label: "DSÖ eşiği",
        quote:
          "Günlük serbest şeker alımı toplam enerjinin %5'inin altında olmalı (≈25 g). Çoğu ülkede ortalama 70 g — üç kat aşım.",
        dark: true,
      }}
      notes={[
        { title: "Şeker ≠ doğal şeker", body: "Ürün etiketinde 'şeker' farklı maddelere işaret edebilir: glukoz, fruktoz, mısır şurubu. Endüstriyel ürünlerde toplamı tek bir kalem olarak görünmüyor." },
        { title: "Tip-2 diyabet", body: "Dünya genelinde 422 milyon yetişkin tanı altında. Pandemi sonrası tanı oranları hızlandı. ABD ve Meksika'da diyabet kaynaklı amputasyon en hızlı büyüyen cerrahi başlık." },
        { title: "Çocuk markaları", body: "AB 2024 düzenlemesi: 12 yaş altına yönelik şekerli ürün reklamı yasak. Türkiye'de benzer kısıtlamalar tartışılıyor, henüz yürürlükte değil." },
        { title: "Türkiye notu", body: "Türkşeker 2024: kişi başı yıllık tüketim 31 kg. AB ortalamasının altında ama günlük alımda gizli şeker (gazlı içecek, hazır gıda) AB ile yakın." },
      ]}
      notesIntro="Şeker, modern beslenmenin kalori yoğun, besin değeri düşük temel taşı. Diğer kötü alışkanlıkların aksine 'isteğe bağlı' değil — gıda zincirinin varsayılanı."
      prev={{ href: "/pornografi", label: "Pornografi" }}
      next={{ href: "/siralama", label: "Sıralama" }}
      en={{
        edition: "№ 21 · Sugar",
        title: (
          <>
            <span className="roman">Annual:</span>
            <span className="acc">178.79 Mt</span> of sugar.
          </>
        ),
        lede:
          "Global annual sugar consumption is 178.79 million metric tons. The three largest consumers are India, the European Union, and China. Sugar is directly tied to dental caries, type-2 diabetes (422 million patients), and obesity (650 million+). The WHO recommends below 5% of daily energy intake — actual consumption is double that in most countries.",
        keyStat: {
          label: "Annual consumption volume",
          value: "178.79",
          unit: "million tons",
          where: "Worldwide",
          blurb: "India alone accounts for 16% of world consumption. The EU is second; China third.",
        },
        chartTitle: "Annual sugar consumption by country/bloc.",
        chartMeta: "Million metric tons · year",
        callout: {
          label: "WHO threshold",
          quote:
            "Daily free-sugar intake should be below 5% of total energy (≈25 g). The average across most countries is 70 g — three times the limit.",
          dark: true,
        },
        notes: [
          { title: "Sugar ≠ natural sugar", body: "On product labels 'sugar' can refer to different substances: glucose, fructose, corn syrup. In industrial products the total does not appear as a single line." },
          { title: "Type-2 diabetes", body: "422 million adults diagnosed worldwide. Diagnosis rates accelerated after the pandemic. In the U.S. and Mexico, diabetes-related amputations are the fastest-growing surgical category." },
          { title: "Children's brands", body: "EU 2024 regulation: advertising of sugary products to children under 12 is banned. Similar restrictions are debated in Türkiye but not yet in force." },
          { title: "Türkiye note", body: "Türkşeker 2024: per-capita annual consumption is 31 kg. Below the EU average, but daily hidden-sugar intake (carbonated drinks, processed food) is close to EU levels." },
        ],
        notesIntro:
          "Sugar is the calorie-dense, low-nutrient cornerstone of modern diets. Unlike the other bad habits, it is not 'optional' — it is the food chain's default.",
        prev: { href: "/pornografi", label: "Pornography" },
        next: { href: "/siralama", label: "Rankings" },
      }}
    />
  );
}
