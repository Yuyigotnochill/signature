import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const mistakes = [
  {
    number: "01",
    title: "Animating Everything",
    description:
      "Not every element needs to move. Excessive animation distracts users and reduces clarity instead of improving it.",
  },
  {
    number: "02",
    title: "Slow Transitions",
    description:
      "Animations that last too long make interfaces feel sluggish. Motion should support speed, not slow users down.",
  },
  {
    number: "03",
    title: "Inconsistent Timing",
    description:
      "Different durations and easing styles across the same product make the experience feel disconnected and unpolished.",
  },
  {
    number: "04",
    title: "Ignoring Accessibility",
    description:
      "Some users are sensitive to excessive motion. Respect reduced-motion preferences and avoid unnecessary movement.",
  },
  {
    number: "05",
    title: "Motion Without Purpose",
    description:
      "Every animation should explain, guide or provide feedback. If it serves no purpose, it shouldn't exist.",
  },
];

function MotionMistakes() {
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
              Good motion is
              <br />
              almost invisible.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Users should notice how smooth an experience feels—not the
              animation itself. Great motion supports interaction without
              demanding attention.
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

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-black
                    tracking-[-0.03em]
                  "
                >
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

export default MotionMistakes;