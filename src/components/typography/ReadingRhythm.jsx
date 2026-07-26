import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const principles = [
  {
    title: "Line Height",
    value: "1.6–2.0",
    description:
      "Generous line spacing reduces visual fatigue and makes long-form reading feel effortless.",
  },
  {
    title: "Measure",
    value: "60–75",
    description:
      "Keeping paragraphs between sixty and seventy-five characters per line creates the most comfortable reading experience.",
  },
  {
    title: "Whitespace",
    value: "Breathing Room",
    description:
      "Space isn't empty. It separates ideas, improves hierarchy and allows typography to breathe.",
  },
];

function ReadingRhythm() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Reading Rhythm
            </p>

            <h2
              className="
                mt-8
                text-6xl
                md:text-7xl
                xl:text-8xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              Reading should feel
              <br />
              invisible.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Good typography doesn't demand attention. It quietly guides the
              reader through content using rhythm, spacing and consistent visual
              flow.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 grid gap-16 lg:grid-cols-12">

          {/* Example */}

          <Reveal className="lg:col-span-7">

            <div
              className="
                rounded-[40px]
                border
                border-neutral-200
                bg-white
                p-14
              "
            >

              <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                Example Paragraph
              </p>

              <p className="mt-10 text-[22px] leading-[2] text-neutral-700">
                Great typography feels effortless because every decision has
                already been made for the reader. Comfortable line lengths,
                generous spacing and consistent hierarchy allow people to focus
                on meaning rather than deciphering the layout itself.
              </p>

            </div>

          </Reveal>

          {/* Principles */}

          <div className="space-y-10 lg:col-span-5">

            {principles.map((item, index) => (

              <Reveal key={item.title} delay={index * 0.08}>

                <div className="border-b border-neutral-200 pb-10">

                  <p className="text-xs uppercase tracking-[0.35em] text-neutral-400">
                    {item.value}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[19px] leading-[1.9] text-neutral-600">
                    {item.description}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default ReadingRhythm;