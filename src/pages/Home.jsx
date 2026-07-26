
import Hero from "../components/sections/Hero";
import Introduction from "../components/sections/Introduction";
import Statement from "../components/sections/Statement";
import Principles from "../components/sections/Principles";
import Stats from "../components/sections/Stats";
import Chapters from "../components/sections/Chapters";
import Quote from "../components/sections/Quote";
import Timeline from "../components/sections/Timeline";

function Home() {
  return (
    <>
      

      <main className="relative overflow-x-hidden">
        <Hero />
        <Introduction />
        <Statement />
        <Principles />
        <Stats />
        <Chapters />
        <Quote />
        <Timeline />
      </main>

    
    </>
  );
}

export default Home;