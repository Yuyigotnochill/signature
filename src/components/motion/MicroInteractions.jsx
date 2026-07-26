import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const interactions = [
  {
    title: "Button Hover",
    label: "Hover Feedback",
    description:
      "A subtle color or elevation change tells users that an element is interactive before they even click.",
  },
  {
    title: "Toggle Switch",
    label: "State Change",
    description:
      "Smooth movement between on and off states provides immediate confirmation without requiring extra explanation.",
  },
  {
    title: "Input Focus",
    label: "User Attention",
    description:
      "Highlighting an active input field guides the eye and reduces mistakes during form completion.",
  },
  {
    title: "Success Feedback",
    label: "Completion",
    description:
      "Small animations after successful actions reassure users that their task has been completed.",
  },
];

function MicroInteractions() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Micro Interactions
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
              Small details
              <br />
              create big experiences.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Micro interactions provide immediate feedback, making interfaces
              feel responsive, intuitive and enjoyable to use.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {interactions.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

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
                    text-3xl
                    font-black
                  "
                >
                  →
                </div>

                <span
                  className="
                    mt-10
                    block
                    text-xs
                    uppercase
                    tracking-[0.35em]
                    text-neutral-400
                  "
                >
                  {item.label}
                </span>

                <h3 className="mt-5 text-3xl font-black tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
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

export default MicroInteractions;