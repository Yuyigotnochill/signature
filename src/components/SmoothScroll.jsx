import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export let lenis;

function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}

export default SmoothScroll;