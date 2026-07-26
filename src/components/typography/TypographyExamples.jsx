import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const examples = [
  {
    company: "Apple",
    title: "Clarity Through Simplicity",
    description:
      "Apple relies on generous spacing, restrained typography and strong hierarchy. Every heading is deliberate, allowing products to remain the primary focus.",
  },
  {
    company: "Notion",
    title: "Typography as the Interface",
    description:
      "Notion minimizes visual decoration. Instead, typography creates structure, making documentation and note-taking feel calm and organized.",
  },
  {
    company: "Stripe",
    title: "Hierarchy for Developers",
    description:
      "Stripe's documentation combines bold headings, comfortable line lengths and generous whitespace, making complex technical content surprisingly approachable.",
  },
];

function TypographyExamples() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Real World Examples
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
              Great products let
              <br />
              typography lead.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              The world's best interfaces don't rely on flashy effects.
              They rely on thoughtful typography that quietly guides users
              through every interaction.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-14">

          {examples.map((item, index) => (

            <Reveal key={item.company} delay={index * 0.08}>

              <article
                className="
                  grid
                  gap-10
                  border-t
                  border-neutral-200
                  py-12
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-3">

                  <span
                    className="
                      text-5xl
                      font-black
                      tracking-[-0.05em]
                    "
                  >
                    {item.company}
                  </span>

                </div>

                <div className="lg:col-span-9">

                  <h3 className="text-3xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-6 max-w-3xl text-[20px] leading-[2] text-neutral-600">
                    {item.description}
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

export default TypographyExamples;