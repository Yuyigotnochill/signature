import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const principles = [
  {
    number: "01",
    title: "Clarity",
    description:
      "Great interfaces remove uncertainty. Every action should feel obvious, every decision intentional, and every interaction effortless.",
  },
  {
    number: "02",
    title: "Consistency",
    description:
      "Patterns build confidence. When components behave predictably, users spend less time learning and more time achieving their goals.",
  },
  {
    number: "03",
    title: "Accessibility",
    description:
      "Inclusive design isn't an enhancement—it's the foundation. Products should work for as many people as possible.",
  },
  {
    number: "04",
    title: "Performance",
    description:
      "Fast experiences feel premium. Every millisecond saved contributes to trust, satisfaction and usability.",
  },
];

function Principles() {
  return (
    <section className="py-56">

      <Container>

        <Reveal>

          <div className="mb-28">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Core Principles
            </p>

            <h2
              className="
                mt-8
                max-w-5xl
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              The timeless ideas behind every exceptional product.
            </h2>

          </div>

        </Reveal>

        <div className="space-y-32">

          {principles.map((item, index) => (

            <Reveal
              key={item.number}
              delay={index * 0.1}
            >

              <article className="grid gap-10 lg:grid-cols-12">

                {/* Number */}

                <div className="lg:col-span-2">

                  <span
                    className="
                      text-[72px]
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-black/10
                    "
                  >
                    {item.number}
                  </span>

                </div>

                {/* Title */}

                <div className="lg:col-span-3">

                  <h3
                    className="
                      text-4xl
                      font-bold
                      tracking-[-0.04em]
                    "
                  >
                    {item.title}
                  </h3>

                </div>

                {/* Description */}

                <div className="lg:col-span-7">

                  <p
                    className="
                      max-w-3xl
                      text-[22px]
                      leading-[2]
                      text-neutral-600
                    "
                  >
                    {item.description}
                  </p>

                  <div className="mt-12 h-px bg-neutral-200"></div>

                </div>

              </article>

            </Reveal>

          ))}
                  </div>

</Container>

{/* Decorative Background */}
<div
  className="
    pointer-events-none
    absolute
    left-1/2
    top-1/2
    -z-10
    h-[600px]
    w-[600px]
    -translate-x-1/2
    -translate-y-1/2
    rounded-full
    bg-white/50
    blur-[180px]
  "
/>

</section>
);
}

export default Principles;