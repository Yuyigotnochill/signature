import { useEffect, useRef } from "react";
import gsap from "gsap";

function Cursor() {
  const cursor = useRef(null);

  useEffect(() => {
    const move = (e) => {
      gsap.to(cursor.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power3.out",
      });
    };

    const grow = () => {
      gsap.to(cursor.current, {
        scale: 2.5,
        backgroundColor: "#161616",
        borderColor: "#161616",
        opacity: 0.15,
        duration: 0.25,
      });
    };

    const shrink = () => {
      gsap.to(cursor.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "#161616",
        opacity: 1,
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", move);

    const hoverElements = document.querySelectorAll(
      "button, a, .group"
    );

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <div
      ref={cursor}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden
        h-6
        w-6
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        border
        border-black
        lg:block
      "
    />
  );
}

export default Cursor;