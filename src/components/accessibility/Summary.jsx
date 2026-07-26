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
              Accessibility
              <br />
              benefits everyone.
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
              Accessible interfaces are easier to read, navigate and understand.
              By designing for inclusion from the beginning, we create products
              that are usable, welcoming and effective for all users.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;