import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const hierarchy = [
  {
    title: "Size",
    description:
      "Larger elements naturally attract attention first. Headlines should dominate while supporting content remains secondary.",
  },
  {
    title: "Contrast",
    description:
      "Differences in color, weight and brightness separate important information from supporting details.",
  },
  {
    title: "Position",
    description:
      "People scan from top to bottom and left to right. Place important content where the eye naturally begins.",
  },
  {
    title: "Spacing",
    description:
      "Related elements stay close together while larger gaps separate different groups of information.",
  },
];

function VisualHierarchy() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Visual Hierarchy
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
              Guide the eye
              <br />
              with intention.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Users don't read every word. They scan first. Visual hierarchy
              determines what they notice, what they ignore and what they
              remember.
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

              <h1 className="text-6xl font-black tracking-[-0.05em]">
                Primary Heading
              </h1>

              <h2 className="mt-10 text-3xl font-bold text-neutral-700">
                Secondary Heading
              </h2>

              <p className="mt-8 text-lg leading-9 text-neutral-500">
                Supporting text explains the main idea and provides additional
                context without competing for attention.
              </p>

              <button
                className="
                  mt-12
                  w-fit
                  rounded-full
                  bg-black
                  px-8
                  py-4
                  text-white
                  font-semibold
                "
              >
                Call to Action
              </button>

            </div>

          </Reveal>

          {/* Explanation */}

          <div className="space-y-12 lg:col-span-6">

            {hierarchy.map((item, index) => (

              <Reveal
                key={item.title}
                delay={index * 0.08}
              >

                <div className="border-b border-neutral-200 pb-10">

                  <h3 className="text-3xl font-black tracking-[-0.03em]">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-[20px] leading-[2] text-neutral-600">
                    {item.description}
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

export default VisualHierarchy;