import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function VisualHierarchy() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Visual Hierarchy
            </p>

            <h2
              className="
                mt-8
                text-6xl
                font-black
                leading-[0.9]
                tracking-[-0.06em]
                md:text-7xl
                xl:text-8xl
              "
            >
              Guide attention
              <br />
              before interaction.
            </h2>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-16 lg:grid-cols-2">

          <Reveal delay={0.1}>

            <div>

              <p className="text-[22px] leading-[2] text-neutral-600">
                Visual hierarchy determines the order in which people
                consume information. Through size, contrast, spacing,
                typography and color, designers can naturally guide
                users toward the most important content.
              </p>

              <p className="mt-10 text-[22px] leading-[2] text-neutral-600">
                Strong hierarchy reduces effort because users no longer
                need to search for what matters. The interface itself
                provides direction.
              </p>

            </div>

          </Reveal>

          <Reveal delay={0.2}>

            <div className="rounded-[32px] border border-neutral-200 bg-white p-12">

              <h3 className="text-3xl font-bold">
                Hierarchy Checklist
              </h3>

              <ul className="mt-10 space-y-6">

                {[
                  "One clear focal point",
                  "Readable typography",
                  "Consistent spacing",
                  "Strong contrast",
                  "Logical reading flow",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-4 text-xl text-neutral-600"
                  >
                    <span className="h-2 w-2 rounded-full bg-black"></span>
                    {item}
                  </li>
                ))}

              </ul>

            </div>

          </Reveal>

        </div>

      </Container>
    </section>
  );
}

export default VisualHierarchy;