import Container from "../ui/Container";

function ChapterDivider({ number, title }) {
  return (
    <section className="py-40">

      <Container>

        <div className="flex items-center gap-8">

          <span
            className="
              text-[96px]
              font-black
              leading-none
              tracking-[-0.08em]
              text-black/10
            "
          >
            {number}
          </span>

          <div className="h-px flex-1 bg-neutral-300"></div>

          <h2
            className="
              text-lg
              uppercase
              tracking-[0.45em]
            "
          >
            {title}
          </h2>

        </div>

      </Container>

    </section>
  );
}

export default ChapterDivider;