import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";

const timeline = [
  {
    year: "1991",
    title: "The First Website",
    description:
      "The web begins as a simple collection of linked documents, laying the foundation for everything that follows.",
  },
  {
    year: "1998",
    title: "CSS Becomes Essential",
    description:
      "Separating structure from presentation transforms how websites are designed and maintained.",
  },
  {
    year: "2010",
    title: "Mobile-First Design",
    description:
      "Designers begin prioritizing small screens, leading to more flexible and user-focused interfaces.",
  },
  {
    year: "2014",
    title: "Design Systems",
    description:
      "Reusable components and shared guidelines create consistency across large digital products.",
  },
  {
    year: "Today",
    title: "Human-Centered Experiences",
    description:
      "Modern design balances aesthetics, accessibility, performance, and meaningful interaction.",
  },
];

function Timeline() {
  return (
    <section className="border-t border-neutral-200 py-36">
      <Container>
        <Reveal>
          <SectionHeading
            label="Timeline"
            title="The evolution of digital design."
            description="A few milestones that transformed the modern web."
          />
        </Reveal>

        <div className="mt-24">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.08}>
              <article className="group border-b border-neutral-200 py-12 transition-all duration-300 hover:pl-6">

                <div className="grid gap-10 lg:grid-cols-[160px_1fr]">

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
                      {item.year}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-6 max-w-3xl leading-8 text-neutral-600">
                      {item.description}
                    </p>
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

export default Timeline;