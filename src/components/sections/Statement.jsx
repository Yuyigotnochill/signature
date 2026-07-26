import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Statement() {
  return (
    <section className="py-40">
      <Container>

        <Reveal>

          <div className="mx-auto max-w-5xl">

            <p className="mb-8 text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
              Philosophy
            </p>

            <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-6xl xl:text-7xl">

              Great design isn't
              <br />

              about making things
              <br />

              beautiful.

            </h2>

            <h2 className="mt-5 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-neutral-300 md:text-6xl xl:text-7xl">

              It's about making
              <br />

              things understood.

            </h2>

            <div className="mt-16 max-w-2xl">

              <p className="text-lg leading-9 text-neutral-600">

                Every interaction should feel effortless.
                Every transition should have purpose.
                Every pixel should communicate something
                meaningful to the user.

              </p>

            </div>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Statement;