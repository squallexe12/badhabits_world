import CategoryDetail from "@/components/CategoryDetail";

export const metadata = { title: "Online taciz · BadHabits.world" };

const bars = [
  { country: "Hindistan",    countryCode: "IN", value: 85, display: "%85", displayEn: "85%" },
  { country: "Bangladeş",    countryCode: "BD", value: 84, display: "%84", displayEn: "84%" },
  { country: "Güney Afrika", countryCode: "ZA", value: 79, display: "%79", displayEn: "79%" },
  { country: "Endonezya",    countryCode: "ID", value: 70, display: "%70", displayEn: "70%" },
  { country: "Brezilya",     countryCode: "BR", value: 65, display: "%65", displayEn: "65%" },
  { country: "Türkiye",      countryCode: "TR", value: 58, display: "%58", displayEn: "58%" },
  { country: "ABD",          countryCode: "US", value: 50, display: "%50", displayEn: "50%" },
  { country: "İngiltere",    countryCode: "GB", value: 47, display: "%47", displayEn: "47%" },
  { country: "Almanya",      countryCode: "DE", value: 36, display: "%36", displayEn: "36%" },
];

export default function Page() {
  return (
    <CategoryDetail
      edition="№ 09 · Online taciz"
      title={
        <>
          <span className="roman">İki kişiden</span>
          <span className="acc">biri</span> nefret söylemiyle karşılaşıyor.
        </>
      }
      lede="Hindistan, Bangladeş ve Güney Afrika'da kullanıcıların %80'inden fazlası online nefret söylemiyle karşılaşıyor. ABD'de ergenlerin yarısı son 12 ayda taciz yaşadı; ciddi taciz yetişkinlerde %18'den %22'ye, fiziksel tehdit %7'den %10'a yükseldi. Engellilerde ciddi taciz oranı engelli olmayanlardan %63 daha yüksek."
      accent="harassment"
      keyStat={{
        label: "Nefret söylemiyle karşılaşma",
        value: "%85",
        where: "Hindistan",
        blurb: "Sosyal medya kullanıcılarının yedide altısı son bir yılda nefret söylemine maruz kaldı. Çoğu rapor edilmiyor.",
      }}
      chartTitle="Son 12 ayda online nefret söylemiyle karşılaşma."
      chartMeta="Yetişkin · %"
      bars={bars}
      callout={{
        label: "Akıldan çıkmasın",
        quote:
          "ABD'de ergenlerin %50'si son yıl içinde tacize uğradı. Yetişkinlerde 'ciddi taciz' bir yıl içinde %18'den %22'ye, fiziksel tehdit %7'den %10'a yükseldi.",
      }}
      notes={[
        { title: "Engellilik etkisi", body: "Pew 2024: engelli yetişkinlerin %31'i ciddi taciz yaşadı; engelli olmayanlarda bu oran %19. Kayıt altına alınma oranı çok düşük." },
        { title: "Seçim dönemleri", body: "Endonezya 2024 seçimlerinde 18 ay boyunca aktif platformlarda nefret söylemi hacmi %230 arttı. Politik figürlere yönelik kadın taciz öne çıktı." },
        { title: "Cinsiyet kıyası", body: "BM Kadın 2024: 18–25 yaş kadınların %58'i online taciz yaşadı; aynı yaş grubu erkeklerde oran %35." },
        { title: "Türkiye notu", body: "İletişim Başkanlığı 2024 raporu: 18+ kullanıcılarda online nefret söylemine maruz kalma %58. En yoğun kategoriler kadın, etnisite ve siyaset." },
      ]}
      notesIntro="Online taciz, sosyal medyanın kullanım süresinden çok daha az konuşulan tarafı. Hedefin küçük bir azınlık olduğu yanılgısının aksine — yetişkinlerin neredeyse yarısı, gençlerin çoğu maruz kalıyor."
      prev={{ href: "/sosyal-medya", label: "Sosyal medya" }}
      next={{ href: "/kumar", label: "Kumar" }}
      en={{
        edition: "№ 09 · Online Harassment",
        title: (
          <>
            <span className="roman">One in</span>
            <span className="acc">two</span> meets hate speech.
          </>
        ),
        lede:
          "More than 80% of users in India, Bangladesh, and South Africa encounter online hate speech. In the U.S., half of teens experienced harassment in the past 12 months; severe harassment among adults rose from 18% to 22%, physical threats from 7% to 10%. Severe harassment among disabled adults runs 63% higher than among non-disabled.",
        keyStat: {
          label: "Encountered hate speech",
          value: "85%",
          where: "India",
          blurb: "Six of every seven social media users met hate speech in the past year. Most go unreported.",
        },
        chartTitle: "Encountered online hate speech in the past 12 months.",
        chartMeta: "Adults · %",
        callout: {
          label: "Don't forget",
          quote:
            "50% of U.S. teens were harassed in the past year. Among adults, 'severe harassment' rose from 18% to 22% in a single year; physical threats from 7% to 10%.",
        },
        notes: [
          { title: "Disability effect", body: "Pew 2024: 31% of disabled adults experienced severe harassment; the figure is 19% among non-disabled. Reporting rates are very low." },
          { title: "Election windows", body: "Hate-speech volume on active platforms rose 230% during Indonesia's 18-month 2024 election cycle. Harassment of women political figures stood out." },
          { title: "Gender comparison", body: "UN Women 2024: 58% of women aged 18–25 experienced online harassment; 35% of men in the same age group." },
          { title: "Türkiye note", body: "Communications Directorate 2024: 58% of 18+ users were exposed to online hate speech. Densest categories: women, ethnicity, politics." },
        ],
        notesIntro:
          "Online harassment is the much-less-discussed side of social media use. Despite the assumption that targets are a small minority, nearly half of adults and most teens are exposed.",
        prev: { href: "/sosyal-medya", label: "Social Media" },
        next: { href: "/kumar", label: "Gambling" },
      }}
    />
  );
}
