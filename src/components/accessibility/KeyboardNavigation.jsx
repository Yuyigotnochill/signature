import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const features = [
  {
    title: "Tab Navigation",
    description:
      "Users should be able to move through interactive elements using only the keyboard in a logical order.",
  },
  {
    title: "Visible Focus States",
    description:
      "Focused buttons, links and inputs should always display a clear visual indicator so users know where they are.",
  },
  {
    title: "Keyboard Shortcuts",
    description:
      "Support common keyboard interactions where appropriate to improve efficiency and accessibility.",
  },
];

function KeyboardNavigation() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Keyboard Navigation
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
              Every interface
              <br />
              should work without a mouse.
            </h2>

          </div>

        </Reveal>

        <div className="mt-28 space-y-8">

          {features.map((item, index) => (

            <Reveal
              key={item.title}
              delay={index * 0.08}
            >

              <div className="rounded-[32px] border border-neutral-200 bg-white p-10">

                <span className="text-sm font-semibold tracking-[0.35em] text-neutral-400">
                  0{index + 1}
                </span>

                <h3 className="mt-6 text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 text-[21px] leading-[2] text-neutral-600">
                  {item.description}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default KeyboardNavigation;