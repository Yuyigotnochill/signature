import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Summary() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="mx-auto max-w-5xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Chapter Summary
            </p>

            <h2
              className="
                mt-8
                text-6xl
                md:text-7xl
                xl:text-8xl
                font-black
                tracking-[-0.06em]
                leading-[0.9]
              "
            >
              Great layouts
              <br />
              feel invisible.
            </h2>

            <p
              className="
                mx-auto
                mt-12
                max-w-3xl
                text-[22px]
                leading-[2]
                text-neutral-600
              "
            >
              Layout is the silent system behind every successful interface.
              When grids, spacing, hierarchy and alignment work together,
              users stop thinking about the interface and focus entirely on
              their goals.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;