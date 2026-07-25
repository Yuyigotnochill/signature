import { FiArrowUpRight } from "react-icons/fi";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Interfaces should reduce friction, not create it. Every element should have a clear purpose.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "A consistent visual language helps users navigate naturally and builds confidence.",
  },
  {
    number: "03",
    title: "Accessibility",
    description:
      "Great design is inclusive. Every visitor deserves an experience they can use comfortably.",
  },
  {
    number: "04",
    title: "Performance",
    description:
      "Beautiful experiences should also be fast, responsive, and efficient across every device.",
  },
];

function Principles() {
  return (
    <section className="border-t border-neutral-200 py-36">
      <Container>
        <Reveal>
          <SectionHeading
            label="Core Principles"
            title="The foundation of every exceptional digital experience."
            description="Timeless principles matter more than temporary trends. These four ideas guide every thoughtful product."
          />
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          {principles.map((item, index) => (
            <Reveal key={item.number} delay={index * 0.12}>
              <article className="group relative overflow-hidden rounded-3xl border border-neutral-200 bg-white/50 p-10 transition-all duration-500 hover:-translate-y-2 hover:border-neutral-900 hover:shadow-2xl">

                {/* Huge Background Number */}
                <span className="absolute -right-6 -top-10 select-none text-[8rem] font-extrabold text-neutral-200 opacity-30 transition-all duration-500 group-hover:opacity-60">
                  {item.number}
                </span>

                {/* Number */}
                <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                  {item.number}
                </p>

                {/* Title */}
                <div className="mt-6 flex items-center justify-between">
                  <h3 className="text-3xl font-bold tracking-tight">
                    {item.title}
                  </h3>

                  <FiArrowUpRight className="text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-neutral-200"></div>

                {/* Description */}
                <p className="leading-8 text-neutral-600">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Principles;