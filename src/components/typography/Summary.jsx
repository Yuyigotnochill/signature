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
                leading-[0.9]
                tracking-[-0.06em]
              "
            >
              Typography is the
              <br />
              architecture of reading.
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
              Beautiful typography isn't about choosing expensive fonts. It is
              about creating hierarchy, rhythm and clarity that quietly guides
              readers through information. When typography disappears, the
              content becomes unforgettable.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;