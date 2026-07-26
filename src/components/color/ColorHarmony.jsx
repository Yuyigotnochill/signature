import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const harmony = [
  {
    title: "Complementary",
    description:
      "Two colors opposite each other on the color wheel create maximum contrast and strong visual impact.",
    colors: ["#2563EB", "#F97316"],
  },
  {
    title: "Analogous",
    description:
      "Neighboring colors create calm, cohesive compositions with smooth visual transitions.",
    colors: ["#2563EB", "#3B82F6", "#60A5FA"],
  },
  {
    title: "Monochromatic",
    description:
      "Different shades of one color produce elegant interfaces with consistent visual identity.",
    colors: ["#1E3A8A", "#2563EB", "#93C5FD"],
  },
  {
    title: "Triadic",
    description:
      "Three evenly spaced colors produce energetic yet balanced compositions when used thoughtfully.",
    colors: ["#2563EB", "#DC2626", "#FACC15"],
  },
];

function ColorHarmony() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Color Harmony
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
              Beautiful palettes
              <br />
              follow relationships.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Harmony isn't about choosing random beautiful colors. It comes
              from selecting colors that naturally work together.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-16">

          {harmony.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <article
                className="
                  grid
                  gap-12
                  border-t
                  border-neutral-200
                  pt-12
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-4">

                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                    {item.description}
                  </p>

                </div>

                <div className="lg:col-span-8">

                  <div className="flex overflow-hidden rounded-[28px] border border-neutral-200">

                    {item.colors.map((color) => (

                      <div
                        key={color}
                        className="flex h-48 flex-1 items-end justify-center"
                        style={{ backgroundColor: color }}
                      >
                        <span
                          className="
                            mb-6
                            rounded-full
                            bg-white/90
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            tracking-[0.2em]
                          "
                        >
                          {color}
                        </span>
                      </div>

                    ))}

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

export default ColorHarmony;