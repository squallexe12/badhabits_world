import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Aile içi şiddet · BadHabits.world" };

const bars = [
  { country: "Türkiye",       countryCode: "TR", value: 38, display: "%38", displayEn: "38%" },
  { country: "Yeni Zelanda",  countryCode: "NZ", value: 35, display: "%35", displayEn: "35%" },
  { country: "Mısır",         countryCode: "EG", value: 34, display: "%34", displayEn: "34%" },
  { country: "ABD",           countryCode: "US", value: 33, display: "%33", displayEn: "33%" },
  { country: "Afrika ort.",   countryCode: "—",  value: 33, display: "%33", displayEn: "33%" },
  { country: "Hindistan",     countryCode: "IN", value: 30, display: "%30", displayEn: "30%" },
  { country: "Kanada",        countryCode: "CA", value: 29, display: "%29", displayEn: "29%" },
  { country: "Brezilya",      countryCode: "BR", value: 27, display: "%27", displayEn: "27%" },
  { country: "Batı Pasifik",  countryCode: "—",  value: 20, display: "%20", displayEn: "20%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 14 · Aile içi şiddet"
      title={
        <>
          <span className="roman">840 milyon</span>
          kadın. <span className="acc">Yaşam boyu.</span>
        </>
      }
      lede="DSÖ tahminine göre dünya genelinde 840 milyon kadın (1/3) yaşam boyu fiziksel veya cinsel partner şiddetine maruz kaldı. Yıllık 50.000 femisit — günde 137. Yeni Zelanda %35, Mısır %34, ABD %33; Türkiye'de güncel anket çalışmaları %38 düzeyini gösteriyor."
      accent="violence"
      keyStat={{
        label: "Yaşam boyu maruz kalan kadın",
        value: "840 milyon",
        where: "Dünya geneli",
        blurb: "DSÖ küresel tahminine göre 15+ yaş kadın nüfusunun üçte biri partner şiddetine maruz kaldı.",
      }}
      chartTitle="Yaşam boyu partner şiddeti yaygınlığı."
      chartMeta="15+ yaş kadın · %"
      bars={bars}
      callout={{
        label: "Femisit",
        quote:
          "Yılda 50.000 kadın yakın partner veya aile bireyi tarafından öldürülüyor — günde 137. Cinayet vakalarının %58'i ev içinde gerçekleşiyor.",
        dark: true,
      }}
      notes={[
        { title: "Yeni Zelanda zirvesi", body: "OECD ülkeleri arasında en yüksek yaşam boyu prevalans. Aborjin/Maori topluluklarında oran %50'nin üzerinde." },
        { title: "Mısır ve Etiyopya", body: "Mısır'da %34, Etiyopya'da resmî tahmin %71'e kadar çıkıyor — dünyada en yüksek. Erken yaş evlilik temel risk faktörü." },
        { title: "Pandemi etkisi", body: "BM Kadın 2024: kapatma dönemlerinde acil yardım hatları %30–60 arası yoğunlaştı. Şiddet rakamları kalıcı yükseldi." },
        { title: "Türkiye notu", body: "Hacettepe 2023 araştırması: 15–59 yaş kadınların %38'i yaşam boyu fiziksel veya cinsel partner şiddetine maruz kaldı. Yıllık femisit sayısı 350+ (Kadın Cinayetlerini Durduracağız Platformu)." },
      ]}
      notesIntro="Aile içi şiddet, kötü alışkanlıklar atlasının diğer kategorilerinden farklı bir doğaya sahip — kullanıcının kendi vücudunda değil, başkasında izi var. Fakat ölçek ve coğrafya açısından aynı küresel kalıbı izliyor."
      prev={{ href: "/vucut-dismorfisi", label: "Vücut dismorfisi" }}
      next={{ href: "/is-bagimliligi", label: "İş bağımlılığı" }}
      en={{
        edition: "№ 14 · Domestic Violence",
        title: (
          <>
            <span className="roman">840 million</span>
            women. <span className="acc">In their lifetime.</span>
          </>
        ),
        lede:
          "WHO estimates 840 million women worldwide (1 in 3) have experienced lifetime physical or sexual partner violence. 50,000 femicides a year — 137 a day. New Zealand 35%, Egypt 34%, U.S. 33%; Türkiye reports run to 38% in current surveys.",
        keyStat: {
          label: "Women exposed in their lifetime",
          value: "840 million",
          where: "Worldwide",
          blurb: "WHO global estimate: a third of the female population aged 15+ has experienced partner violence.",
        },
        chartTitle: "Lifetime partner-violence prevalence.",
        chartMeta: "Women aged 15+ · %",
        callout: {
          label: "Femicide",
          quote:
            "50,000 women a year are killed by an intimate partner or family member — 137 per day. 58% of homicide cases occur within the home.",
          dark: true,
        },
        notes: [
          { title: "New Zealand peak", body: "The highest lifetime prevalence among OECD countries. The rate exceeds 50% in Aboriginal/Maori communities." },
          { title: "Egypt and Ethiopia", body: "Egypt 34%; official Ethiopian estimates climb to 71% — the highest in the world. Early-age marriage is the primary risk factor." },
          { title: "Pandemic effect", body: "UN Women 2024: emergency hotlines were 30–60% busier during lockdowns. The increase in violence figures has held." },
          { title: "Türkiye note", body: "Hacettepe 2023 study: 38% of women aged 15–59 experienced lifetime physical or sexual partner violence. Annual femicide count exceeds 350 (We Will Stop Femicide Platform)." },
        ],
        notesIntro:
          "Domestic violence has a different nature from the other categories of the bad-habits atlas — its trace is on someone else's body, not the user's own. Yet it follows the same global pattern in scale and geography.",
        prev: { href: "/vucut-dismorfisi", label: "Body Dysmorphia" },
        next: { href: "/is-bagimliligi", label: "Workaholism" },
      }}
    />
  );
}
