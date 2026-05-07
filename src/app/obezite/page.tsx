import CategoryDetail from "@/components/CategoryDetail";
import obesityData from "@/data/obesity.json";
import type { ObesityEntry } from "@/types";

export const metadata = { title: "Obezite · BadHabits.world" };

export default function Page() {
  const data = (obesityData as ObesityEntry[])
    .filter((e) => e.obesityRate !== null)
    .sort((a, b) => (b.obesityRate ?? 0) - (a.obesityRate ?? 0));

  const top = data[0];

  return (
    <CategoryDetail
      edition="№ 07 · Obezite"
      title={
        <>
          <span className="roman">Otuz yılda</span>
          iki <span className="acc">kata.</span>
        </>
      }
      lede="DSÖ 2025: dünya genelinde 500 milyondan fazla obez yetişkin. ABD'de yetişkinlerin %41'i obez; tahminler 2035'te küresel yetişkinlerin %54'ünün yüksek BMI'da olacağına işaret ediyor. Fast food yoğunluğu ile obezite arasındaki bağ ülkelerin yarısında %20–129 arası bir risk artışı yaratıyor."
      accent="obesity"
      keyStat={{
        label: "En yüksek yetişkin obezite oranı",
        value: `%${top.obesityRate}`,
        where: top.country,
        blurb: top.note,
      }}
      chartTitle="Yetişkin obezite oranı."
      chartMeta="Yetişkin · %"
      bars={data.map((e) => ({
        country: e.country,
        countryCode: e.countryCode,
        value: e.obesityRate ?? 0,
        display: `%${e.obesityRate}`,
        displayEn: `${e.obesityRate}%`,
      }))}
      callout={{
        label: "2035 projeksiyonu",
        quote:
          "Eğilim aynı kalırsa 2035'te dünya yetişkinlerinin %54'ü yüksek BMI sınırının üzerinde olacak. Çocuk obezitesi en hızlı artan kategori — 2020'den bu yana %40+ büyüme.",
        dark: true,
      }}
      notes={[
        {
          title: "Beslenme dönüşümü",
          body:
            "Hazır gıda ve şekerli içecek erişiminin demokratikleşmesi son 30 yılın asıl hikâyesi. Ucuz kalori bol, beslenme yoğun gıda pahalı.",
        },
        {
          title: "Fast food bağlantısı",
          body:
            "JAMA 2024 meta-analizi: bir bölgede fast food zincir yoğunluğu yüksekse, yetişkin obezite riski %20 ile %129 arasında artıyor.",
        },
        {
          title: "Diyabet yan etkisi",
          body:
            "Tip-2 diyabetli erişkin sayısı dünya genelinde 422 milyonu aştı. Tedavi maliyetleri sağlık sistemlerinin en hızlı büyüyen kalemi.",
        },
        {
          title: "Çocukluk patlaması",
          body:
            "5–19 yaş arası obezite, 1990'dan bu yana dört kattan fazla arttı. En hızlı artış orta gelirli ülkelerde.",
        },
      ]}
      notesIntro="Obezite tek bir alışkanlık değil, beslenme—hareket—uyku ekseninin ortaklaşa ürünü. Sağlık sistemlerine yıllık yükü kanser ve sigaranın toplamından fazla."
      prev={{ href: "/benzodiazepin", label: "Benzodiazepin" }}
      next={{ href: "/sosyal-medya", label: "Sosyal medya" }}
      en={{
        edition: "№ 07 · Obesity",
        title: (
          <>
            <span className="roman">Doubled</span>
            in <span className="acc">thirty</span> years.
          </>
        ),
        lede:
          "WHO 2025: more than 500 million obese adults worldwide. 41% of U.S. adults are obese; projections point to 54% of global adults sitting in the high-BMI band by 2035. The link between fast-food density and obesity raises adult risk by 20–129% in half of all countries.",
        keyStat: {
          label: "Highest adult obesity rate",
          value: `${top.obesityRate}%`,
          where: top.country,
          blurb: top.note,
        },
        chartTitle: "Adult obesity rate.",
        chartMeta: "Adults · %",
        callout: {
          label: "2035 projection",
          quote:
            "On current trends, 54% of the world's adults will be above the high-BMI threshold by 2035. Childhood obesity is the fastest-growing category — over 40% growth since 2020.",
          dark: true,
        },
        notes: [
          { title: "Nutrition transition", body: "The democratization of access to processed food and sugary drinks is the real story of the past 30 years. Cheap calories abundant; nutrient-dense food expensive." },
          { title: "Fast-food link", body: "JAMA 2024 meta-analysis: in regions with high fast-food chain density, adult obesity risk rises by 20% to 129%." },
          { title: "Diabetes spillover", body: "Type-2 diabetes in adults now exceeds 422 million worldwide. Treatment costs are the fastest-growing line item in health systems." },
          { title: "Childhood surge", body: "Obesity in ages 5–19 has more than quadrupled since 1990. The fastest growth is in middle-income countries." },
        ],
        notesIntro:
          "Obesity is not a single habit but the joint product of the nutrition–movement–sleep axis. Its annual cost to health systems exceeds the combined burden of cancer and smoking.",
        prev: { href: "/benzodiazepin", label: "Benzodiazepines" },
        next: { href: "/sosyal-medya", label: "Social Media" },
      }}
    />
  );
}
