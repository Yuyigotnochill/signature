import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";

const chapters = [
  {
    number: "01",
    title: "Foundations",
    link: "/foundations",
    description:
      "Discover the origins of digital design and the principles that continue to influence modern interfaces.",
  },
  {
    number: "02",
    title: "Typography",
    link: "/typography",
    description:
      "Learn how hierarchy, rhythm, and readability shape the way people experience digital products.",
  },
  {
    number: "03",
    title: "Color",
    link: "/color",
    description:
      "Explore how color creates emotion, improves usability, and strengthens visual identity.",
  },
  {
    number: "04",
    title: "Motion",
    link: "/motion",
    description:
      "Understand how animation guides attention, provides feedback, and creates delightful experiences.",
  },
  {
    number: "05",
    title: "Layout",
    link: "/layout",
    description:
      "Learn how grids, spacing, hierarchy, and alignment create interfaces that feel structured and effortless.",
  },
];

function Chapters() {
  return (
    <section className="py-40">
      <Container>
        <Reveal>
          <SectionHeading
            label="Chapters"
            title="Explore the handbook."
            description="Each chapter focuses on one essential aspect of creating meaningful digital experiences."
          />
        </Reveal>

        <div className="mt-24">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.number} delay={index * 0.08}>
              <Link to={chapter.link}>
                <article className="group cursor-pointer border-b border-neutral-200 py-12 transition-all duration-500 hover:translate-x-3">

                  <div className="grid items-center gap-8 md:grid-cols-[100px_1fr_auto]">

                    {/* Number */}
                    <p className="text-sm font-semibold tracking-[0.35em] text-neutral-400">
                      {chapter.number}
                    </p>

                    {/* Content */}
                    <div>
                      <h3 className="text-3xl font-bold tracking-tight transition-colors duration-300 group-hover:text-black">
                        {chapter.title}
                      </h3>

                      <p className="mt-4 max-w-2xl text-lg leading-9 text-neutral-600">
                        {chapter.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-neutral-300 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white group-hover:rotate-45">
                        <FiArrowUpRight className="text-xl" />
                      </div>
                    </div>

                  </div>

                </article>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Chapters;