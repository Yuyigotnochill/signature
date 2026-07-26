import Reveal from "../animations/Reveal";
import Container from "../ui/Container";

const timeline = [
  {
    year: "1991",
    title: "The First Website",
    description:
      "Tim Berners-Lee published the world's first website, introducing the foundation of the modern web.",
  },
  {
    year: "2007",
    title: "The Mobile Revolution",
    description:
      "The introduction of smartphones completely changed how interfaces were designed, making responsive experiences essential.",
  },
  {
    year: "2010",
    title: "Responsive Design",
    description:
      "Designers shifted toward flexible layouts that adapt beautifully across every screen size.",
  },
  {
    year: "2014",
    title: "Material Design",
    description:
      "Google introduced a complete design language built around motion, depth, consistency and usability.",
  },
  {
    year: "2025",
    title: "AI Interfaces",
    description:
      "Modern interfaces are becoming conversational, personalized and increasingly intelligent while maintaining simplicity.",
  },
];

function Timeline() {
  return (
    <section className="py-44">
      <Container>

        <Reveal>
          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              History
            </p>

            <h2 className="mt-6 text-6xl font-black leading-none tracking-[-0.05em]">
              The evolution
              <br />
              of digital design.
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-600">
              Every generation of designers builds on the discoveries of the
              previous one. Understanding where modern interfaces came from
              helps us create better products today.
            </p>

          </div>
        </Reveal>

        <div className="relative mt-28">

          {/* Vertical Line */}
          <div className="absolute left-[95px] top-0 hidden h-full w-px bg-neutral-200 md:block"></div>

          <div className="space-y-28">

            {timeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 0.08}>

                <article className="group relative grid gap-10 md:grid-cols-[140px_1fr]">

                  {/* Year */}
                  <div className="relative">

                    <div className="hidden md:block absolute right-[37px] top-8 h-5 w-5 rounded-full border-4 border-white bg-black shadow-lg"></div>

                    <h3 className="text-5xl font-black tracking-[-0.05em] text-neutral-300 transition-all duration-500 group-hover:text-black">
                      {item.year}
                    </h3>

                  </div>

                  {/* Card */}
                  <div
                    className="
                      rounded-[36px]
                      border
                      border-neutral-200
                      bg-white/70
                      p-10
                      backdrop-blur-xl
                      transition-all
                      duration-500
                      group-hover:-translate-y-2
                      group-hover:border-black/20
                      group-hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                    "
                  >

                    <h4 className="text-3xl font-bold tracking-tight">
                      {item.title}
                    </h4>

                    <div className="my-8 h-px bg-neutral-200"></div>

                    <p className="max-w-3xl text-lg leading-9 text-neutral-600">
                      {item.description}
                    </p>

                  </div>

                </article>

              </Reveal>
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}

export default Timeline;