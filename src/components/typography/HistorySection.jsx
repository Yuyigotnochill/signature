import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const history = [
  {
    year: "1450",
    title: "Gutenberg Press",
    description:
      "Movable type transformed knowledge from something rare into something accessible, forever changing how humans communicate.",
  },
  {
    year: "1957",
    title: "Helvetica",
    description:
      "A neutral typeface that became the symbol of modernist design, influencing branding and interface design for decades.",
  },
  {
    year: "1990s",
    title: "Digital Typography",
    description:
      "Personal computers introduced scalable digital fonts, giving designers unprecedented flexibility and creative freedom.",
  },
  {
    year: "Today",
    title: "Variable Fonts",
    description:
      "Modern typography adapts fluidly across devices, balancing performance, accessibility and expressive design.",
  },
];

function HistorySection() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              History
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
              Typography evolved with
              <br />
              civilization itself.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Every technological leap changed the way people read, learn and
              communicate. Modern interface typography is built upon centuries
              of innovation.
            </p>

          </div>
        </Reveal>

        <div className="mt-28">

          {history.map((item, index) => (

            <Reveal key={item.year} delay={index * 0.08}>

              <article
                className="
                  grid
                  gap-10
                  border-t
                  border-neutral-200
                  py-12
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-2">

                  <span
                    className="
                      text-2xl
                      font-bold
                      tracking-[-0.03em]
                    "
                  >
                    {item.year}
                  </span>

                </div>

                <div className="lg:col-span-4">

                  <h3 className="text-3xl font-bold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                </div>

                <div className="lg:col-span-6">

                  <p className="text-[20px] leading-[2] text-neutral-600">
                    {item.description}
                  </p>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default HistorySection;