import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import CoreWebVitals from "../components/performance/CoreWebVitals";
import ImageOptimization from "../components/performance/ImageOptimization";
import CodeSplitting from "../components/performance/CodeSplitting";

import Summary from "../components/performance/Summary";
import Takeaways from "../components/performance/Takeaways";

import FinalMessage from "../components/common/FinalMessage";

function Performance() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="09"
        title="Performance"
        subtitle="Fast experiences create happier users."
      />

      <EssaySection
        chapter="09"
        eyebrow="Why Performance Matters"
        title="Speed is a feature."
        lead="Every second saved improves usability, engagement and user satisfaction."
        body={[
          "Performance is one of the most important aspects of modern web design. Fast websites feel responsive, trustworthy and enjoyable to use.",
          "Optimizing images, reducing unnecessary JavaScript and delivering content efficiently creates better experiences across every device.",
          "Good performance is not only about speed—it is about respecting the user's time.",
        ]}
      />

      <CoreWebVitals />

      <ImageOptimization />

      <CodeSplitting />

      <Summary />

      <Takeaways />

      <FinalMessage />

    </main>
  );
}

export default Performance;