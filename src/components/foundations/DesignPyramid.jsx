import { useState } from "react";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const layers = [
  {
    id: 0,
    title: "Structure",
    subtitle: "The foundation of every interface.",
    description:
      "Before colors or typography, great design begins with understanding user goals, hierarchy, information architecture and layout.",
  },
  {
    id: 1,
    title: "Visual Design",
    subtitle: "Making information understandable.",
    description:
      "Typography, spacing, color and imagery transform structure into something users can understand immediately.",
  },
  {
    id: 2,
    title: "Interaction",
    subtitle: "Helping users accomplish tasks.",
    description:
      "Motion, feedback and navigation make products feel intuitive instead of confusing.",
  },
  {
    id: 3,
    title: "Emotion",
    subtitle: "Creating memorable experiences.",
    description:
      "The highest level of design creates trust, delight and emotional connection beyond functionality.",
  },
];

function DesignPyramid() {
  const [active, setActive] = useState(3);

  return (
    <section className="py-56">

      <Container>

        <Reveal>

          <div className="mb-28">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Design Pyramid
            </p>

            <h2
              className="
                mt-8
                max-w-5xl
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              Every exceptional product is built layer by layer.
            </h2>

          </div>

        </Reveal>

        <div className="grid gap-24 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <Reveal delay={0.2}>

            <div className="flex items-center justify-center">
            <div className="w-full max-w-lg">

{layers
  .slice()
  .reverse()
  .map((layer, reverseIndex) => {
    const originalIndex = 3 - reverseIndex;

    return (
      <div
        key={layer.id}
        onMouseEnter={() => setActive(originalIndex)}
        className={`
          mx-auto
          mb-3
          flex
          cursor-pointer
          items-center
          justify-center
          rounded-md
          transition-all
          duration-500
          ${
            active === originalIndex
              ? "bg-black text-white shadow-2xl scale-[1.02]"
              : "bg-neutral-200 text-black hover:bg-neutral-300"
          }
        `}
        style={{
          width: `${180 + originalIndex * 90}px`,
          height: "72px",
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <span
          className="
            mt-5
            text-lg
            font-semibold
            tracking-wide
          "
        >
          {layer.title}
        </span>
      </div>
    );
  })}

</div>

</div>

</Reveal>

{/* RIGHT SIDE */}

<Reveal delay={0.3}>

<div className="flex items-center">

<div>

<span
  className="
    text-xs
    uppercase
    tracking-[0.45em]
    text-neutral-500
  "
>
  Layer 0{active + 1}
</span>

<h3
  className="
    mt-6
    text-5xl
    font-black
    tracking-[-0.05em]
  "
>
  {layers[active].title}
</h3>

<p
  className="
    mt-6
    max-w-xl
    text-2xl
    leading-[1.8]
    text-neutral-500
  "
>
  {layers[active].subtitle}
</p>

<div className="my-10 h-px w-24 bg-neutral-300"></div>

<p
  className="
    max-w-xl
    text-lg
    leading-9
    text-neutral-600
  "
>
  {layers[active].description}
</p>

</div>

</div>

</Reveal>

</div>
</Container>

{/* Decorative Background Glow */}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    -z-10
    h-[700px]
    w-[700px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-white/60
    blur-[180px]
  "
/>

{/* Bottom Divider */}
<div className="mt-40">
  <Container>
    <div className="h-px w-full bg-neutral-200"></div>
  </Container>
</div>

</section>
);
}

export default DesignPyramid;