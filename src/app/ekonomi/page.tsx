import PlaceholderPage from "@/components/PlaceholderPage";

export const metadata = { title: "Ekonomi · BadHabits.world" };

export default function Page() {
  return (
    <PlaceholderPage
      category="Ekonomi"
      categoryEn="Economy"
      accent="neutral"
      blurb="30.000$ kişi başı milli gelir eşiğinin iki yakası: aşağıda sigara ve alkol, yukarıda obezite ve uyku açığı. Kültür kartlarıyla yakında."
      blurbEn="Two sides of the $30,000 GNI-per-capita threshold: smoking and alcohol below, obesity and sleep debt above. Culture cards arriving soon."
    />
  );
}
