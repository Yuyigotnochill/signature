import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ value }) {
  const ref = useRef(null);

  useEffect(() => {
    const target = parseInt(value.replace(/\D/g, "")) || 0;

    const obj = { count: 0 };

    gsap.to(obj, {
      count: target,
      duration: 2,
      ease: "power2.out",
      snap: { count: 1 },
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        once: true,
      },
      onUpdate: () => {
        if (ref.current) {
          ref.current.textContent =
            Math.round(obj.count) + value.replace(/[0-9]/g, "");
        }
      },
    });
  }, [value]);

  return <span ref={ref}>0</span>;
}

export default AnimatedCounter;