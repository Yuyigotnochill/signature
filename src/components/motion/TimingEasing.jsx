import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const easing = [
  {
    title: "Linear",
    bar: "w-full",
    description:
      "Moves at a constant speed from start to finish. Useful for progress bars but often feels mechanical.",
  },
  {
    title: "Ease In",
    bar: "w-4/5",
    description:
      "Starts slowly before accelerating. It creates anticipation and works well for elements entering the screen.",
  },
  {
    title: "Ease Out",
    bar: "w-3/5",
    description:
      "Begins quickly and gradually slows down, creating a smooth and natural stopping motion.",
  },
  {
    title: "Ease In Out",
    bar: "w-5/6",
    description:
      "Accelerates gently, reaches peak speed, then slows before stopping. This is the most common easing for interfaces.",
  },
];

function TimingEasing() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Timing & Easing
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
              Good animation
              <br />
              feels natural.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Timing determines how long motion lasts. Easing determines how
              that movement feels. Together they create personality and rhythm.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 space-y-14">

          {easing.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

              <article className="border-t border-neutral-200 pt-12">

                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                  <div className="max-w-xl">

                    <h3 className="text-4xl font-black tracking-[-0.04em]">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                      {item.description}
                    </p>

                  </div>

                  <div className="w-full max-w-xl">

                    <div className="h-3 rounded-full bg-neutral-200">

                      <div
                        className={`${item.bar} h-full rounded-full bg-black`}
                      />

                    </div>

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

export default TimingEasing;