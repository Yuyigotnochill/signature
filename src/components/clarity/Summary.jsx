import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function Summary() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="mx-auto max-w-5xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Summary
            </p>

            <h2
              className="
                mt-8
                text-5xl
                md:text-6xl
                xl:text-7xl
                font-black
                leading-[1]
                tracking-[-0.05em]
              "
            >
              Clear design creates
              <br />
              confident users.
            </h2>

            <p
              className="
                mx-auto
                mt-10
                max-w-3xl
                text-[22px]
                leading-[2]
                text-neutral-600
              "
            >
              Clarity is achieved when every visual element has a purpose.
              Through hierarchy, thoughtful spacing and familiar interaction
              patterns, interfaces become easier to understand and more
              enjoyable to use.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;