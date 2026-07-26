import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const hierarchy = [
  {
    label: "H1",
    className:
      "text-7xl md:text-8xl font-black tracking-[-0.07em] leading-[0.9]",
    text: "The Primary Heading",
  },
  {
    label: "H2",
    className:
      "text-5xl md:text-6xl font-bold tracking-[-0.05em] leading-tight",
    text: "Supporting Section Heading",
  },
  {
    label: "H3",
    className:
      "text-3xl font-bold tracking-[-0.03em]",
    text: "Subsection Heading",
  },
  {
    label: "BODY",
    className:
      "text-[21px] leading-[2] text-neutral-600 max-w-3xl",
    text:
      "Body text should be effortless to read. Proper spacing, line height and width create rhythm that allows readers to absorb information without fatigue.",
  },
  {
    label: "CAPTION",
    className:
      "text-sm uppercase tracking-[0.35em] text-neutral-400",
    text: "Supporting information",
  },
];

function HierarchyGuide() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Hierarchy
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
              Typography guides
              <br />
              attention before words.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Readers don't process every word equally. Strong hierarchy creates
              a visual path that tells the eye where to begin and where to go
              next.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-16">

          {hierarchy.map((item, index) => (

            <Reveal key={item.label} delay={index * 0.08}>

              <div
                className="
                  grid
                  gap-8
                  border-t
                  border-neutral-200
                  pt-10
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-2">

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.4em]
                      text-neutral-400
                    "
                  >
                    {item.label}
                  </span>

                </div>

                <div className="lg:col-span-10">

                  <div className={item.className}>
                    {item.text}
                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default HierarchyGuide;