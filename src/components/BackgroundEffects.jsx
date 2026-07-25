import { useEffect, useRef } from "react";
import gsap from "gsap";

function BackgroundEffects() {
  const glow1 = useRef(null);
  const glow2 = useRef(null);
  const glow3 = useRef(null);

  useEffect(() => {
    gsap.to(glow1.current, {
      x: 40,
      y: 25,
      duration: 18,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glow2.current, {
      x: -35,
      y: -20,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    gsap.to(glow3.current, {
      x: 30,
      y: -30,
      duration: 26,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f7f4ef]" />

      {/* Hero Glow */}
      <div
        ref={glow1}
        className="absolute left-1/2 top-[-220px] h-[850px] w-[850px] -translate-x-1/2 rounded-full bg-white/90 blur-[200px]"
      />

      {/* Left Glow */}
      <div
        ref={glow2}
        className="absolute left-[-220px] top-[35%] h-[550px] w-[550px] rounded-full bg-stone-200/45 blur-[180px]"
      />

      {/* Right Glow */}
      <div
        ref={glow3}
        className="absolute right-[-180px] top-20 h-[500px] w-[500px] rounded-full bg-amber-100/35 blur-[180px]"
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,.12) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      {/* Paper texture */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(0,0,0,.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,.06) 1px, transparent 1px)
          `,
          backgroundSize: "12px 12px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 55%, rgba(0,0,0,.035) 100%)",
        }}
      />
    </div>
  );
}

export default BackgroundEffects;