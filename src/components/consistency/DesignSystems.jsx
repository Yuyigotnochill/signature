import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const systems = [
  {
    title: "Shared Components",
    description:
      "Reusable components create a consistent experience while reducing development time and maintenance.",
  },
  {
    title: "Design Tokens",
    description:
      "Colors, typography, spacing and shadows should be defined once and reused throughout the product.",
  },
  {
    title: "Unified Patterns",
    description:
      "Buttons, forms, cards and navigation should behave the same way on every page to build familiarity.",
  },
];

function DesignSystems() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Design Systems
            </p>

            <h2
              className="
                mt-8
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              Build once.
              <br />
              Use everywhere.
            </h2>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 lg:grid-cols-3">

          {systems.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.08}
            >

              <div className="rounded-[32px] border border-neutral-200 bg-white p-10">

                <span className="text-sm font-semibold tracking-[0.35em] text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                  {item.description}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default DesignSystems;