import { useEffect, useRef } from "react";
import gsap from "gsap";

function Spotlight() {
  const spotlight = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(spotlight.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      ref={spotlight}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[-1]
        hidden
        h-[450px]
        w-[450px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        lg:block
      "
      style={{
        background:
          "radial-gradient(circle, rgba(255,255,255,.28) 0%, rgba(255,255,255,.12) 35%, transparent 70%)",
        filter: "blur(40px)",
      }}
    />
  );
}

export default Spotlight;