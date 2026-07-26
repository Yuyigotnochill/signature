import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import DesignSystems from "../components/consistency/DesignSystems";
import ReusableComponents from "../components/consistency/ReusableComponents";
import CommonMistakes from "../components/consistency/CommonMistakes";

import Summary from "../components/consistency/Summary";
import Takeaways from "../components/consistency/Takeaways";

import ContinueReading from "../components/common/ContinueReading";

function Consistency() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="07"
        title="Consistency"
        subtitle="Consistency builds trust through predictable experiences."
      />

      <EssaySection
        chapter="07"
        eyebrow="Why Consistency Matters"
        title="People trust interfaces that behave predictably."
        lead="Consistency removes uncertainty by making every interaction feel familiar."
        body={[
          "Consistent interfaces allow users to focus on completing tasks instead of relearning how the product works.",
          "Shared components, spacing, typography and interaction patterns create experiences that feel reliable and professional.",
          "When every screen follows the same visual language, products become easier to navigate and significantly easier to maintain.",
        ]}
      />

      <DesignSystems />

      <ReusableComponents />

      <CommonMistakes />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="08"
        title="Accessibility"
        description="Learn how inclusive design ensures every user can successfully experience digital products."
        link="/accessibility"
      />

    </main>
  );
}

export default Consistency;