import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const principles = [
  {
    title: "Breathing Room",
    description:
      "Space allows content to breathe. Crowded interfaces overwhelm users, while generous spacing creates clarity and comfort.",
  },
  {
    title: "Focus",
    description:
      "Empty space naturally draws attention toward important content without adding unnecessary visual elements.",
  },
  {
    title: "Hierarchy",
    description:
      "Larger gaps indicate separation while smaller gaps suggest relationships. Spacing is one of the strongest hierarchy tools.",
  },
  {
    title: "Elegance",
    description:
      "Premium products rarely feel crowded. Thoughtful whitespace gives interfaces confidence, balance and sophistication.",
  },
];

function WhiteSpace() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              White Space
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
              Space is not
              <br />
              empty.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              White space is an active design element. It improves readability,
              creates rhythm and allows every important element to stand out.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-20 lg:grid-cols-12">

          {/* Visual Demo */}

          <Reveal className="lg:col-span-6">

            <div
              className="
                flex
                h-[620px]
                items-center
                justify-center
                rounded-[40px]
                border
                border-neutral-200
                bg-white
                p-16
              "
            >

              <div
                className="
                  flex
                  h-full
                  w-full
                  items-center
                  justify-center
                  rounded-[28px]
                  border
                  border-dashed
                  border-neutral-300
                "
              >

                <div
                  className="
                    rounded-2xl
                    bg-black
                    px-12
                    py-8
                    text-white
                    text-3xl
                    font-black
                  "
                >
                  Content
                </div>

              </div>

            </div>

          </Reveal>

          {/* Explanation */}

          <div className="space-y-12 lg:col-span-6">

            {principles.map((item, index) => (

              <Reveal key={item.title} delay={index * 0.08}>

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

export default WhiteSpace;