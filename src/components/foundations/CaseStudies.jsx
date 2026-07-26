import Container from "../ui/Container";
import Reveal from "../animations/Reveal";
import { FiArrowUpRight } from "react-icons/fi";

const studies = [
  {
    company: "Apple",
    title: "Designing products that disappear.",
    description:
      "Apple's design philosophy is built around clarity, restraint and intuitive interactions. Every element exists for a reason, creating products that feel effortless to use.",
  },
  {
    company: "Linear",
    title: "Speed is a design feature.",
    description:
      "Linear proves that performance and minimalism can coexist. Every interaction is optimized to reduce friction while maintaining a polished experience.",
  },
  {
    company: "Stripe",
    title: "Complexity made approachable.",
    description:
      "Stripe transforms highly technical workflows into interfaces that feel elegant, readable and approachable without sacrificing capability.",
  },
];

function CaseStudies() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="mb-32">
            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Case Studies
            </p>

            <h2 className="mt-8 max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl xl:text-8xl">
              Learning from the products that shaped modern design.
            </h2>
          </div>
        </Reveal>

        <div className="space-y-28">
          {studies.map((study, index) => (
            <Reveal key={study.company} delay={index * 0.1}>
              <article className="grid gap-12 border-t border-neutral-200 pt-16 lg:grid-cols-12">

                <div className="lg:col-span-3">
                  <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
                    {study.company}
                  </p>
                </div>

                <div className="lg:col-span-6">
                  <h3 className="text-4xl font-bold tracking-[-0.04em]">
                    {study.title}
                  </h3>

                  <p className="mt-8 text-[21px] leading-[2] text-neutral-600">
                    {study.description}
                  </p>
                </div>

                <div className="flex items-start justify-end lg:col-span-3">
                  <button className="group flex items-center gap-3 text-sm uppercase tracking-[0.35em] transition-all hover:gap-5">
                    Explore

                    <FiArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>

              </article>
            </Reveal>
          ))}
        </div>

      </Container>
    </section>
  );
}

export default CaseStudies;