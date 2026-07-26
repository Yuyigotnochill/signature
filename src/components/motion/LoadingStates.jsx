import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const states = [
  {
    title: "Skeleton Screen",
    description:
      "Skeleton placeholders preview the layout before content appears, reducing perceived waiting time and improving continuity.",
  },
  {
    title: "Spinner",
    description:
      "Spinners indicate ongoing activity when the system cannot predict loading duration. Use them sparingly for short waits.",
  },
  {
    title: "Progress Bar",
    description:
      "Progress indicators communicate how much work remains, giving users confidence that the process is moving forward.",
  },
  {
    title: "Optimistic Loading",
    description:
      "Interfaces can instantly reflect user actions before the server responds, making products feel dramatically faster.",
  },
];

function LoadingStates() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Loading States
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
              Waiting should
              <br />
              never feel broken.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Users are willing to wait when they understand what's happening.
              Good loading states replace uncertainty with reassurance.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 lg:grid-cols-2">

          {states.map((item, index) => (

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

                {/* Demo */}

                <div
                  className="
                    flex
                    h-40
                    items-center
                    justify-center
                    rounded-[24px]
                    bg-neutral-100
                  "
                >

                  <div className="space-y-4 w-4/5">

                    <div className="h-4 w-full rounded-full bg-neutral-300"></div>

                    <div className="h-4 w-3/4 rounded-full bg-neutral-300"></div>

                    <div className="h-4 w-1/2 rounded-full bg-neutral-300"></div>

                  </div>

                </div>

                <h3 className="mt-10 text-3xl font-black tracking-[-0.04em]">
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

export default LoadingStates;