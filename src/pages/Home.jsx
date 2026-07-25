import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Statement from "../components/sections/Statement";
import Principles from "../components/sections/Principles";
import Chapters from "../components/sections/Chapters";
import Quote from "../components/sections/Quote";
import Timeline from "../components/sections/Timeline";
import Stats from "../components/sections/Stats";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Introduction />

        <Statement />

        <Principles />

        <Stats />

        <Chapters />

        <Quote />

        <Timeline />
      </main>

      <Footer />
    </>
  );
}

export default Home;