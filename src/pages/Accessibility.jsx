import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import WCAGBasics from "../components/accessibility/WCAGBasics";
import ColorContrast from "../components/accessibility/ColorContrast";
import KeyboardNavigation from "../components/accessibility/KeyboardNavigation";

import Summary from "../components/accessibility/Summary";
import Takeaways from "../components/accessibility/Takeaways";

import ContinueReading from "../components/common/ContinueReading";

function Accessibility() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="08"
        title="Accessibility"
        subtitle="Great design is usable by everyone."
      />

      <EssaySection
        chapter="08"
        eyebrow="Why Accessibility Matters"
        title="Inclusive design creates better experiences for every user."
        lead="Accessibility ensures that digital products can be used by people with different abilities, devices and environments."
        body={[
          "Accessibility is not a feature—it is a fundamental part of good design. Every person should be able to navigate, understand and interact with digital interfaces.",
          "Thoughtful accessibility improves readability, usability and overall user experience, often benefiting everyone, not just people with disabilities.",
          "Building accessible products demonstrates empathy, professionalism and a commitment to inclusive design.",
        ]}
      />

      <WCAGBasics />

      <ColorContrast />

      <KeyboardNavigation />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="09"
        title="Performance"
        description="Learn how faster websites improve user experience and satisfaction."
        link="/performance"
      />

    </main>
  );
}

export default Accessibility;