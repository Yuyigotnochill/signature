import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import ColorHistory from "../components/color/ColorHistory";
import ColorTheory from "../components/color/ColorTheory";
import ColorPsychology from "../components/color/ColorPsychology";
import ColorHarmony from "../components/color/ColorHarmony";
import ContrastAccessibility from "../components/color/ContrastAccessibility";
import BrandColors from "../components/color/BrandColors";
import ColorMistakes from "../components/color/ColorMistakes";
import Summary from "../components/color/Summary";
import Takeaways from "../components/color/Takeaways";
import ContinueReading from "../components/common/ContinueReading";

function Color() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="03"
        title="Color"
        subtitle="The emotional language behind every interface."
      />

      <EssaySection
        chapter="03"
        eyebrow="Why Color Matters"
        title="Color influences people before words do."
        lead="Color shapes emotion before users read a single word." 
        body={[
          "Color shapes perception, establishes hierarchy and creates emotional responses within milliseconds.",
          "Successful digital products use color intentionally—not simply to decorate interfaces but to guide attention, reinforce branding and improve usability.",
          "Understanding color means understanding psychology, accessibility and visual balance working together.",
        ]}
      />

      <ColorHistory />

      <ColorTheory />

      <ColorPsychology />

      <ColorHarmony />

      <ContrastAccessibility />

      <BrandColors />

      <ColorMistakes />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="04"
        title="Motion"
        description="Discover how movement creates feedback, personality and delight without becoming distraction."
        link="/motion"
      />

    </main>
  );
}

export default Color;