import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const stats = [
  {
    number: "15+",
    title: "Years of Web Evolution",
  },
  {
    number: "04",
    title: "Core Principles",
  },
  {
    number: "100%",
    title: "Human-Centered Design",
  },
  {
    number: "1991",
    title: "The First Website",
  },
];

function Stats() {
  return (
    <section className="border-y border-neutral-200 bg-stone-50 py-36">
      <Container>
        <Reveal>
          <div className="mb-20 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              At a Glance
            </p>

            <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-6xl">
              Design by the Numbers
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <div className="group rounded-3xl border border-neutral-200 bg-white/70 p-10 text-center transition-all duration-500 hover:-translate-y-2 hover:border-black hover:shadow-xl">

                <h3 className="text-6xl font-extrabold tracking-tight">
                  {item.number}
                </h3>

                <div className="mx-auto my-6 h-px w-16 bg-neutral-300 transition-all duration-300 group-hover:w-24"></div>

                <p className="text-neutral-600">
                  {item.title}
                </p>

              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;