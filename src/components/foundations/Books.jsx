import { FiBookOpen } from "react-icons/fi";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const books = [
  {
    title: "Don't Make Me Think",
    author: "Steve Krug",
    year: "2000",
    description:
      "A timeless guide to usability and intuitive web design. Every designer should read it at least once.",
  },
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    year: "1988",
    description:
      "Explains why good products feel natural and how thoughtful design reduces human error.",
  },
  {
    title: "Refactoring UI",
    author: "Steve Schoger & Adam Wathan",
    year: "2018",
    description:
      "Practical interface design advice that instantly improves layouts, spacing, typography and color.",
  },
  {
    title: "Universal Principles of Design",
    author: "William Lidwell",
    year: "2010",
    description:
      "A collection of essential design principles used across product, industrial and visual design.",
  },
];

function Books() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Recommended Reading
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
              Books that shaped
              <br />
              modern design thinking.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Every great designer studies the work of others. These books have
              influenced generations of designers and continue to define how we
              build products today.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-14">

          {books.map((book, index) => (

            <Reveal key={book.title} delay={index * 0.08}>

              <article
                className="
                  group
                  grid
                  gap-10
                  border-t
                  border-neutral-200
                  pt-12
                  transition-all
                  duration-300
                  lg:grid-cols-12
                "
              >

                <div className="lg:col-span-2">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-black text-white transition-transform duration-300 group-hover:scale-110">

                    <FiBookOpen className="text-xl" />

                  </div>

                </div>

                <div className="lg:col-span-7">

                  <div className="flex items-center gap-4">

                    <span className="text-sm uppercase tracking-[0.35em] text-neutral-400">
                      {book.year}
                    </span>

                    <div className="h-px flex-1 bg-neutral-200"></div>

                  </div>

                  <h3 className="mt-8 text-4xl font-bold tracking-[-0.04em]">
                    {book.title}
                  </h3>

                  <p className="mt-3 text-lg text-neutral-500">
                    {book.author}
                  </p>

                  <p className="mt-8 max-w-3xl text-[20px] leading-[2] text-neutral-600">
                    {book.description}
                  </p>

                </div>

                <div className="flex items-start justify-end lg:col-span-3">

                  <span
                    className="
                      text-[72px]
                      font-black
                      leading-none
                      tracking-[-0.08em]
                      text-black/5
                      transition-all
                      duration-300
                      group-hover:text-black/10
                    "
                  >
                    0{index + 1}
                  </span>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Books;