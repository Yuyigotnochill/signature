import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Introduction() {
  return (
    <section className="py-36">
      <Container>

        <div className="grid gap-20 lg:grid-cols-2 lg:items-center">

          <Reveal>
            <div>

              <p className="mb-6 text-sm uppercase tracking-[0.35em] text-neutral-500">
                Introduction
              </p>

              <h2 className="max-w-xl text-5xl font-semibold leading-tight tracking-[-0.03em]">
                Design isn't decoration.
                <br />
                It's communication.
              </h2>

              <p className="mt-8 max-w-lg text-lg leading-8 text-neutral-600">
                Every interface tells a story. The smallest details—spacing,
                typography, color and motion—shape how people feel while using a
                product.
              </p>

            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="text-right">

              <h3 className="text-8xl font-bold tracking-[-0.08em] text-neutral-900">
                35+
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.35em] text-neutral-500">
                Years of Web Evolution
              </p>

            </div>
          </Reveal>

        </div>

      </Container>
    </section>
  );
}

export default Introduction;