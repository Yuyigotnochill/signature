import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import ClarityPrinciples from "../components/clarity/ClarityPrinciples";
import VisualHierarchy from "../components/clarity/VisualHierarchy";
import CommonMistakes from "../components/clarity/CommonMistakes";

import Summary from "../components/clarity/Summary";
import Takeaways from "../components/clarity/Takeaways";

import ContinueReading from "../components/common/ContinueReading";

function Clarity() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="05"
        title="Clarity"
        subtitle="Design succeeds when people instantly understand what to do."
      />

      <EssaySection
        chapter="05"
        eyebrow="Why Clarity Matters"
        title="Good design removes confusion before it appears."
        lead="Every interface should communicate purpose with the least possible effort from the user."
        body={[
          "Clarity is one of the defining qualities of successful digital products. Users should never stop to wonder what a button does, where to go next or what information matters most.",
          "Effective interfaces reduce unnecessary choices, create strong visual hierarchy and guide attention naturally through typography, spacing and color.",
          "When clarity is prioritized, products become easier to learn, faster to use and more enjoyable for everyone.",
        ]}
      />

      <ClarityPrinciples />

      <VisualHierarchy />

      <CommonMistakes />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="06"
        title="Consistency"
        description="Learn how consistent design builds trust, familiarity and seamless user experiences."
        link="/consistency"
      />

    </main>
  );
}

export default Clarity;