import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const transitions = [
  {
    title: "Preserve Context",
    description:
      "Users should always understand where they came from and where they are going. Smooth transitions maintain continuity between screens.",
  },
  {
    title: "Guide Attention",
    description:
      "Transitions naturally draw the eye toward new content, reducing confusion and helping users focus on what changed.",
  },
  {
    title: "Build Rhythm",
    description:
      "Consistent transition timing creates a predictable interface that feels calm, polished and cohesive.",
  },
  {
    title: "Reduce Cognitive Load",
    description:
      "Abrupt screen changes force users to reorient themselves. Motion bridges that gap, making navigation effortless.",
  },
];

function PageTransitions() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Page Transitions
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
              Every screen
              <br />
              should connect.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Good transitions don't exist to impress users. They exist to
              preserve context, making every navigation feel intentional and
              effortless.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 space-y-10">

          {transitions.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <article
                className="
                  rounded-[34px]
                  border
                  border-neutral-200
                  bg-white
                  p-12
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                "
              >

                <div className="grid gap-10 lg:grid-cols-12">

                  <div className="lg:col-span-4">

                    <div
                      className="
                        flex
                        h-24
                        w-24
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-neutral-300
                        text-4xl
                        font-black
                      "
                    >
                      →
                    </div>

                  </div>

                  <div className="lg:col-span-8">

                    <h3 className="text-4xl font-black tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                      {item.description}
                    </p>

                  </div>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default PageTransitions;