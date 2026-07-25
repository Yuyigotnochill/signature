import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

function Reveal({
  children,
  y = 60,
  delay = 0,
  duration = 0.9,
}) {
  const ref = useRef(null);

  useGSAP(() => {
    gsap.from(ref.current, {
      y,
      opacity: 0,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, { scope: ref });

  return <div ref={ref}>{children}</div>;
}

export default Reveal;