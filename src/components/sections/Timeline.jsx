import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../animations/Reveal";
import Magnetic from "../Magnetic";
import Tilt from "../Tilt";

const timeline = [
  {
    year: "1991",
    title: "The First Website",
    description:
      "The web began as a simple collection of hyperlinked documents created to share scientific information.",
  },
  {
    year: "2007",
    title: "Mobile Revolution",
    description:
      "Responsive thinking emerged as smartphones reshaped the way people accessed digital products.",
  },
  {
    year: "2018",
    title: "Experience First",
    description:
      "Interfaces evolved beyond functionality, focusing on motion, accessibility and delightful interactions.",
  },
  {
    year: "2026",
    title: "Timeless Design",
    description:
      "Today's best products balance beauty, speed and usability to create experiences people remember.",
  },
];

function Timeline() {
  return (
    <section className="py-40">
      <Container>
        <Reveal>
          <SectionHeading
            label="Timeline"
            title="The evolution of digital design."
            description="Every milestone changed how people interact with technology."
          />
        </Reveal>

        <div className="relative mt-24">
          <div className="absolute left-[39px] top-0 h-full w-px bg-neutral-200"></div>

          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.12}>
              <div className="group relative mb-16 flex gap-10">
                {/* Year Circle */}
                <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-neutral-300 bg-white transition-all duration-500 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <span className="text-sm font-bold">
                    {item.year}
                  </span>
                </div>

                {/* Card */}
                <Tilt>
                <Magnetic strength={18}>
                  <div className="flex-1 rounded-3xl border border-neutral-200 bg-white/70 p-10 backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-2 group-hover:border-black/20 group-hover:shadow-[0_25px_70px_rgba(0,0,0,.08)]">
                    <h3 className="text-3xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-5 max-w-2xl text-lg leading-9 text-neutral-600">
                      {item.description}
                    </p>
                  </div>
                </Magnetic>
                </Tilt>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Timeline;