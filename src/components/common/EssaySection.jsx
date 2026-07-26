import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function EssaySection({
  eyebrow,
  title,
  lead,
  body = [],
  chapter,
}) {
  return (
    <section
  id="essay-section"
  className="relative py-52"
>

      <Container>

        {/* Top Label */}
        <Reveal>

          <div className="flex items-center gap-6">

            <div className="h-px w-24 bg-neutral-300"></div>

            <span className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              {eyebrow}
            </span>

          </div>

        </Reveal>

        {/* Massive Title */}
        <Reveal delay={0.1}>

          <div className="mt-20">

            <h2
              className="
                max-w-[1200px]
                text-[64px]
                font-black
                leading-[0.9]
                tracking-[-0.07em]
                md:text-[86px]
                xl:text-[118px]
              "
            >
              {title}
            </h2>

          </div>

        </Reveal>

        {/* Content */}
        <div className="mt-32 grid gap-16 xl:grid-cols-12">

          {/* Left */}
          <Reveal delay={0.2}>

            <aside className="lg:col-span-4">

              <div className="h-px w-20 bg-neutral-300"></div>

              <p
                className="
                  mt-10
                  max-w-[320px]
                  text-[22px]
                  font-medium
                  leading-[1.8]
                  text-neutral-500
                "
              >
                {lead}
              </p>

            </aside>

          </Reveal>

          {/* Right */}
          <div className="space-y-20 lg:col-span-8 min-w-0">

            {body.map((paragraph, index) => (

              <Reveal
                key={index}
                delay={0.3 + index * 0.1}
              >

                <div
                  className={
                    index % 2 === 0
                      ? "ml-auto max-w-[760px]"
                      : "lg:ml-[8%] max-w-[650px]"
                  }
                >

                  <p
                    className="
                      text-[22px]
                      leading-[2]
                      text-neutral-600
                    "
                  >
                    {paragraph}
                  </p>

                </div>

              </Reveal>

            ))}

            <Reveal delay={0.7}>

              <div className="flex items-center justify-between pt-16">

                <div className="flex items-center gap-6">

                  <div className="h-px w-20 bg-neutral-300"></div>

                  <span className="text-xs uppercase tracking-[0.45em] text-neutral-400">
                    Signature Handbook
                  </span>

                </div>

                <span
                  className="
                    text-[110px]
                    font-black
                    leading-none
                    tracking-[-0.08em]
                    text-black/5
                  "
                >
                  {chapter}
                </span>

              </div>

            </Reveal>

          </div>

        </div>

      </Container>

    </section>
  );
}

export default EssaySection;