import HeroSection from "../components/common/HeroSection";
import EssaySection from "../components/common/EssaySection";

import GridSystems from "../components/layout/GridSystems";
import WhiteSpace from "../components/layout/WhiteSpace";
import VisualHierarchy from "../components/layout/VisualHierarchy";
import Alignment from "../components/layout/Alignment";
import ResponsiveDesign from "../components/layout/ResponsiveDesign";
import LayoutMistakes from "../components/layout/LayoutMistakes";
import Summary from "../components/layout/Summary";
import Takeaways from "../components/layout/Takeaways";
import ContinueReading from "../components/common/ContinueReading";

function Layout() {
  return (
    <main className="overflow-x-hidden">

      <HeroSection
        chapter="05"
        title="Layout"
        subtitle="Structure transforms content into clarity."
      />

      <EssaySection
        chapter="05"
        eyebrow="Why Layout Matters"
        title="Good layout disappears behind the experience."
        lead="Strong layouts help people understand information without thinking about structure."
        body={[
          "Layout is the invisible framework that organizes every interface. It creates order, improves readability and helps users understand relationships between content.",
          "Grids, spacing and alignment work together to produce rhythm and consistency. These systems allow products to scale without becoming visually chaotic.",
          "The best layouts feel effortless. They guide attention naturally, making even complex information appear simple and approachable.",
        ]}
      />

      <GridSystems />

      <WhiteSpace />

      <VisualHierarchy />

      <Alignment />

      <ResponsiveDesign />

      <LayoutMistakes />

      <Summary />

      <Takeaways />

      

    </main>
  );
}

export default Layout;