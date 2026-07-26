import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Introduction() {
  return (
    <section className="py-32">
      <Container>
        <Reveal>
          <div className="max-w-4xl">

            <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
              Introduction
            </p>

            <h2 className="text-5xl font-semibold leading-[1] tracking-[-0.05em] md:text-6xl">
              Design isn't decoration.
              <br />
              It's communication.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
              Every interface tells a story. The smallest details—spacing,
              typography, color and motion—shape how people feel while using a
              product.
            </p>

          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-24 flex items-end justify-between border-t border-neutral-200 pt-10">

            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                Years of Web Evolution
              </p>
            </div>

            <h3 className="text-7xl font-bold tracking-[-0.08em] md:text-8xl">
              35+
            </h3>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Introduction;