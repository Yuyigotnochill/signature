import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const rules = [
  {
    title: "Shared Edges",
    description:
      "Elements should align to common vertical or horizontal lines. Shared edges create order and make interfaces feel intentional.",
  },
  {
    title: "Consistent Rhythm",
    description:
      "Repeating alignment patterns allows users to scan information quickly without constantly adjusting their focus.",
  },
  {
    title: "Avoid Random Placement",
    description:
      "Misaligned components create visual noise. Even small inconsistencies make products appear unfinished.",
  },
  {
    title: "Use Invisible Lines",
    description:
      "Imagine invisible guides connecting every heading, paragraph and button. Professional layouts follow these guides consistently.",
  },
];

function Alignment() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Alignment
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
              Alignment builds
              <br />
              visual trust.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Users may never consciously notice alignment, but they instantly
              feel the difference between an organized interface and a chaotic
              one.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-20 lg:grid-cols-12">

          {/* Demo */}

          <Reveal className="lg:col-span-6">

            <div
              className="
                flex
                h-[620px]
                flex-col
                justify-center
                rounded-[40px]
                border
                border-neutral-200
                bg-white
                p-16
              "
            >

              <div className="space-y-10">

                <div className="h-6 w-72 rounded-full bg-black"></div>

                <div className="h-5 w-60 rounded-full bg-neutral-400"></div>

                <div className="h-5 w-80 rounded-full bg-neutral-300"></div>

                <div className="h-5 w-52 rounded-full bg-neutral-300"></div>

                <div className="h-12 w-44 rounded-full bg-black"></div>

              </div>

            </div>

          </Reveal>

          {/* Content */}

          <div className="space-y-12 lg:col-span-6">

            {rules.map((rule, index) => (

              <Reveal key={rule.title} delay={index * 0.08}>

                <div className="border-b border-neutral-200 pb-10">

                  <h3 className="text-3xl font-black tracking-[-0.03em]">
                    {rule.title}
                  </h3>

                  <p className="mt-5 text-[20px] leading-[2] text-neutral-600">
                    {rule.description}
                  </p>

                </div>

              </Reveal>

            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Alignment;