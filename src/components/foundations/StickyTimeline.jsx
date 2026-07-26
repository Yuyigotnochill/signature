import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const timeline = [
  {
    year: "1991",
    title: "The First Website",
    text: "Tim Berners-Lee published the world's first website, proving that information could be shared globally through the web.",
  },
  {
    year: "2007",
    title: "The Mobile Revolution",
    text: "The smartphone fundamentally changed interface design. Touch became the primary interaction model.",
  },
  {
    year: "2014",
    title: "Material Design",
    text: "Google introduced a comprehensive design language that brought consistency across products and platforms.",
  },
  {
    year: "2025",
    title: "AI Interfaces",
    text: "Interfaces evolved beyond static screens into adaptive systems that understand context and intent.",
  },
];

function StickyTimeline() {
  return (
    <section className="py-52">

      <Container>

        <Reveal>

          <div className="mb-32">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Evolution
            </p>

            <h2
              className="
                mt-8
                max-w-4xl
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              The moments that shaped digital design.
            </h2>

          </div>

        </Reveal>

        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-[145px] top-0 h-full w-px bg-neutral-200"></div>

          <div className="space-y-40">
          {timeline.map((item, index) => (

<Reveal
  key={item.year}
  delay={index * 0.1}
>

  <article
    className="
      relative
      grid
      gap-16
      lg:grid-cols-12
      lg:items-start
    "
  >

    {/* Year */}
    <div className="lg:col-span-2">

      <h3
        className="
          sticky
          top-36
          text-[64px]
          font-black
          leading-none
          tracking-[-0.06em]
          text-black
          xl:text-[82px]
        "
      >
        {item.year}
      </h3>

    </div>

    {/* Timeline Dot */}
    <div
      className="
        absolute
        left-[140px]
        top-8
        hidden
        h-3
        w-3
        rounded-full
        bg-black
        lg:block
      "
    />

    {/* Content */}
    <div className="lg:col-span-10">

      <div
        className={`
          ${
            index % 2 === 0
              ? "max-w-3xl"
              : "ml-auto max-w-3xl"
          }
        `}
      >

        <span
          className="
            text-xs
            uppercase
            tracking-[0.4em]
            text-neutral-500
          "
        >
          Milestone
        </span>

        <h4
          className="
            mt-5
            text-4xl
            font-bold
            leading-tight
            tracking-[-0.04em]
          "
        >
          {item.title}
        </h4>

        <p
          className="
            mt-8
            text-[21px]
            leading-[2]
            text-neutral-600
          "
        >
          {item.text}
        </p>

        <div className="mt-10 h-px w-24 bg-neutral-300"></div>

      </div>

    </div>

  </article>

</Reveal>

))}
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
  h-32
  bg-gradient-to-b
  from-transparent
  to-[#f7f4ef]
"
/>

</section>
);
}

export default StickyTimeline;