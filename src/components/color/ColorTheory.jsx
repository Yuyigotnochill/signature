import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const groups = [
  {
    title: "Primary",
    description:
      "Primary colors cannot be created by mixing other colors. They form the foundation of every color system.",
    colors: [
      "#2563EB",
      "#DC2626",
      "#FACC15",
    ],
  },
  {
    title: "Secondary",
    description:
      "Secondary colors are created by mixing two primary colors, expanding the visual palette available to designers.",
    colors: [
      "#16A34A",
      "#EA580C",
      "#7C3AED",
    ],
  },
  {
    title: "Neutral",
    description:
      "Neutral colors create balance. Most interfaces rely on neutrals far more than vibrant colors because they improve readability.",
    colors: [
      "#171717",
      "#737373",
      "#E5E5E5",
    ],
  },
];

function ColorTheory() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Color Theory
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
              Every palette begins
              <br />
              with simple rules.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Understanding color relationships allows designers to build
              interfaces that feel balanced, expressive and easy to understand.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-20">

          {groups.map((group, index) => (

            <Reveal key={group.title} delay={index * 0.08}>

              <div
                className="
                  grid
                  gap-14
                  border-t
                  border-neutral-200
                  pt-12
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-4">

                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {group.title}
                  </h3>

                  <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                    {group.description}
                  </p>

                </div>

                <div className="lg:col-span-8">

                  <div className="grid grid-cols-3 gap-6">

                    {group.colors.map((color) => (

                      <div key={color}>

                        <div
                          className="
                            aspect-square
                            rounded-[28px]
                            border
                            border-neutral-200
                            shadow-sm
                          "
                          style={{ backgroundColor: color }}
                        />

                        <p
                          className="
                            mt-4
                            text-center
                            text-sm
                            font-medium
                            tracking-[0.15em]
                            text-neutral-500
                          "
                        >
                          {color}
                        </p>

                      </div>

                    ))}

                  </div>

                </div>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default ColorTheory;