import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import MotionPrinciples from "../components/motion/MotionPrinciples";
import TimingEasing from "../components/motion/TimingEasing";
import MicroInteractions from "../components/motion/MicroInteractions";
import LoadingStates from "../components/motion/LoadingStates";
import PageTransitions from "../components/motion/PageTransitions";
import MotionMistakes from "../components/motion/MotionMistakes";
import Summary from "../components/motion/Summary";
import Takeaways from "../components/motion/Takeaways";
import ContinueReading from "../components/common/ContinueReading";

function Motion() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="04"
        title="Motion"
        subtitle="Movement gives interfaces rhythm, feedback and personality."
      />

      <EssaySection
        chapter="04"
        eyebrow="Why Motion Matters"
        title="Movement helps users understand change."
        lead="Good motion explains interactions instead of distracting from them."
        body={[
          "Motion is communication. It shows users where they are, what changed and what happens next without requiring additional explanation.",
          "Thoughtful animations make interfaces feel responsive, connected and alive, reinforcing hierarchy while reducing cognitive load.",
          "Great designers use motion with restraint. Every transition should have purpose, improving clarity rather than adding decoration.",
        ]}
      />

      <MotionPrinciples />

      <TimingEasing />

      <MicroInteractions />

      <LoadingStates />

      <PageTransitions />

      <MotionMistakes />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="05"
        title="Layout"
        description="Learn how spacing, grids and structure create clear and balanced interfaces."
        link="/layout"
      />

    </main>
  );
}

export default Motion;