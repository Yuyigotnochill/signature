import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const vitals = [
  {
    title: "Largest Contentful Paint (LCP)",
    description:
      "Measures how quickly the main content of a page becomes visible. Faster loading improves the user's first impression.",
  },
  {
    title: "Interaction to Next Paint (INP)",
    description:
      "Measures how responsive a page feels after user interactions such as clicks or taps.",
  },
  {
    title: "Cumulative Layout Shift (CLS)",
    description:
      "Measures visual stability. Elements should not unexpectedly move while the page is loading.",
  },
];

function CoreWebVitals() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Core Web Vitals
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
              Measure what
              <br />
              users actually feel.
            </h2>

          </div>
        </Reveal>

        <div className="mt-28 grid gap-8 lg:grid-cols-3">

          {vitals.map((item, index) => (

            <Reveal key={item.title} delay={index * 0.08}>

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

export default CoreWebVitals;