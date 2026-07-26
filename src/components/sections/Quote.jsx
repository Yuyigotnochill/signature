import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Quote() {
  return (
    <section className="py-44">

      <Container>

        <Reveal>

          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-10 text-xs uppercase tracking-[0.45em] text-neutral-500">
              Closing Thought
            </p>

            <h2 className="text-5xl font-bold leading-[1] tracking-[-0.05em] md:text-6xl xl:text-7xl">

              "People ignore design
              that ignores people."

            </h2>

            <p className="mt-12 text-lg uppercase tracking-[0.35em] text-neutral-400">

              — Frank Chimero

            </p>

          </div>

        </Reveal>

      </Container>

    </section>
  );
}

export default Quote;