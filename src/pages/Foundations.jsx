import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";
import ManifestoSection from "../components/foundations/ManifestoSection";
import StickyTimeline from "../components/foundations/StickyTimeline";
import DesignPyramid from "../components/foundations/DesignPyramid";
import Principles from "../components/foundations/Principles";
import CaseStudies from "../components/foundations/CaseStudies";
import Books from "../components/foundations/Books";
import Takeaways from "../components/foundations/Takeaways";
import ContinueReading from "../components/common/ContinueReading";
import Summary from "../components/foundations/Summary";

function Foundations() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="01"
        title="Foundations"
        subtitle="The invisible rules behind every great interface."
      />

<EssaySection
  chapter="01"
  eyebrow="Why Foundations Matter"
  title="Design isn't about making things beautiful."
  lead="Every remarkable interface begins with thoughtful decisions long before colors, typography, or animation."
  body={[
    "Great digital products don't begin with colors or animations. They begin with understanding people, reducing complexity, and making every interaction feel effortless.",
    "Every decision—from spacing and typography to hierarchy and motion—exists to help users accomplish their goals with confidence.",
    "The strongest interfaces are often the ones you barely notice. Their quality comes from clarity, consistency, and thoughtful execution rather than visual excess.",
  ]}
/>

      <ManifestoSection />

      <StickyTimeline />

      <DesignPyramid />

      <Principles />

      <CaseStudies />

      <Books />

      <Summary />

      <Takeaways />

      <ContinueReading
        chapter="02"
        title="Typography"
        description="Discover how hierarchy, rhythm and spacing transform ordinary text into exceptional reading experiences."
        link="/typography"
      />

    </main>
  );
}

export default Foundations;