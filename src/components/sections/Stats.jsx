import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";
import Magnetic from "../Magnetic";
import AnimatedCounter from "../AnimatedCounter";
import Tilt from "../Tilt";

const stats = [
  {
    number: "35+",
    title: "Years of Evolution",
  },
  {
    number: "04",
    title: "Core Principles",
  },
  {
    number: "100%",
    title: "Human-Centered",
  },
  {
    number: "250+",
    title: "Creative Possibilities",
  },
];

function Stats() {
  return (
    <section className="bg-stone-50 py-40">
      <Container>
        <Reveal>
          <SectionHeading
            label="At a Glance"
            title="Design by the Numbers"
            description="A few numbers that represent the evolution of digital craftsmanship."
            align="center"
          />
        </Reveal>

        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <Tilt>
              <Magnetic strength={20}>
                <div className="rounded-[30px] border border-neutral-200 bg-white/70 p-12 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-black/20 hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]">
                <h3 className="text-7xl font-black tracking-[-0.08em]">
  <AnimatedCounter value={item.number} />
</h3>

                  <div className="mx-auto my-8 h-px w-20 bg-neutral-300"></div>

                  <p className="text-lg text-neutral-600">
                    {item.title}
                  </p>
                </div>
              </Magnetic>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Stats;