import Container from "../ui/Container";

function Quote() {
  return (
    <section className="py-40">
      <Container>
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
            Editorial Note
          </p>

          <blockquote className="mt-10 text-4xl font-semibold leading-tight md:text-6xl">
            “Good design isn't decoration.
            <br />
            It's the removal of unnecessary friction.”
          </blockquote>

          <p className="mt-10 text-lg text-neutral-600">
            Every decision—whether it's typography, spacing, animation, or
            accessibility—should help people achieve their goals with clarity
            and confidence.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default Quote;