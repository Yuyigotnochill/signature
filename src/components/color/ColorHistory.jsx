import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const history = [
  {
    year: "30,000 BC",
    title: "Natural Pigments",
    description:
      "Early humans used charcoal, clay and minerals to communicate ideas through cave paintings, marking the beginning of visual storytelling.",
  },
  {
    year: "1450",
    title: "Printing Revolution",
    description:
      "The invention of the printing press standardized the use of color in books, illustrations and visual communication.",
  },
  {
    year: "1990s",
    title: "Digital Interfaces",
    description:
      "Computers introduced RGB displays, allowing designers to create vibrant digital experiences for millions of users.",
  },
  {
    year: "Today",
    title: "Accessible Color",
    description:
      "Modern products balance beauty with accessibility, ensuring color enhances usability for everyone regardless of visual ability.",
  },
];

function ColorHistory() {
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
                md:text-7xl
                xl:text-8xl
                font-black
                tracking-[-0.06em]
                leading-[0.9]
              "
            >
              Color has always
              <br />
              shaped communication.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              From ancient pigments to modern digital interfaces, color has
              evolved from artistic expression into one of the most powerful
              tools for guiding attention and creating emotion.
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

                  <h3 className="text-3xl font-bold tracking-[-0.03em]">
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

export default ColorHistory;