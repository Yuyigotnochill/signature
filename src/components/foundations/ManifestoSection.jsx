import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function ManifestoSection() {
  return (
    <section className="py-52">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Manifesto
            </p>

            <h2
              className="
                mt-8
                text-5xl
                font-black
                leading-tight
                tracking-[-0.05em]
                md:text-6xl
                xl:text-7xl
              "
            >
              Design is not decoration.
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
              Great products are built through clarity, empathy, consistency,
              and thoughtful decisions. Every pixel should solve a problem,
              every interaction should have purpose, and every experience should
              respect the user's time.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

export default ManifestoSection;