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
              Fast products
              <br />
              respect people's time.
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
              Performance is more than loading quickly. It creates responsive,
              reliable experiences that keep users engaged while improving
              accessibility, usability and satisfaction.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;