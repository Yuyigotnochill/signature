import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";
import Magnetic from "../Magnetic";
import Tilt from "../Tilt";

const principles = [
  {
    number: "01",
    title: "Clarity",
    link: "/clarity",
    description:
      "Every interface should remove friction. Users should never have to guess where to click or what comes next.",
  },
  {
    number: "02",
    title: "Consistency",
    link: "/consistency",
    description:
      "Consistent layouts, spacing and interactions create trust while making products easier to understand.",
  },
  {
    number: "03",
    title: "Accessibility",
    link: "/accessibility",
    description:
      "Design should welcome everyone. Inclusive experiences aren't optional—they're fundamental.",
  },
  {
    number: "04",
    title: "Performance",
    link: "/performance",
    description:
      "Fast interfaces feel premium. Speed is part of the design, not just an engineering concern.",
  },
];

function Principles() {
  return (
    <section className="py-40">
      <Container>
        <Reveal>
          <SectionHeading
            label="Core Principles"
            title="The foundation of exceptional digital products."
            description="Timeless principles outlast trends. Every memorable experience begins with these fundamentals."
          />
        </Reveal>

        <div className="mt-24 grid gap-10 md:grid-cols-2">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.1}>
              <Tilt>
                <Magnetic strength={25}>
                <Link
  to={item.link}
  className="block"
  onClick={() => console.log("Clicked:", item.link)}
>

                    <article
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-neutral-200
                        bg-white/70
                        p-12
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        hover:-translate-y-3
                        hover:border-black/20
                        hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                      "
                    >

                      {/* Background Number */}
                      <span
                        className="
                          absolute
                          right-8
                          bottom-2
                          text-[7rem]
                          font-black
                          tracking-[-0.08em]
                          text-neutral-100
                          pointer-events-none
                          select-none
                          transition-all
                          duration-500
                          group-hover:scale-110
                          group-hover:text-neutral-200
                        "
                      >
                        {item.number}
                      </span>

                      {/* Small Number */}
                      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-400">
                        {item.number}
                      </p>

                      {/* Title */}
                      <div className="mt-8 flex items-center justify-between">
                        <h3 className="text-3xl font-bold tracking-tight">
                          {item.title}
                        </h3>

                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="my-8 h-px bg-neutral-200"></div>

                      {/* Description */}
                      <p className="text-lg leading-9 text-neutral-600">
                        {item.description}
                      </p>

                    </article>

                  </Link>
                </Magnetic>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Principles;