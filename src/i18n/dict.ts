import type { Bilingual } from "./types";

const b = <T,>(tr: T, en: T): Bilingual<T> => ({ tr, en });

export const dict = {
  // global chrome
  skip: b("Ana içeriğe atla", "Skip to main content"),
  ariaMainNav: b("Ana navigasyon", "Main navigation"),
  ariaHome: b("Ana sayfa", "Home"),
  toggleAriaToEN: b("Switch language to English", "Switch language to English"),
  toggleAriaToTR: b("Dili Türkçeye çevir", "Switch language to Turkish"),
  edition: b("Edisyon № 01", "Edition № 01"),
  editionDate: b("Mayıs 2026", "May 2026"),

  // masthead nav
  navSmoking: b("Sigara", "Smoking"),
  navAlcohol: b("Alkol", "Alcohol"),
  navObesity: b("Obezite", "Obesity"),
  navSleep: b("Uyku", "Sleep"),
  navRanking: b("Sıralama", "Rankings"),
  navEconomy: b("Ekonomi", "Economy"),

  // category detail labels
  fieldNotes: b("Saha notları.", "Field notes."),
  tableI: b("Tablo I", "Plate I"),
  tableII: b("Tablo II", "Plate II"),
  contextNuance: b("Bağlam ve nüans", "Context and nuance"),
  methodology: b("Metodoloji", "Methodology"),
  inThisIssue: b("Bu sayıda", "In this issue"),
  rankingsLabel: b("Sıralama", "Rankings"),
  homeLabel: b("Ana sayfa", "Home"),
  methodologyText: b(
    "Veriler DSÖ, OECD, Eurostat, CDC ve ulusal sağlık otoritelerinin en güncel raporlarından derlenir. Anlatı netliği için bazı sayılar yuvarlanmıştır; tüm kaynaklar",
    "Data is compiled from the latest reports of WHO, OECD, Eurostat, CDC, and national health authorities. Some figures are rounded for narrative clarity; all sources are listed on the"
  ),
  hakkindaLink: b("Hakkında", "About"),
  hakkindaTrailing: b("sayfasında listelidir.", "page."),

  // colophon
  colophon: b("Kolofon", "Colophon"),
  colophonMast: b(
    "Sayılarla anlatılan, halk sağlığının portresi.",
    "A portrait of public health, told in numbers."
  ),
  colophonBody: b(
    "Bu atlas; veriyi tablodan çıkarıp anlatıya dönüştürme denemesidir. Her kategori, kendi sayfasında karşılaştırmalı grafik, ülke kartı ve ekonomi-kültür bağlamıyla derinleşir.",
    "This atlas attempts to lift data out of the table and turn it into narrative. Each category deepens, on its own page, into a comparative chart, a country card, and a context of economy and culture."
  ),
  sources: b("Kaynaklar", "Sources"),
  imprint: b("Künye", "Imprint"),
  research: b("Araştırma", "Research"),
  design: b("Tasarım", "Design"),
  code: b("Kod", "Code"),
  dataLockup: b("Veri donanım · 6 Mayıs 2026", "Data lockup · 6 May 2026"),
  copyright: b("© MMXXVI · BadHabits·World", "© MMXXVI · BadHabits·World"),
  versionLineTR: b("v 0.1 · Edisyon № 01 · Türkçe", "v 0.1 · Edition № 01 · English"),
  whoLong: b("Dünya Sağlık Örgütü (DSÖ)", "World Health Organization (WHO)"),

  // home page
  homeEyebrow: b(
    "Halk Sağlığı Atlası · Edisyon № 01",
    "Public Health Atlas · Edition № 01"
  ),
  homeHeroLine1: b("Sağlıksız", "An unhealthy"),
  homeHeroLine2A: b("alışkanlıkların", "world's"),
  homeHeroLine2B: b("küresel", "global"),
  homeHeroLine2C: b("portresi.", "portrait."),
  homeLede1: b(
    "Sigara, alkol, obezite ve uyku — dünyanın",
    "Smoking, alcohol, obesity, and sleep — the four habits that carry the world's"
  ),
  homeLedeEm: b("önlenebilir ölüm yükünü", "preventable death toll"),
  homeLede2: b(
    "taşıyan dört alışkanlık. Bu atlas; DSÖ, OECD ve Eurostat verilerini ülke ülke, sayı sayı, görsel bir dile çevirir.",
    ". This atlas translates WHO, OECD, and Eurostat data into a visual language, country by country, number by number."
  ),
  homeAside: b(
    "ülke kaydı · 4 risk faktörü · 1 metodoloji notu. Veriler Mayıs 2026 itibarıyla en güncel kaynaklardan derlendi ve yan yana getirildi.",
    "country records · 4 risk factors · 1 methodology note. Data is sourced from the most recent reports as of May 2026 and brought side by side."
  ),
  homeCta: b("Sıralamaya Geç", "Go to Rankings"),
  homeStatsTitle: b("Dört rakam, dört uyarı.", "Four figures, four warnings."),
  homeStatsMeta: b("Öne çıkan göstergeler", "Headline indicators"),
  homeRankTitle: b("En sağlıksız altı ülke.", "Six unhealthiest countries."),
  homeRankMeta: b("NCD risk skorları", "NCD risk scores"),
  homeRankMore: b("Tam sıralamayı gör", "See full rankings"),
  homeCatTitle: b("Kategoriler.", "Categories."),
  homeCatMeta: b("Derinlemesine bölümler", "Deep dives"),
  homeExtraTitle: b("Daha derin bir atlas.", "A deeper atlas."),
  homeExtraMeta: b("16 ek kategori", "16 extra categories"),
  homeContTitle: b("Kıtaya göre okuma.", "Read by continent."),
  homeContMeta: b("Bölgesel dosyalar", "Regional dossiers"),
  homeWorldwide: b("Dünya geneli", "Worldwide"),
  homeMillionPlus: b("milyon+", "million+"),
  homeStatsTablePrefix: b("Tablo I", "Plate I"),
  homeRankTablePrefix: b("Tablo II", "Plate II"),
  homeCatTablePrefix: b("Tablo III", "Plate III"),
  homeExtraTablePrefix: b("Tablo IV", "Plate IV"),
  homeContTablePrefix: b("Tablo V", "Plate V"),

  // stat grid labels
  statSmokingCorner: b("01 · Sigara", "01 · Smoking"),
  statAlcoholCorner: b("02 · Alkol", "02 · Alcohol"),
  statObesityCorner: b("03 · Obezite", "03 · Obesity"),
  statSleepCorner: b("04 · Uyku", "04 · Sleep"),
  statMegaCorner: b("Küresel Ölçek", "Global Scale"),
  statSmokingLabel: b("Yetişkin Sigara Oranı", "Adult Smoking Rate"),
  statAlcoholLabel: b("Yıllık · Kişi Başı", "Annual · Per capita"),
  statObesityLabel: b("Yetişkin Obezite Oranı", "Adult Obesity Rate"),
  statSleepLabel: b("Gece Başına Ortalama Uyku", "Average Sleep per Night"),
  statMegaLabel: b("Obez yetişkin · 2025", "Obese adults · 2025"),
  statMegaNote: b(
    "Son otuz yılda iki katından fazla arttı. Her sekiz yetişkinden biri obezite tanı sınırının üzerinde.",
    "More than doubled in the last thirty years. One in eight adults is above the obesity threshold."
  ),
  statSleepHoursUnit: b("saat", "hours"),
  statSleepWhoPrefix: b("DSÖ önerisi 7–9 saat.", "WHO recommends 7–9 hours."),

  // category strip blurbs (4 main)
  catSmokingBlurb: b(
    "Dünyanın en önde gelen önlenebilir ölüm nedeni. Ülke ülke yetişkin oranları.",
    "The world's leading preventable cause of death. Adult rates, country by country."
  ),
  catAlcoholBlurb: b(
    "Doğu Avrupa zirvede; Türkiye OECD'nin üçüncü en az tüketen ülkesi. Litre · kişi.",
    "Eastern Europe at the top; Türkiye is OECD's third-lowest consumer. Litres per capita."
  ),
  catObesityBlurb: b(
    "Otuz yılda iki katına çıkan küresel kriz. Yetişkinler ve aşırı kilolu nüfus.",
    "A global crisis that has doubled in thirty years. Adults and the overweight population."
  ),
  catSleepBlurb: b(
    "Modern çalışma kültürünün sessiz bedeli. Ortalama uyku ve önerilen açık.",
    "The silent cost of modern work culture. Average sleep and the recommended gap."
  ),

  // 16 extra cat strip
  extraVaping: b("E-sigara", "Vaping"),
  extraVapingBlurb: b("%32 Endonezya · %29 ABD ergen", "32% Indonesia · 29% U.S. teens"),
  extraDrugs: b("Uyuşturucu", "Illicit Drugs"),
  extraDrugsBlurb: b("ABD: günde 224 opioid ölümü", "U.S.: 224 opioid deaths/day"),
  extraBenzo: b("Benzodiazepin", "Benzodiazepines"),
  extraBenzoBlurb: b("10.964 doz aşımı ölümü/yıl", "10,964 overdose deaths/year"),
  extraSocial: b("Sosyal medya", "Social Media"),
  extraSocialBlurb: b("Güney Afrika: 9 sa 24 dk/gün", "South Africa: 9 h 24 m/day"),
  extraHarass: b("Online taciz", "Online Harassment"),
  extraHarassBlurb: b("Hindistan: %85 nefret söylemi", "India: 85% hate-speech exposure"),
  extraGambling: b("Kumar", "Gambling"),
  extraGamblingBlurb: b("İtalya yetişkinleri: %45", "Italy adults: 45%"),
  extraGaming: b("Oyun", "Gaming"),
  extraGamingBlurb: b("ABD ergen: %8,5 klinik", "U.S. teens: 8.5% clinical"),
  extraEating: b("Yeme bozukluğu", "Eating Disorders"),
  extraEatingBlurb: b("ABD: 30M tanı · Mortalite 5,31", "U.S.: 30M diagnoses · Mortality 5.31"),
  extraBdd: b("Vücut dismorfisi", "Body Dysmorphia"),
  extraBddBlurb: b("Cerrahi hastalarında 15 katı", "15× among cosmetic surgery patients"),
  extraViolence: b("Aile içi şiddet", "Domestic Violence"),
  extraViolenceBlurb: b("840 milyon kadın · yaşam boyu", "840M women · lifetime"),
  extraWork: b("İş bağımlılığı", "Workaholism"),
  extraWorkBlurb: b("G. Kore: %39,7 · Karoshi", "S. Korea: 39.7% · Karoshi"),
  extraInactivity: b("Hareketsizlik", "Inactivity"),
  extraInactivityBlurb: b("Asya Pasifik: %48 · 1,8 milyar", "Asia Pacific: 48% · 1.8B"),
  extraCaffeine: b("Kafein", "Caffeine"),
  extraCaffeineBlurb: b("Lüksemburg: 6,5 fincan/gün", "Luxembourg: 6.5 cups/day"),
  extraShopping: b("Alışveriş", "Shopping"),
  extraShoppingBlurb: b("ABD borç: 104.000 dolar/hane", "U.S. debt: $104,000/household"),
  extraPorn: b("Pornografi", "Pornography"),
  extraPornBlurb: b("İlk maruz kalma: 11 yaş", "First exposure: age 11"),
  extraSugar: b("Şeker", "Sugar"),
  extraSugarBlurb: b("Yıllık 178,79 milyon ton", "178.79M tons/year"),

  // continents
  contAmericas: b("Amerika", "Americas"),
  contEurope: b("Avrupa", "Europe"),
  contAsia: b("Asya", "Asia"),
  contMena: b("MENA", "MENA"),
  contAfrica: b("Afrika", "Africa"),
  contLabel: b("Kıta", "Continent"),
  contAmericasTopics: b(
    "Opioid · Obezite · Vaping · BDD",
    "Opioids · Obesity · Vaping · BDD"
  ),
  contEuropeTopics: b(
    "Sigara · Alkol · Kumar · Estonya opioid",
    "Smoking · Alcohol · Gambling · Estonian opioids"
  ),
  contAsiaTopics: b(
    "Workaholism · Gaming · Hareketsizlik · E-sigara",
    "Workaholism · Gaming · Inactivity · Vaping"
  ),
  contMenaTopics: b(
    "Captagon · Telefon skoru · Uyku · Aile şiddeti",
    "Captagon · Phone score · Sleep · Domestic violence"
  ),
  contAfricaTopics: b(
    "Alkol · Uyuşturucu · Ekran · Online taciz",
    "Alcohol · Drugs · Screens · Online harassment"
  ),
} as const;

export type DictKey = keyof typeof dict;
