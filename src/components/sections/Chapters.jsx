import { FiArrowUpRight } from "react-icons/fi";

import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";

const chapters = [
  {
    number: "01",
    title: "Foundations",
    description:
      "Discover the origins of digital design and the principles that continue to influence modern interfaces.",
  },
  {
    number: "02",
    title: "Typography",
    description:
      "Learn how hierarchy, rhythm, and readability shape the way people experience digital products.",
  },
  {
    number: "03",
    title: "Color",
    description:
      "Explore how color creates emotion, improves usability, and strengthens visual identity.",
  },
  {
    number: "04",
    title: "Motion",
    description:
      "Understand how animation guides attention, provides feedback, and creates delightful experiences.",
  },
];

function Chapters() {
  return (
    <section className="py-36">
      <Container>
        <Reveal>
          <SectionHeading
            label="Chapters"
            title="Explore the handbook."
            description="Each chapter focuses on one essential aspect of creating meaningful digital experiences."
          />
        </Reveal>

        <div className="mt-20">
          {chapters.map((chapter, index) => (
            <Reveal key={chapter.number} delay={index * 0.08}>
              <div className="group border-b border-neutral-200 py-10 transition-all duration-300 hover:pl-6">

                <div className="grid items-center gap-8 md:grid-cols-[100px_1fr_auto]">

                  {/* Number */}
                  <p className="text-sm font-semibold tracking-[0.3em] text-neutral-400">
                    {chapter.number}
                  </p>

                  {/* Content */}
                  <div>
                    <h3 className="text-3xl font-bold tracking-tight">
                      {chapter.title}
                    </h3>

                    <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
                      {chapter.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center justify-end">
                    <div className="rounded-full border border-neutral-300 p-4 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                      <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>

                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Chapters;