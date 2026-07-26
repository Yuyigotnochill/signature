import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const principles = [
  {
    number: "01",
    title: "Purpose",
    description:
      "Every animation should communicate something meaningful. Motion exists to explain change, not decorate the interface.",
  },
  {
    number: "02",
    title: "Continuity",
    description:
      "Objects should move naturally from one state to another so users never lose track of what is happening.",
  },
  {
    number: "03",
    title: "Feedback",
    description:
      "Buttons, forms and controls should respond immediately to user interaction, creating confidence and reducing uncertainty.",
  },
  {
    number: "04",
    title: "Hierarchy",
    description:
      "Motion directs attention. Important elements can enter first while supporting content follows naturally.",
  },
];

function MotionPrinciples() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Motion Principles
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
              Motion should
              <br />
              explain, not entertain.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Great interfaces use movement to improve understanding. Users
              should notice what changed—not the animation itself.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-16">

          {principles.map((item, index) => (

            <Reveal key={item.number} delay={index * 0.08}>

              <article
                className="
                  grid
                  gap-10
                  border-t
                  border-neutral-200
                  pt-12
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-2">

                  <span
                    className="
                      text-5xl
                      font-black
                      tracking-[-0.05em]
                      text-neutral-300
                    "
                  >
                    {item.number}
                  </span>

                </div>

                <div className="lg:col-span-4">

                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {item.title}
                  </h3>

                </div>

                <div className="lg:col-span-6">

                  <p className="text-[20px] leading-[2] text-neutral-600">
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

export default MotionPrinciples;