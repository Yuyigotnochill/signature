import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FiArrowDown } from "react-icons/fi";
import { motion } from "framer-motion";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function HeroSection({
  chapter,
  title,
  subtitle,
}) {
  const heroRef = useRef(null);
  const numberRef = useRef(null);
  const lightRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const number = numberRef.current;
    const light = lightRef.current;

    const move = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 35;
      const y = (e.clientY / window.innerHeight - 0.5) * 35;

      gsap.to(hero, {
        x,
        y,
        duration: 1,
        ease: "power3.out",
      });

      gsap.to(number, {
        x: x * 0.35,
        y: y * 0.35,
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.to(light, {
        x: x * 0.7,
        y: y * 0.7,
        duration: 2,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28">

      {/* Background */}
      <div className="absolute inset-0 -z-30 bg-[#f7f4ef]" />

      {/* Light */}
      <div
        ref={lightRef}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-320px]
          -z-20
          h-[900px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-white
          opacity-90
          blur-[220px]
        "
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

      {/* Giant Chapter */}
      <div
        ref={numberRef}
        className="
          pointer-events-none
          absolute
          right-[-30px]
          top-1/2
          -translate-y-1/2
          select-none
        "
      >

        <h1
          className="
            text-[26rem]
            font-black
            leading-none
            tracking-[-0.12em]
            text-black/[0.03]
            xl:text-[34rem]
          "
        >
          {chapter}
        </h1>

      </div>

      <Container>

        <div
          ref={heroRef}
          className="
            relative
            z-10
            grid
            min-h-[80vh]
            items-center
            lg:grid-cols-12
          "
        >

          {/* Left */}
          <div className="lg:col-span-2">

            <Reveal>

              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.45em]
                  text-neutral-500
                "
              >
                Chapter {chapter}
              </p>

              <div className="mt-8 h-px w-20 bg-neutral-300"></div>

            </Reveal>

          </div>

          {/* Right */}
          <div className="mt-16 lg:col-span-10 lg:mt-0">

            <Reveal delay={0.1}>

              <p
                className="
                  mb-8
                  text-sm
                  uppercase
                  tracking-[0.45em]
                  text-neutral-500
                "
              >
                Editorial Series
              </p>

            </Reveal>

            <Reveal delay={0.15}>

              <h1
                className="
                  max-w-[980px]
                  text-[72px]
                  font-black
                  leading-[0.88]
                  tracking-[-0.07em]
                  md:text-[90px]
                  xl:text-[128px]
                "
              >
                {title}
              </h1>

            </Reveal>
            <Reveal delay={0.25}>

<div className="mt-14 max-w-[760px]">

  <p
    className="
      text-[22px]
      leading-[2]
      text-neutral-600
      xl:text-[24px]
    "
  >
    {subtitle}
  </p>

</div>

</Reveal>

<Reveal delay={0.35}>

<div className="mt-20 flex flex-wrap items-center gap-8">



  <div className="flex items-center gap-5">

    <div className="h-px w-20 bg-neutral-300"></div>

    <span
      className="
        text-xs
        uppercase
        tracking-[0.35em]
        text-neutral-400
      "
    >
      Estimated Reading
    </span>

    <span
      className="
        text-sm
        font-semibold
        tracking-wide
      "
    >
      12 MIN
    </span>

  </div>

</div>

</Reveal>

<Reveal delay={0.45}>

<div
  className="
    mt-32
    flex
    items-center
    gap-5
  "
>

  <div className="h-px w-28 bg-neutral-300"></div>

  <span
    className="
      text-xs
      uppercase
      tracking-[0.45em]
      text-neutral-400
    "
  >
    Scroll to Explore
  </span>

  <motion.button
  onClick={() => {
    const nextSection = document.getElementById("essay-section");

    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
  animate={{ y: [0, 8, 0] }}
  transition={{
    repeat: Infinity,
    duration: 1.8,
    ease: "easeInOut",
  }}
  className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-neutral-300
    transition-colors
    duration-300
    hover:border-black
  "
>
  <FiArrowDown className="text-lg" />
</motion.button>

</div>

</Reveal>

</div>

</div>

</Container>
      {/* Bottom Fade */}
      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-40
          bg-gradient-to-b
          from-transparent
          to-[#f7f4ef]
        "
      />

      {/* Decorative Side Label */}
      <div
        className="
          pointer-events-none
          absolute
          left-8
          top-1/2
          hidden
          -translate-y-1/2
          -rotate-90
          xl:block
        "
      >
        <span
          className="
            text-[11px]
            uppercase
            tracking-[0.6em]
            text-neutral-300
          "
        >
          SIGNATURE • DESIGN HANDBOOK
        </span>
      </div>

    </section>
  );
}

export default HeroSection;