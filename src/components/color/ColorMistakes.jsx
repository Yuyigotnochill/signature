import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const mistakes = [
  {
    number: "01",
    title: "Too Many Accent Colors",
    description:
      "Using several bright accent colors at once creates visual noise and weakens hierarchy. Choose one primary accent and use it consistently.",
  },
  {
    number: "02",
    title: "Poor Contrast",
    description:
      "Light text on light backgrounds or dark text on dark backgrounds reduces readability and makes interfaces inaccessible.",
  },
  {
    number: "03",
    title: "Relying Only on Color",
    description:
      "Users shouldn't need color alone to understand information. Combine it with labels, icons or typography for clarity.",
  },
  {
    number: "04",
    title: "Oversaturated Interfaces",
    description:
      "When everything is colorful, nothing stands out. Reserve strong colors for moments that deserve attention.",
  },
  {
    number: "05",
    title: "Ignoring Brand Consistency",
    description:
      "Changing color palettes from page to page weakens recognition. Consistent color builds trust and identity.",
  },
];

function ColorMistakes() {
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
              Color works best
              <br />
              with restraint.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Effective color isn't about using more colors. It's about making
              thoughtful decisions that improve communication and usability.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {mistakes.map((item, index) => (

            <Reveal key={item.number} delay={index * 0.08}>

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

                <p
                  className="
                    mt-6
                    text-[20px]
                    leading-[2]
                    text-neutral-600
                  "
                >
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

export default ColorMistakes;