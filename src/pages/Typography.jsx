import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import HistorySection from "../components/typography/HistorySection";
import FontAnatomy from "../components/typography/FontAnatomy";
import HierarchyGuide from "../components/typography/HierarchyGuide";
import ReadingRhythm from "../components/typography/ReadingRhythm";
import FontPairing from "../components/typography/FontPairing";
import TypographyExamples from "../components/typography/TypographyExamples";
import TypographyMistakes from "../components/typography/TypographyMistakes";
import Summary from "../components/typography/Summary";
import Takeaways from "../components/typography/Takeaways";

import ContinueReading from "../components/common/ContinueReading";

function Typography() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="02"
        title="Typography"
        subtitle="Words are read. Typography is experienced."
      />

      <EssaySection
        chapter="02"
        eyebrow="Why Typography Matters"
        title="Typography is the voice of every interface."
        lead="Before users notice color, animation or layout, they begin reading."
        body={[
          "Typography is more than selecting a beautiful font. It determines how information is understood, how quickly users scan a page, and how confidently they navigate an interface.",
          "Every decision—font size, weight, spacing and rhythm—contributes to readability. Great typography disappears into the experience while quietly guiding attention.",
          "Mastering typography means designing for people, not for decoration. When text becomes effortless to read, the interface itself becomes effortless to use."
        ]}
      />

      <HistorySection />

      <FontAnatomy />

      <HierarchyGuide />

      <ReadingRhythm />

      <FontPairing />

      <TypographyExamples />

      <TypographyMistakes />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="03"
        title="Color"
        description="Learn how color communicates emotion, creates hierarchy and strengthens visual identity."
        link="/color"
      />

    </main>
  );
}

export default Typography;