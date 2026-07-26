import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const techniques = [
  {
    title: "Lazy Loading",
    description:
      "Load pages and components only when they are needed to reduce the initial bundle size.",
  },
  {
    title: "Split Large Bundles",
    description:
      "Break JavaScript into smaller chunks so users download only the code required for the current page.",
  },
  {
    title: "Remove Unused Code",
    description:
      "Eliminate unnecessary libraries and assets to improve loading performance and reduce maintenance.",
  },
];

function CodeSplitting() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Code Splitting
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
              Deliver only
              <br />
              what's needed.
            </h2>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 lg:grid-cols-3">

          {techniques.map((item, index) => (

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

                <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
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

export default CodeSplitting;