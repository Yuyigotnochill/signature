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
              Motion creates
              <br />
              confidence.
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
              Great animation doesn't seek attention. It guides, explains,
              reassures and connects every interaction into one seamless
              experience. Motion is successful when users simply feel that
              everything works naturally.
            </p>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default Summary;