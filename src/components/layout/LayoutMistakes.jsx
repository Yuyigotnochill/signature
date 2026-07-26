import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const mistakes = [
  {
    number: "01",
    title: "Ignoring the Grid",
    description:
      "Without a consistent grid, interfaces quickly become cluttered and difficult to scan. Alignment should never feel accidental.",
  },
  {
    number: "02",
    title: "Crowded Content",
    description:
      "Trying to fit too much information into a small space overwhelms users. White space is just as important as content.",
  },
  {
    number: "03",
    title: "Weak Hierarchy",
    description:
      "When every heading, paragraph and button looks equally important, users don't know where to focus first.",
  },
  {
    number: "04",
    title: "Poor Responsiveness",
    description:
      "A layout that works only on desktop fails modern users. Every interface should adapt gracefully across devices.",
  },
  {
    number: "05",
    title: "Inconsistent Spacing",
    description:
      "Random margins and padding make interfaces feel unfinished. Consistent spacing creates rhythm and professionalism.",
  },
];

function LayoutMistakes() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Common Mistakes
            </p>

            <h2
              className="
                mt-8
                text-6xl
                md:text-7xl
                xl:text-8xl
                font-black
                tracking-[-0.06em]
                leading-[0.9]
              "
            >
              Structure fails
              <br />
              before style does.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Beautiful colors and typography cannot rescue a poor layout.
              Strong structure is the foundation that makes every visual
              decision work together.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 space-y-8">

          {mistakes.map((item, index) => (

            <Reveal
              key={item.number}
              delay={index * 0.08}
            >

              <article
                className="
                  rounded-[34px]
                  border
                  border-neutral-200
                  bg-white
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                "
              >

                <div className="grid gap-8 lg:grid-cols-12">

                  <div className="lg:col-span-2">

                    <span
                      className="
                        text-5xl
                        font-black
                        tracking-[-0.05em]
                        text-neutral-300
                      "
                    >
                      {item.number}
                    </span>

                  </div>

                  <div className="lg:col-span-10">

                    <h3 className="text-3xl font-black tracking-[-0.03em]">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default LayoutMistakes;