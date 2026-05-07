import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Alışveriş · BadHabits.world" };

const bars = [
  { country: "Almanya",      countryCode: "DE", value: 8.5, display: "%8,5", displayEn: "8.5%" },
  { country: "ABD",          countryCode: "US", value: 7.0, display: "%7,0", displayEn: "7.0%" },
  { country: "İngiltere",    countryCode: "GB", value: 6.8, display: "%6,8", displayEn: "6.8%" },
  { country: "Çin",          countryCode: "CN", value: 6.5, display: "%6,5", displayEn: "6.5%" },
  { country: "G. Kore",      countryCode: "KR", value: 6.2, display: "%6,2", displayEn: "6.2%" },
  { country: "Japonya",      countryCode: "JP", value: 5.8, display: "%5,8", displayEn: "5.8%" },
  { country: "Türkiye",      countryCode: "TR", value: 5.4, display: "%5,4", displayEn: "5.4%" },
  { country: "Brezilya",     countryCode: "BR", value: 5.1, display: "%5,1", displayEn: "5.1%" },
  { country: "İsveç",        countryCode: "SE", value: 5.0, display: "%5,0", displayEn: "5.0%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 19 · Alışveriş"
      title={
        <>
          <span className="roman">Vakaların</span>
          <span className="acc">%80'i</span> kadın.
        </>
      }
      lede="Compulsive Buying Disorder yaygınlığı küresel %5–8. ABD'de hane ortalama tüketici borcu 104.000 dolar; hanelerin %77'si en az bir tür borçla yaşıyor. Vakaların yaklaşık %80'i kadın; mobil ödeme ve 'tek tıkla satın al' özelliği eşik atlama hızını artırdı."
      accent="shopping"
      keyStat={{
        label: "Klinik yaygınlık",
        value: "%8,5",
        where: "Almanya",
        blurb: "Tüketim merkezli ekonomilerde Compulsive Buying Disorder oranı genel nüfus ortalamasının üstünde.",
      }}
      chartTitle="Compulsive Buying Disorder klinik yaygınlığı."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "ABD borç sarmalı",
        quote:
          "Hane başı ortalama tüketici borcu 104.000 dolar. Hanelerin %77'si kredi kartı, taksit veya kişisel borç taşıyor. Kompulsif satın alma vakalarında oran %95'in üzerinde.",
        dark: true,
      }}
      notes={[
        { title: "Cinsiyet ekseni", body: "Kompulsif satın alma vakalarının %80'i kadın. Reklamcılık ve sosyal medya görselliği hedef kitlenin asimetrik olmasını şekillendiriyor." },
        { title: "Buy Now Pay Later", body: "BNPL hizmetleri (Klarna, Afterpay) 18–25 yaş kullanıcılarda kompulsif harcama riskini iki katına çıkardı. Dürtü kontrolü ve görüş netliği düştü." },
        { title: "Çevrim içi geçiş", body: "Tek tıkla satın al, hatırlatma bildirimleri ve canlı yayın alışverişi (China livestream commerce) kategoride patlama yarattı." },
        { title: "Türkiye notu", body: "BDDK 2024: bireysel kredi kartı borcu 1,8 trilyon TL. Tüketici şikâyet hatlarına en çok ulaşan kategori 'plansız harcama sonrası iade' başvuruları." },
      ]}
      notesIntro="Alışveriş bağımlılığı, kötü alışkanlıklar atlasında en az tıbbi olarak ele alınanı. Klinik tanı kriterleri yeni şekilleniyor; fakat finansal yükü diğer kategorilerden hızlı büyüyor."
      prev={{ href: "/kafein", label: "Kafein" }}
      next={{ href: "/pornografi", label: "Pornografi" }}
      en={{
        edition: "№ 19 · Shopping",
        title: (
          <>
            <span className="roman">Of cases,</span>
            <span className="acc">80%</span> are women.
          </>
        ),
        lede:
          "Compulsive Buying Disorder prevalence runs 5–8% globally. The U.S. average household consumer debt is $104,000; 77% of households carry at least one form of debt. Roughly 80% of cases are women; mobile payments and one-click checkout have accelerated threshold-crossing.",
        keyStat: {
          label: "Clinical prevalence",
          value: "8.5%",
          where: "Germany",
          blurb: "In consumption-driven economies, Compulsive Buying Disorder runs above the general-population average.",
        },
        chartTitle: "Compulsive Buying Disorder clinical prevalence.",
        chartMeta: "Adults · %",
        callout: {
          label: "U.S. debt spiral",
          quote:
            "Average household consumer debt: $104,000. 77% of households carry credit-card, installment, or personal debt. Among compulsive buyers the rate is over 95%.",
          dark: true,
        },
        notes: [
          { title: "Gender axis", body: "80% of compulsive buying cases are women. Advertising and the visual culture of social media shape the asymmetry of the target audience." },
          { title: "Buy Now Pay Later", body: "BNPL services (Klarna, Afterpay) have doubled compulsive-spending risk among 18–25 year-olds. Impulse control and judgment clarity drop." },
          { title: "Online shift", body: "One-click checkout, reminder notifications, and live-stream commerce (China livestream commerce) created an explosion in this category." },
          { title: "Türkiye note", body: "BDDK 2024: individual credit-card debt at 1.8 trillion TRY. The most-reported category to consumer-complaint hotlines is 'returns after unplanned spending'." },
        ],
        notesIntro:
          "Shopping addiction is the least medicalized category in the bad-habits atlas. Clinical diagnostic criteria are still forming; the financial burden, however, grows faster than that of the other categories.",
        prev: { href: "/kafein", label: "Caffeine" },
        next: { href: "/pornografi", label: "Pornography" },
      }}
    />
  );
}
