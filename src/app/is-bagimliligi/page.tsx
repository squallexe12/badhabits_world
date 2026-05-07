import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "İş bağımlılığı · BadHabits.world" };

const bars = [
  { country: "Güney Kore", countryCode: "KR", value: 39.7, display: "%39,7", displayEn: "39.7%" },
  { country: "Kanada",     countryCode: "CA", value: 27.0, display: "%27,0", displayEn: "27.0%" },
  { country: "ABD",        countryCode: "US", value: 25.0, display: "%25,0", displayEn: "25.0%" },
  { country: "Japonya",    countryCode: "JP", value: 21.0, display: "%21,0", displayEn: "21.0%" },
  { country: "Türkiye",    countryCode: "TR", value: 18.7, display: "%18,7", displayEn: "18.7%" },
  { country: "İngiltere",  countryCode: "GB", value: 17.4, display: "%17,4", displayEn: "17.4%" },
  { country: "Almanya",    countryCode: "DE", value: 12.3, display: "%12,3", displayEn: "12.3%" },
  { country: "Fransa",     countryCode: "FR", value:  9.8, display: "%9,8",  displayEn: "9.8%"  },
  { country: "Hollanda",   countryCode: "NL", value:  7.1, display: "%7,1",  displayEn: "7.1%"  },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 16 · İş bağımlılığı"
      title={
        <>
          <span className="roman">Karoshi:</span>
          <span className="acc">604 bin</span> iş günü kaybı.
        </>
      }
      lede="Bergen Work Addiction Scale temel alındığında Güney Kore yetişkinlerinin %39,7'si iş bağımlısı kriterlerini karşılıyor — dünya birincisi. Kanada %27, ABD %25, Japonya %21. Japonya'da 'karoshi' (aşırı çalışma kaynaklı ölüm) hâlâ resmi istatistiklerde; yıllık 604 bin iş günü kaybı doğrudan bu nedenle."
      accent="work"
      keyStat={{
        label: "Yetişkin iş bağımlılığı",
        value: "%39,7",
        where: "Güney Kore",
        blurb: "Yetişkinlerin yaklaşık beşte ikisi haftalık 50+ saat çalışıyor. OECD ortalamasının iki katı.",
      }}
      chartTitle="Bergen Work Addiction Scale prevalansı."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "Karoshi mirası",
        quote:
          "Japonya'da yılda 604 bin iş günü, doğrudan aşırı çalışma kaynaklı kalp/beyin ölümlerine bağlanıyor. Hükümet 2014'te yasal çalışma saatlerini sınırladı, fakat 'gizli mesai' devam ediyor.",
      }}
      notes={[
        { title: "G. Kore mucize maliyeti", body: "Hızlı sanayileşme dönemi (1960–90) iş kültürünü kalıcı şekillendirdi. 2024'te yasal hafta tavanı 52 saat — pratikte 60+ yaygın." },
        { title: "Pandemi sonrası", body: "Uzaktan çalışma 'her yerde, her zaman' modelini sıradanlaştırdı. ABD'de iş ortalaması haftada +3 saat arttı, fakat ücret dengesi değişmedi." },
        { title: "Cinsiyet ekseni", body: "Çocuk bakımı dahil edildiğinde kadınların 'toplam çalışma' süresi erkeklerden ortalama 9 saat daha fazla — fakat istihdamda görünmüyor." },
        { title: "Türkiye notu", body: "TÜİK 2024: kayıtlı çalışanların %25'i haftada 50+ saat. AB ortalamasının üzerinde, OECD listesinde uzun saat sıralamasında ilk 5'te." },
      ]}
      notesIntro="İş bağımlılığı kötü alışkanlıklar atlasının kabul edilmesi en zor kategorisi — çünkü kültürel olarak ödüllendiriliyor. Sağlık etkileri ise sigara ve obezite ile aynı klüpte."
      prev={{ href: "/aile-ici-siddet", label: "Aile içi şiddet" }}
      next={{ href: "/hareketsizlik", label: "Hareketsizlik" }}
      en={{
        edition: "№ 16 · Workaholism",
        title: (
          <>
            <span className="roman">Karoshi:</span>
            <span className="acc">604K</span> lost workdays.
          </>
        ),
        lede:
          "Using the Bergen Work Addiction Scale, 39.7% of South Korean adults meet workaholism criteria — the highest in the world. Canada 27%, U.S. 25%, Japan 21%. Japan still records 'karoshi' (overwork-related death) in official statistics; 604,000 lost workdays a year are attributed directly to it.",
        keyStat: {
          label: "Adult workaholism",
          value: "39.7%",
          where: "South Korea",
          blurb: "About two in five adults work 50+ hours a week. Twice the OECD average.",
        },
        chartTitle: "Bergen Work Addiction Scale prevalence.",
        chartMeta: "Adults · %",
        callout: {
          label: "Karoshi legacy",
          quote:
            "Japan attributes 604,000 lost workdays a year to overwork-related cardiac/cerebral deaths. The government capped legal hours in 2014, but 'hidden overtime' continues.",
        },
        notes: [
          { title: "S. Korea miracle cost", body: "Rapid industrialization (1960–90) shaped work culture permanently. The 2024 weekly cap is 52 hours — in practice 60+ is common." },
          { title: "Post-pandemic", body: "Remote work normalized 'always-on, everywhere'. The U.S. average workweek rose by +3 hours, but pay balance did not move." },
          { title: "Gender axis", body: "Including childcare, women's 'total work' time exceeds men's by 9 hours on average — but does not show up in employment statistics." },
          { title: "Türkiye note", body: "TÜİK 2024: 25% of registered employees work 50+ hours a week. Above the EU average; among the OECD's top 5 in long-hours rankings." },
        ],
        notesIntro:
          "Workaholism is the hardest-to-acknowledge category of the bad-habits atlas — because it is culturally rewarded. The health effects, however, sit in the same club as smoking and obesity.",
        prev: { href: "/aile-ici-siddet", label: "Domestic Violence" },
        next: { href: "/hareketsizlik", label: "Inactivity" },
      }}
    />
  );
}
