import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const parts = [
  {
    name: "Ascender",
    description:
      "The part of lowercase letters that rises above the x-height, such as in b, d and h.",
  },
  {
    name: "X-Height",
    description:
      "The height of the lowercase x. It largely determines readability and visual size.",
  },
  {
    name: "Baseline",
    description:
      "The invisible line on which most letters sit, creating consistent alignment.",
  },
  {
    name: "Descender",
    description:
      "The portion of letters like g, p and y that extends below the baseline.",
  },
];

function FontAnatomy() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Anatomy
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
              Every letter has
              <br />
              a hidden structure.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Understanding typography begins with understanding the anatomy of
              individual letterforms. These invisible details influence
              readability, rhythm and personality.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 grid gap-20 lg:grid-cols-12">

          {/* Diagram */}

          <Reveal className="lg:col-span-6">

            <div
              className="
                relative
                flex
                h-[620px]
                items-center
                justify-center
                rounded-[40px]
                border
                border-neutral-200
                bg-white
              "
            >

              <span className="text-[280px] font-black leading-none">
                a
              </span>

              <div className="absolute top-24 left-10 right-10 border-t border-dashed border-neutral-300">
                <span className="absolute -top-7 left-0 text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Ascender
                </span>
              </div>

              <div className="absolute top-1/2 left-10 right-10 border-t border-neutral-300">
                <span className="absolute -top-7 left-0 text-xs uppercase tracking-[0.3em] text-neutral-400">
                  X-Height
                </span>
              </div>

              <div className="absolute bottom-36 left-10 right-10 border-t border-black">
                <span className="absolute -top-7 left-0 text-xs uppercase tracking-[0.3em] text-black">
                  Baseline
                </span>
              </div>

              <div className="absolute bottom-16 left-10 right-10 border-t border-dashed border-neutral-300">
                <span className="absolute -top-7 left-0 text-xs uppercase tracking-[0.3em] text-neutral-400">
                  Descender
                </span>
              </div>

            </div>

          </Reveal>

          {/* Explanation */}

          <div className="space-y-12 lg:col-span-6">

            {parts.map((part, index) => (

              <Reveal key={part.name} delay={index * 0.08}>

                <div className="border-b border-neutral-200 pb-10">

                  <h3 className="text-3xl font-bold tracking-[-0.03em]">
                    {part.name}
                  </h3>

                  <p className="mt-5 text-[20px] leading-[2] text-neutral-600">
                    {part.description}
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

export default FontAnatomy;