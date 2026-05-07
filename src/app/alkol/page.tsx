import CategoryDetail from "@/components/CategoryDetail";
import alcoholData from "@/data/alcohol.json";
import type { AlcoholEntry } from "@/types";

export const metadata = { title: "Alkol · BadHabits.world" };

export default function Page() {
  const data = (alcoholData as AlcoholEntry[])
    .filter((e) => e.litersPerCapita !== null)
    .sort((a, b) => (b.litersPerCapita ?? 0) - (a.litersPerCapita ?? 0));

  const top = data[0];

  return (
    <CategoryDetail
      edition="№ 03 · Alkol"
      title={
        <>
          <span className="roman">Litre,</span>
          litre, <span className="acc">litre.</span>
        </>
      }
      lede="DSÖ bölge raporuna göre yetişkin başına yıllık tüketim Avrupa'da 9,2 L, Amerika'da 7,5 L, dünya ortalamasında 5,5 L. Doğu Avrupa zirvede; Akdeniz ve İslam coğrafyaları ölçeğin diğer ucunda."
      accent="alcohol"
      keyStat={{
        label: "En yüksek kişi başı tüketim",
        value: String(top.litersPerCapita).replace(".", ","),
        unit: "L · yıl",
        where: top.country,
        blurb: top.note,
      }}
      chartTitle="Yıllık · kişi başı saf alkol."
      chartMeta="Yetişkin · litre"
      bars={data.map((e) => ({
        country: e.country,
        countryCode: e.countryCode,
        value: e.litersPerCapita ?? 0,
        display: `${String(e.litersPerCapita).replace(".", ",")} L`,
        displayEn: `${String(e.litersPerCapita)} L`,
      }))}
      callout={{
        label: "Bölge ortalamaları",
        quote:
          "Avrupa 9,2 L · Amerika 7,5 L · Batı Pasifik 5,9 L · G. Doğu Asya 4,5 L · Afrika 3,9 L · D. Akdeniz 0,5 L. Bir kıta diğerinin 18 katı içiyor.",
      }}
      notes={[
        {
          title: "Doğu Avrupa zirvesi",
          body:
            "Litvanya, Çekya, Letonya, Bulgaristan ve Rusya yıllık 11–13 L bandında. Yüksek alkol vergileri ve sınır ticareti bu rakamları kaydırıyor.",
        },
        {
          title: "Türkiye istisnası",
          body:
            "OECD'de en az içen üç ülkeden biri (1,5 L civarı). İslam geleneği ve yüksek ÖTV birlikte etkili.",
        },
        {
          title: "Akut yük",
          body:
            "DSÖ 2024: yıllık 2,6 milyon ölüm alkol kaynaklı. Sebep dağılımı: trafik, kanser, karaciğer hastalığı, intihar.",
        },
        {
          title: "Pandemi sonrası",
          body:
            "ABD'de pandemi yıllarında alkol kaynaklı ölümler %25 arttı; en büyük artış 35–44 yaş grubunda yaşandı.",
        },
      ]}
      notesIntro="Alkol, kötü alışkanlıklar arasında en eşitsiz coğrafi dağılıma sahip olanı: bir kıtanın ortalaması başka birinin yirmi katı. Bireysel risk de aynı şekilde polarize."
      prev={{ href: "/e-sigara", label: "E-sigara" }}
      next={{ href: "/uyusturucu", label: "Uyuşturucu" }}
      en={{
        edition: "№ 03 · Alcohol",
        title: (
          <>
            <span className="roman">Litre,</span>
            litre, <span className="acc">litre.</span>
          </>
        ),
        lede:
          "WHO regional report: annual consumption per adult is 9.2 L in Europe, 7.5 L in the Americas, 5.5 L worldwide. Eastern Europe leads; the Mediterranean and Muslim-majority regions sit at the other end of the scale.",
        keyStat: {
          label: "Highest per-capita consumption",
          value: String(top.litersPerCapita),
          unit: "L · year",
          where: top.country,
          blurb: top.note,
        },
        chartTitle: "Annual · pure alcohol per capita.",
        chartMeta: "Adults · litres",
        callout: {
          label: "Regional averages",
          quote:
            "Europe 9.2 L · Americas 7.5 L · Western Pacific 5.9 L · S.E. Asia 4.5 L · Africa 3.9 L · E. Mediterranean 0.5 L. One continent drinks 18× another.",
        },
        notes: [
          { title: "Eastern European peak", body: "Lithuania, Czechia, Latvia, Bulgaria, and Russia sit in the 11–13 L band annually. High alcohol taxes and cross-border trade shift these numbers." },
          { title: "Türkiye outlier", body: "Among the three lowest-consuming OECD countries (around 1.5 L). Islamic tradition and high excise duty are jointly at work." },
          { title: "Acute burden", body: "WHO 2024: 2.6 million annual deaths are alcohol-related. The cause mix: traffic, cancer, liver disease, suicide." },
          { title: "Post-pandemic", body: "Alcohol-related deaths in the U.S. rose 25% during the pandemic years; the largest jump was in the 35–44 age group." },
        ],
        notesIntro:
          "Alcohol has the most uneven geographic distribution among the bad habits: one continent's average is twenty times another's. Individual risk is just as polarized.",
        prev: { href: "/e-sigara", label: "Vaping" },
        next: { href: "/uyusturucu", label: "Illicit Drugs" },
      }}
    />
  );
}
