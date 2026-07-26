import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { lenis } from "./SmoothScroll";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
      });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;