import { notFound } from "next/navigation";
import ContinentView, { type ContinentVM } from "@/components/ContinentView";

const continents: Record<string, ContinentVM> = {
  americas: {
    slug: "americas",
    name: { tr: "Amerika", en: "Americas" },
    edition: { tr: "Kıta № 01", en: "Continent № 01" },
    lede: {
      tr: "Kuzey Amerika'da fentanil krizi, obezite ve fast food bağımlılığı; Latin Amerika'da esrar normalleşmesi ve aile içi şiddet rakamları. Tek kıtada iki ekstrem.",
      en: "North America: the fentanyl crisis, obesity, and fast-food dependence; Latin America: the normalization of cannabis and high domestic violence rates. Two extremes in one continent.",
    },
    topStat: {
      value: "224",
      label: { tr: "ABD'de günde opioid ölümü", en: "Opioid deaths per day in the U.S." },
    },
    bullets: [
      { title: { tr: "Opioid krizi", en: "Opioid crisis" },
        body:  { tr: "ABD: doz aşımı ölümleri 2002–2022 arasında %885,8 arttı. %69,3'ü fentanil.",
                 en: "U.S.: overdose deaths rose 885.8% between 2002 and 2022. 69.3% involved fentanyl." }},
      { title: { tr: "Obezite zirvesi", en: "Obesity peak" },
        body:  { tr: "ABD'de yetişkinlerin %41'i obez. 2035 projeksiyonu küresel %54 yüksek BMI.",
                 en: "41% of U.S. adults are obese. The 2035 projection is 54% high BMI globally." }},
      { title: { tr: "Vaping patlaması", en: "Vaping surge" },
        body:  { tr: "ABD ergen günlük vaping 2020'de %15, 2024'te %29.",
                 en: "U.S. teen daily vaping: 15% in 2020, 29% in 2024." }},
      { title: { tr: "Aile içi şiddet", en: "Domestic violence" },
        body:  { tr: "ABD: kadınların %33'ü yaşam boyu maruz kaldı. Kanada %29.",
                 en: "U.S.: 33% of women have experienced it in their lifetime. Canada: 29%." }},
      { title: { tr: "BDD", en: "BDD" },
        body:  { tr: "Plastik cerrahi hastalarında BDD %18,6 — genel nüfusun 15 katı.",
                 en: "BDD prevalence in cosmetic surgery patients is 18.6% — 15× the general population." }},
    ],
    categories: [
      { href: "/uyusturucu",       label: { tr: "Uyuşturucu",       en: "Illicit Drugs" },     note: { tr: "Fentanil krizi", en: "Fentanyl crisis" }},
      { href: "/obezite",          label: { tr: "Obezite",          en: "Obesity" },           note: { tr: "%41 yetişkin", en: "41% of adults" }},
      { href: "/e-sigara",         label: { tr: "E-sigara",         en: "Vaping" },            note: { tr: "%29 ABD ergen", en: "29% U.S. teens" }},
      { href: "/vucut-dismorfisi", label: { tr: "Vücut dismorfisi", en: "Body Dysmorphia" },   note: { tr: "%18,6 cerrahide", en: "18.6% in surgery" }},
      { href: "/benzodiazepin",    label: { tr: "Benzodiazepin",    en: "Benzodiazepines" },   note: { tr: "10.964 ölüm/yıl", en: "10,964 deaths/year" }},
      { href: "/aile-ici-siddet",  label: { tr: "Aile içi şiddet",  en: "Domestic Violence" }, note: { tr: "%33 ABD kadın", en: "33% of U.S. women" }},
    ],
  },

  europe: {
    slug: "europe",
    name: { tr: "Avrupa", en: "Europe" },
    edition: { tr: "Kıta № 02", en: "Continent № 02" },
    lede: {
      tr: "Sigara ve alkolün küresel zirvesi Doğu Avrupa'da. Estonya ve İskoçya opioid ölümlerinde Avrupa rekorları kırıyor. Ergen kumar oranı 5 yılda iki katına çıktı.",
      en: "The global peak of smoking and alcohol sits in Eastern Europe. Estonia and Scotland set European records for opioid deaths. Teen gambling has doubled in five years.",
    },
    topStat: {
      value: "9.2",
      label: { tr: "L · kişi · alkol (Avrupa ortalaması)", en: "L · per person · alcohol (European average)" },
    },
    bullets: [
      { title: { tr: "Sigara zirvesi", en: "Smoking peak" },
        body:  { tr: "Sırbistan %35,5 ve Bulgaristan %33 — küresel ortalamanın iki katı üzerinde.",
                 en: "Serbia 35.5% and Bulgaria 33% — more than double the global average." }},
      { title: { tr: "Alkol başkenti", en: "Alcohol capital" },
        body:  { tr: "Litvanya, Çekya, Letonya 11–13 L bandında. Avrupa ortalaması 9,2 L.",
                 en: "Lithuania, Czechia, and Latvia sit in the 11–13 L band. The European average is 9.2 L." }},
      { title: { tr: "Ergen kumar", en: "Teen gambling" },
        body:  { tr: "%8 → %14 (2019–2024). Kız ergenler arasında 3 kat artış.",
                 en: "8% → 14% (2019–2024). A 3× increase among teenage girls." }},
      { title: { tr: "Estonya opioid", en: "Estonian opioids" },
        body:  { tr: "Estonya: AB ortalamasının 6 katı uyuşturucu kaynaklı ölüm.",
                 en: "Estonia: drug-related deaths at 6× the EU average." }},
      { title: { tr: "Yaşlı benzodiazepin", en: "Elderly benzodiazepines" },
        body:  { tr: "Finlandiya: 75+ yaş hastaların 1/3'ü kronik kullanıcı.",
                 en: "Finland: one in three patients aged 75+ is a chronic user." }},
    ],
    categories: [
      { href: "/sigara",        label: { tr: "Sigara",        en: "Smoking" },         note: { tr: "%35,5 Sırbistan", en: "35.5% Serbia" }},
      { href: "/alkol",         label: { tr: "Alkol",         en: "Alcohol" },         note: { tr: "9,2 L bölge ort.", en: "9.2 L regional avg." }},
      { href: "/kumar",         label: { tr: "Kumar",         en: "Gambling" },        note: { tr: "%45 İtalya", en: "45% Italy" }},
      { href: "/uyusturucu",    label: { tr: "Uyuşturucu",    en: "Illicit Drugs" },   note: { tr: "İskoçya 16,2/100k", en: "Scotland 16.2/100k" }},
      { href: "/benzodiazepin", label: { tr: "Benzodiazepin", en: "Benzodiazepines" }, note: { tr: "Finlandiya 75+", en: "Finland 75+" }},
    ],
  },

  asia: {
    slug: "asia",
    name: { tr: "Asya", en: "Asia" },
    edition: { tr: "Kıta № 03", en: "Continent № 03" },
    lede: {
      tr: "İş bağımlılığı, oyun bağımlılığı, telefon kullanımı ve hareketsizliğin küresel merkezi. Singapur ve BAE'de uyku borcu zirvede; Endonezya'da e-sigara dünya birincisi.",
      en: "The global hub of workaholism, gaming addiction, phone use, and inactivity. Singapore and the UAE lead in sleep debt; Indonesia is the world leader in vaping.",
    },
    topStat: {
      value: "48%",
      label: { tr: "Asya Pasifik · hareketsizlik", en: "Asia Pacific · inactivity" },
    },
    bullets: [
      { title: { tr: "Karoshi mirası", en: "Karoshi legacy" },
        body:  { tr: "Güney Kore yetişkinlerinin %39,7'si iş bağımlısı. Japonya 604K iş günü kaybı.",
                 en: "39.7% of South Korean adults qualify as workaholics. Japan: 604K lost workdays." }},
      { title: { tr: "E-sigara zirvesi", en: "Vaping peak" },
        body:  { tr: "Endonezya yetişkinlerin %32'si vape kullanıcısı — dünya 1.",
                 en: "32% of Indonesian adults are vape users — #1 in the world." }},
      { title: { tr: "Uyku borcu", en: "Sleep debt" },
        body:  { tr: "Singapur %56, BAE %55, Endonezya %52 yetersiz.",
                 en: "Singapore 56%, UAE 55%, Indonesia 52% sleep insufficiently." }},
      { title: { tr: "Oyun bağımlılığı", en: "Gaming addiction" },
        body:  { tr: "Çin'de yasal sınırlar var; ABD ergenleri %8,5 klinik kriter.",
                 en: "China imposes legal time limits; 8.5% of U.S. teens meet clinical criteria." }},
      { title: { tr: "Telefon süresi", en: "Phone time" },
        body:  { tr: "Filipinler 8 sa 52 dk, Tayland 8 sa 36 dk günlük.",
                 en: "Philippines 8 h 52 m, Thailand 8 h 36 m per day." }},
    ],
    categories: [
      { href: "/is-bagimliligi", label: { tr: "İş bağımlılığı", en: "Workaholism" },   note: { tr: "%39,7 G. Kore", en: "39.7% S. Korea" }},
      { href: "/oyun",           label: { tr: "Oyun",           en: "Gaming" },        note: { tr: "%6,5 Çin", en: "6.5% China" }},
      { href: "/sosyal-medya",   label: { tr: "Sosyal medya",   en: "Social Media" },  note: { tr: "8 sa 52 dk Filipinler", en: "8 h 52 m Philippines" }},
      { href: "/hareketsizlik",  label: { tr: "Hareketsizlik",  en: "Inactivity" },    note: { tr: "%48 bölge", en: "48% region" }},
      { href: "/e-sigara",       label: { tr: "E-sigara",       en: "Vaping" },        note: { tr: "%32 Endonezya", en: "32% Indonesia" }},
    ],
  },

  mena: {
    slug: "mena",
    name: { tr: "Orta Doğu / Kuzey Afrika", en: "Middle East / North Africa" },
    edition: { tr: "Kıta № 04", en: "Continent № 04" },
    lede: {
      tr: "Captagon (amfetamin türevi) bölgesel kriz; uyku borcu yüksek, telefon ekran skoru OECD üstünde. Aile içi şiddet rakamları küresel ortalamanın üzerinde.",
      en: "Captagon (an amphetamine derivative) is a regional crisis; sleep debt is high and phone screen time is above OECD averages. Domestic violence rates run above the global mean.",
    },
    topStat: {
      value: "40%",
      label: { tr: "Suudi gençler · Captagon maruziyeti", en: "Saudi youth · Captagon exposure" },
    },
    bullets: [
      { title: { tr: "Captagon ihracatı", en: "Captagon exports" },
        body:  { tr: "Suriye merkezli üretim, Körfez ülkelerine yöneliyor. Suudi Arabistan ve BAE birincil pazarlar.",
                 en: "Syrian-based production routes into the Gulf. Saudi Arabia and the UAE are the primary markets." }},
      { title: { tr: "Mısır ergen benzo", en: "Egyptian teen benzodiazepines" },
        body:  { tr: "Liseli ergenlerin %5,1'i benzodiazepin kullanıcısı.",
                 en: "5.1% of high-school teens are benzodiazepine users." }},
      { title: { tr: "Aile içi şiddet", en: "Domestic violence" },
        body:  { tr: "Mısır %34, Etiyopya en yüksek seviyelerde.",
                 en: "Egypt 34%; Ethiopia sits at the highest band." }},
      { title: { tr: "Telefon süresi", en: "Phone time" },
        body:  { tr: "BAE günlük 7+ saat ekran ortalaması.",
                 en: "UAE: 7+ hours of screen time per day on average." }},
      { title: { tr: "Uyku açığı", en: "Sleep gap" },
        body:  { tr: "BAE'nin %55'i, Endonezya'nın %52'si yetersiz uyuyor.",
                 en: "55% in the UAE and 52% in Indonesia sleep insufficiently." }},
    ],
    categories: [
      { href: "/uyusturucu",      label: { tr: "Uyuşturucu (Captagon)", en: "Drugs (Captagon)" }, note: { tr: "%40 Körfez gençlik", en: "40% Gulf youth" }},
      { href: "/sosyal-medya",    label: { tr: "Sosyal medya",          en: "Social Media" },    note: { tr: "BAE 7+ saat", en: "UAE 7+ hours" }},
      { href: "/uyku",            label: { tr: "Uyku",                  en: "Sleep" },           note: { tr: "BAE %55 yetersiz", en: "UAE 55% insufficient" }},
      { href: "/aile-ici-siddet", label: { tr: "Aile içi şiddet",       en: "Domestic Violence" }, note: { tr: "Mısır %34", en: "Egypt 34%" }},
      { href: "/benzodiazepin",   label: { tr: "Benzodiazepin",         en: "Benzodiazepines" }, note: { tr: "Mısır ergen %5,1", en: "Egypt teens 5.1%" }},
    ],
  },

  africa: {
    slug: "africa",
    name: { tr: "Afrika", en: "Africa" },
    edition: { tr: "Kıta № 05", en: "Continent № 05" },
    lede: {
      tr: "Yüksek alkol tüketimi, hızlı büyüyen uyuşturucu pazarı, küresel zirvede ekran süresi ve aile içi şiddetin en ağır rakamları. Kıtanın sağlık altyapısı tüm bunları aynı anda taşıyor.",
      en: "High alcohol consumption, a fast-growing drug market, world-leading screen time, and the heaviest domestic violence figures. The continent's health infrastructure carries all of this at once.",
    },
    topStat: {
      value: "9 h 24 m",
      label: { tr: "Güney Afrika · günlük ekran", en: "South Africa · daily screen" },
    },
    bullets: [
      { title: { tr: "Alkol", en: "Alcohol" },
        body:  { tr: "Sahra altı Afrika'da yüksek tüketim — sınırlı kayıt; resmi rakamlar düşük gösteriyor.",
                 en: "High consumption in sub-Saharan Africa — limited recording; official figures understate the picture." }},
      { title: { tr: "Uyuşturucu", en: "Illicit Drugs" },
        body:  { tr: "BM 2024: kıtada 15,3 milyon yetişkin kullanıcı. Tedavi kapasitesi nüfusun %1'inden az.",
                 en: "UN 2024: 15.3 million adult users on the continent. Treatment capacity covers less than 1% of the population." }},
      { title: { tr: "Ekran süresi", en: "Screen time" },
        body:  { tr: "Güney Afrika 9 sa 24 dk — küresel rekor.",
                 en: "South Africa 9 h 24 m — a global record." }},
      { title: { tr: "Online taciz", en: "Online harassment" },
        body:  { tr: "Güney Afrika'da kullanıcıların %79'u nefret söylemiyle karşılaşıyor.",
                 en: "79% of users in South Africa encounter hate speech." }},
      { title: { tr: "Aile içi şiddet", en: "Domestic violence" },
        body:  { tr: "Afrika ortalaması %33; Etiyopya ve Mısır en yüksek bandda.",
                 en: "African average 33%; Ethiopia and Egypt sit at the highest band." }},
    ],
    categories: [
      { href: "/alkol",           label: { tr: "Alkol",            en: "Alcohol" },          note: { tr: "Sahra altı", en: "Sub-Saharan" }},
      { href: "/uyusturucu",      label: { tr: "Uyuşturucu",       en: "Illicit Drugs" },    note: { tr: "15,3M kullanıcı", en: "15.3M users" }},
      { href: "/sosyal-medya",    label: { tr: "Sosyal medya",     en: "Social Media" },     note: { tr: "9 sa 24 dk Güney Afrika", en: "9 h 24 m South Africa" }},
      { href: "/online-taciz",    label: { tr: "Online taciz",     en: "Online Harassment" }, note: { tr: "%79 Güney Afrika", en: "79% South Africa" }},
      { href: "/aile-ici-siddet", label: { tr: "Aile içi şiddet",  en: "Domestic Violence" }, note: { tr: "Etiyopya zirvede", en: "Ethiopia at the top" }},
    ],
  },
};

export function generateStaticParams() {
  return Object.keys(continents).map((slug) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const c = continents[slug];
  return { title: c ? `${c.name.tr} · BadHabits.world` : "Kıta · BadHabits.world" };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const c = continents[slug];
  if (!c) notFound();
  return <ContinentView c={c} />;
}
