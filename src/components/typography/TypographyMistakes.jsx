import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const mistakes = [
  {
    number: "01",
    title: "Using Too Many Fonts",
    description:
      "Limiting yourself to one or two typefaces creates consistency and strengthens visual identity.",
  },
  {
    number: "02",
    title: "Poor Line Height",
    description:
      "Text packed too tightly becomes tiring to read. Comfortable spacing improves readability immediately.",
  },
  {
    number: "03",
    title: "Weak Hierarchy",
    description:
      "When headings, subheadings and body text look similar, readers struggle to understand where to begin.",
  },
  {
    number: "04",
    title: "Very Long Lines",
    description:
      "Wide paragraphs force the eye to travel too far, making reading slower and more exhausting.",
  },
  {
    number: "05",
    title: "Ignoring Whitespace",
    description:
      "Whitespace is not wasted space. It separates ideas, improves focus and gives typography room to breathe.",
  },
];

function TypographyMistakes() {
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
              Good typography is
              <br />
              often about restraint.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Great interfaces aren't created by adding more. They're created by
              removing distractions and letting content speak clearly.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {mistakes.map((item, index) => (

            <Reveal key={item.number} delay={index * 0.08}>

              <article
                className="
                  rounded-[32px]
                  border
                  border-neutral-200
                  bg-white
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_25px_70px_rgba(0,0,0,.06)]
                "
              >

                <span
                  className="
                    text-sm
                    font-bold
                    tracking-[0.35em]
                    text-neutral-400
                  "
                >
                  {item.number}
                </span>

                <h3 className="mt-8 text-3xl font-bold tracking-[-0.03em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[19px] leading-[1.9] text-neutral-600">
                  {item.description}
                </p>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default TypographyMistakes;