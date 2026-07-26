import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const grids = [
  {
    title: "12-Column Grid",
    description:
      "The most common web layout system. It provides flexibility while maintaining consistent alignment across different screen sizes.",
  },
  {
    title: "Consistent Gutters",
    description:
      "Equal spacing between columns creates rhythm and prevents content from feeling cramped or uneven.",
  },
  {
    title: "Modular Design",
    description:
      "Breaking layouts into reusable blocks makes interfaces easier to build, scale and maintain.",
  },
  {
    title: "Alignment",
    description:
      "A grid is valuable only when elements actually align to it. Consistent alignment creates trust and visual harmony.",
  },
];

function GridSystems() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Grid Systems
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
              Order begins
              <br />
              with the grid.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Grids are invisible frameworks that organize information.
              They create consistency, balance and predictable structure
              across every page.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-20 lg:grid-cols-12">

          {/* Grid Demo */}

          <Reveal className="lg:col-span-6">

            <div
              className="
                grid
                h-[620px]
                grid-cols-12
                gap-3
                rounded-[40px]
                border
                border-neutral-200
                bg-white
                p-8
              "
            >

              {Array.from({ length: 12 }).map((_, index) => (

                <div
                  key={index}
                  className="
                    rounded-full
                    bg-neutral-200
                  "
                />

              ))}

            </div>

          </Reveal>

          {/* Explanation */}

          <div className="space-y-12 lg:col-span-6">

            {grids.map((item, index) => (

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

export default GridSystems;