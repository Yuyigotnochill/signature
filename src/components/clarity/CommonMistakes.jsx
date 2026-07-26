import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const mistakes = [
  {
    title: "Too Much Information",
    description:
      "Overloading users with content, options or visuals makes interfaces difficult to understand and slows decision-making.",
  },
  {
    title: "Weak Visual Hierarchy",
    description:
      "When everything looks equally important, users struggle to identify where to focus first.",
  },
  {
    title: "Confusing Labels",
    description:
      "Buttons and navigation should use familiar, descriptive language instead of clever or ambiguous wording.",
  },
];

function CommonMistakes() {
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
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              Avoid confusion
              <br />
              before it happens.
            </h2>

          </div>
        </Reveal>

        <div className="mt-28 space-y-8">

          {mistakes.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <div className="rounded-[32px] border border-neutral-200 bg-white p-10">

                <span className="text-sm font-semibold tracking-[0.35em] text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 text-[21px] leading-[2] text-neutral-600">
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

export default CommonMistakes;