import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const takeaways = [
  "Build reusable components.",
  "Follow one design system.",
  "Keep interactions predictable.",
  "Maintain visual consistency.",
  "Consistency improves trust.",
];

function Takeaways() {
  return (
    <section className="pb-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Key Takeaways
            </p>

            <h2 className="mt-8 text-5xl md:text-6xl font-black tracking-[-0.05em]">
              Remember these principles.
            </h2>

          </div>

        </Reveal>

        <div className="mt-20 space-y-6">

          {takeaways.map((item, index) => (

            <Reveal key={item} delay={index * 0.08}>

              <div className="flex items-start gap-6 rounded-[28px] border border-neutral-200 bg-white/70 p-8 backdrop-blur-xl">

                <span className="text-lg font-bold text-neutral-400">
                  0{index + 1}
                </span>

                <p className="text-[22px] leading-[1.8] text-neutral-700">
                  {item}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Takeaways;