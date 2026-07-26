import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const examples = [
  {
    title: "Poor Contrast",
    bg: "#F3F4F6",
    text: "#D1D5DB",
    label: "Difficult to Read",
    description:
      "Low contrast reduces readability and makes interfaces inaccessible for many users.",
  },
  {
    title: "Good Contrast",
    bg: "#111827",
    text: "#FFFFFF",
    label: "Comfortable Reading",
    description:
      "Strong contrast improves legibility while helping users quickly scan and understand information.",
  },
];

function ContrastAccessibility() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Accessibility
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
              Beautiful design
              <br />
              must also be readable.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Contrast isn't just a visual preference. It determines whether
              users can comfortably read, navigate and interact with an
              interface.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-10 lg:grid-cols-2">

          {examples.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <article
                className="
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-neutral-200
                  bg-white
                "
              >

                <div
                  className="
                    flex
                    h-72
                    items-center
                    justify-center
                  "
                  style={{
                    backgroundColor: item.bg,
                  }}
                >

                  <h3
                    className="text-4xl font-black tracking-[-0.04em]"
                    style={{
                      color: item.text,
                    }}
                  >
                    Aa Bb Cc
                  </h3>

                </div>

                <div className="p-10">

                  <span
                    className="
                      text-xs
                      uppercase
                      tracking-[0.35em]
                      text-neutral-400
                    "
                  >
                    {item.label}
                  </span>

                  <h4 className="mt-5 text-3xl font-bold">
                    {item.title}
                  </h4>

                  <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                    {item.description}
                  </p>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

        <Reveal delay={0.3}>

          <div
            className="
              mt-24
              rounded-[36px]
              border
              border-neutral-200
              bg-neutral-900
              p-14
              text-white
            "
          >

            <p className="text-xs uppercase tracking-[0.4em] text-neutral-400">
              Best Practice
            </p>

            <h3 className="mt-6 text-4xl font-black tracking-[-0.04em]">
              Never rely on color alone.
            </h3>

            <p className="mt-8 max-w-3xl text-[22px] leading-[2] text-neutral-300">
              Pair color with icons, labels, spacing or typography. This
              ensures information remains understandable for users with color
              vision deficiencies and improves clarity for everyone.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default ContrastAccessibility;