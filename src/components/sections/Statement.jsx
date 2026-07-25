import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Statement() {
  return (
    <section className="border-t border-b border-neutral-200 py-40">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">

            <p className="mb-8 text-sm uppercase tracking-[0.4em] text-neutral-400">
              Editorial Thought
            </p>

            <h2 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">
              "Good design is obvious.
              <br />
              Great design is invisible."
            </h2>

            <div className="mx-auto mt-12 h-px w-24 bg-neutral-300"></div>

            <p className="mt-10 text-lg text-neutral-500">
              — Joe Sparano
            </p>

          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default Statement;