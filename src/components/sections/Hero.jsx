import { useEffect, useRef } from "react";
import gsap from "gsap";

import Button from "../ui/Button";
import Reveal from "../animations/Reveal";

function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const element = heroRef.current;

    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;

      gsap.to(element, {
        x,
        y,
        duration: 0.8,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-220px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-white/70 blur-[180px]" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-stone-200/40 blur-[160px]" />
      </div>

      {/* Editorial Grid */}
      <div className="mx-auto grid w-full max-w-[1600px] grid-cols-12 px-8 md:px-14 lg:px-24">

        {/* Left breathing space */}
        <div className="hidden lg:block lg:col-span-2"></div>

        {/* Hero Content */}
        <div
  ref={heroRef}
 className="col-span-12 lg:col-span-8 will-change-transform"
>

          <Reveal>
            <div className="mb-10 flex items-center gap-4">

              <div className="h-px w-16 bg-neutral-400"></div>

              <p className="text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
                THE DESIGN HANDBOOK
              </p>

            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="max-w-3xl text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-6xl xl:text-7xl">
              Understanding the
              <br />
              principles behind
              <br />
              thoughtful digital
              <br />
              experiences.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 h-px w-24 bg-neutral-300"></div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

              <p className="max-w-xl text-base leading-8 text-neutral-600">
                Signature is a curated editorial experience exploring modern web
                design, typography, accessibility, motion, and performance.
                Built to inspire designers and developers who care about craft.
              </p>

              <Button>
                Start Reading →
              </Button>

            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-20 flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-neutral-400">

              <span className="h-px w-16 bg-neutral-300"></span>

              <span>Scroll to Explore</span>

            </div>
          </Reveal>

        </div>

      </div>

    </section>
  );
}

export default Hero;