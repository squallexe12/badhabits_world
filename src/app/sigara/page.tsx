import CategoryDetail from "@/components/CategoryDetail";
import smokingData from "@/data/smoking.json";
import type { SmokingEntry } from "@/types";

export const metadata = { title: "Sigara · BadHabits.world" };

export default function Page() {
  const data = (smokingData as SmokingEntry[])
    .filter((e) => e.rate !== null)
    .sort((a, b) => (b.rate ?? 0) - (a.rate ?? 0));

  const top = data[0];

  return (
    <CategoryDetail
      edition="№ 01 · Sigara"
      title={
        <>
          <span className="roman">Önlenebilir</span>
          ölümlerin <span className="acc">birinci</span> nedeni.
        </>
      }
      lede="DSÖ verilerine göre dünya yetişkin nüfusunun yaklaşık beşte biri sigara içiyor. Yılda 7 milyon doğrudan, 1,6 milyon pasif içici ölümü — bu yük en ağır şekilde Doğu Avrupa ülkelerinin omuzlarında."
      accent="smoking"
      keyStat={{
        label: "En yüksek yetişkin sigara oranı",
        value: `%${String(top.rate).replace(".", ",")}`,
        where: top.country,
        blurb: top.note,
      }}
      chartTitle="Yetişkin sigara oranı, ülke ülke."
      chartMeta="Yetişkin nüfus · %"
      bars={data.map((e) => ({
        country: e.country,
        countryCode: e.countryCode,
        value: e.rate ?? 0,
        display: `%${String(e.rate).replace(".", ",")}`,
        displayEn: `${String(e.rate)}%`,
      }))}
      callout={{
        label: "Tek satırda hatırla",
        quote:
          "Sırbistan ve Bulgaristan, küresel ortalamanın iki katı: yetişkinlerin üçte biri günlük içici. Türkiye'deki cinsiyet farkı 27 puan — erkek %42,1, kadın %14,9.",
      }}
      notes={[
        {
          title: "Küresel yük",
          body:
            "DSÖ 2025: yaklaşık %20 yetişkin düzenli içici. Sigara kaynaklı ölümlerin %80'i düşük ve orta gelirli ülkelerde gerçekleşiyor.",
        },
        {
          title: "Pasif maruziyet",
          body:
            "Yılda 1,6 milyon ölüm hiç sigara içmemiş kişilerde — başta kadınlar ve çocuklar. Çocukların %40'ı evde dumana maruz.",
        },
        {
          title: "Türkiye notu",
          body:
            "TÜİK 2022: erkek %42,1, kadın %14,9. OECD ortalamasının üzerinde, fakat son on yılda kademeli düşüş eğiliminde.",
        },
        {
          title: "ABD eğrisi",
          body:
            "1965'te %42 olan yetişkin oranı 2024'te %11,5'e indi — fakat aynı dönemde gençler arasında e-sigara patlaması yaşandı.",
        },
      ]}
      notesIntro="Klasik sigaranın küresel yükü gerilese de coğrafi dağılım eşitsiz. Doğu Avrupa, sigara içicilerin yoğunlaştığı kuşağı; Çin ise toplam tüketim hacminin merkezini temsil ediyor."
      prev={{ href: "/", label: "Ana sayfa" }}
      next={{ href: "/e-sigara", label: "E-sigara" }}
      en={{
        edition: "№ 01 · Smoking",
        title: (
          <>
            <span className="roman">The leading</span>
            cause of <span className="acc">preventable</span> death.
          </>
        ),
        lede:
          "WHO data: roughly one in five adults worldwide smokes. 7 million direct deaths and 1.6 million from second-hand smoke each year — a burden carried most heavily by Eastern European countries.",
        keyStat: {
          label: "Highest adult smoking rate",
          value: `${String(top.rate)}%`,
          where: top.country,
          blurb: top.note,
        },
        chartTitle: "Adult smoking rate, country by country.",
        chartMeta: "Adult population · %",
        callout: {
          label: "Remember in one line",
          quote:
            "Serbia and Bulgaria sit at twice the global average — one in three adults is a daily smoker. Türkiye's gender gap is 27 points: men 42.1%, women 14.9%.",
        },
        notes: [
          { title: "Global burden", body: "WHO 2025: about 20% of adults are regular smokers. 80% of smoking-related deaths occur in low- and middle-income countries." },
          { title: "Second-hand exposure", body: "1.6 million deaths a year happen to never-smokers — primarily women and children. 40% of children are exposed to smoke at home." },
          { title: "Türkiye note", body: "TÜİK 2022: men 42.1%, women 14.9%. Above the OECD average, but trending gradually down over the past decade." },
          { title: "U.S. curve", body: "The U.S. adult rate fell from 42% in 1965 to 11.5% in 2024 — but the same period saw a vaping explosion among teens." },
        ],
        notesIntro:
          "Even as cigarettes' global burden eases, the geography stays uneven. Eastern Europe is the belt where smokers cluster; China remains the center of total consumption volume.",
        prev: { href: "/", label: "Home" },
        next: { href: "/e-sigara", label: "Vaping" },
      }}
    />
  );
}
