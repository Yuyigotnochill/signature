import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const tips = [
  {
    title: "High Contrast",
    description:
      "Text should stand out clearly from its background so it remains readable under different lighting conditions.",
  },
  {
    title: "Don't Rely on Color",
    description:
      "Use icons, labels or patterns in addition to color so important information is understandable for everyone.",
  },
  {
    title: "Readable Typography",
    description:
      "Adequate font sizes, spacing and contrast work together to improve readability across all devices.",
  },
];

function ColorContrast() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Color Contrast
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
              Readability
              <br />
              comes first.
            </h2>

          </div>
        </Reveal>

        <div className="mt-28 grid gap-8 lg:grid-cols-3">

          {tips.map((tip, index) => (

            <Reveal key={tip.title} delay={index * 0.08}>

              <div className="rounded-[32px] border border-neutral-200 bg-white p-10">

                <span className="text-sm font-semibold tracking-[0.35em] text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-3xl font-bold">
                  {tip.title}
                </h3>

                <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                  {tip.description}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default ColorContrast;