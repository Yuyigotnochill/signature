import { useEffect } from "react";
import Lenis from "lenis";

export let lenis;

function SmoothScroll() {
  useEffect(() => {
    lenis = new Lenis({
      smoothWheel: true,
      duration: 0.7,
      wheelMultiplier: 1,
      touchMultiplier: 1,
      syncTouch: true,
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