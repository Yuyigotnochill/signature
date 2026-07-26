import { useEffect, useState } from "react";
import { gsap } from "gsap";

function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setTimeout(() => setVisible(false), 300),
    });

    tl.from(".loader-logo", {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        ".loader-line",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(".loader", {
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
      });
  }, []);

  if (!visible) return null;

  return (
    <div className="loader fixed inset-0 z-[99999] flex items-center justify-center bg-[#f6f3ee]">

      <div className="text-center">

        <h1 className="loader-logo text-5xl font-bold tracking-[0.35em]">
          SIGNATURE
        </h1>

        <div className="loader-line mx-auto mt-8 h-px w-40 bg-black"></div>

      </div>

    </div>
  );
}

export default Loader;