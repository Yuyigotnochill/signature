import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const pairs = [
  {
    heading: "General Sans",
    body: "Merriweather",
    title: "Modern meets Editorial",
    description:
      "A clean geometric sans paired with a classic serif creates strong contrast while maintaining excellent readability.",
  },
  {
    heading: "Inter",
    body: "IBM Plex Serif",
    title: "Digital meets Tradition",
    description:
      "Inter provides clarity for interfaces while IBM Plex Serif introduces warmth for longer reading experiences.",
  },
  {
    heading: "Helvetica",
    body: "Georgia",
    title: "Classic Balance",
    description:
      "A timeless pairing where neutrality and familiarity work together across both digital and print experiences.",
  },
];

function FontPairing() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Font Pairing
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
              Great typography
              <br />
              happens in pairs.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Most interfaces rely on two complementary typefaces. One provides
              structure and hierarchy, while the other creates rhythm and
              readability.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-14">

          {pairs.map((pair, index) => (

            <Reveal key={pair.heading} delay={index * 0.08}>

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

                {/* Fonts */}

                <div className="lg:col-span-5">

                  <p className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                    Heading Typeface
                  </p>

                  <h3 className="mt-5 text-5xl font-black tracking-[-0.05em]">
                    {pair.heading}
                  </h3>

                  <p className="mt-12 text-sm uppercase tracking-[0.35em] text-neutral-400">
                    Body Typeface
                  </p>

                  <p
                    className="
                      mt-5
                      text-4xl
                      italic
                      text-neutral-700
                    "
                  >
                    {pair.body}
                  </p>

                </div>

                {/* Description */}

                <div className="lg:col-span-7">

                  <h4 className="text-3xl font-bold tracking-[-0.03em]">
                    {pair.title}
                  </h4>

                  <p className="mt-8 max-w-2xl text-[20px] leading-[2] text-neutral-600">
                    {pair.description}
                  </p>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default FontPairing;