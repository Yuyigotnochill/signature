import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const colors = [
  {
    name: "Blue",
    hex: "#2563EB",
    meaning: "Trust & Stability",
    description:
      "Blue communicates confidence, reliability and intelligence. That's why banks, technology companies and enterprise software frequently rely on it.",
  },
  {
    name: "Red",
    hex: "#DC2626",
    meaning: "Energy & Urgency",
    description:
      "Red immediately attracts attention. It creates excitement, passion and urgency, making it effective for calls to action and alerts.",
  },
  {
    name: "Green",
    hex: "#16A34A",
    meaning: "Growth & Balance",
    description:
      "Green is associated with health, nature and prosperity. It is commonly used in finance, wellness and sustainability products.",
  },
  {
    name: "Yellow",
    hex: "#FACC15",
    meaning: "Optimism & Creativity",
    description:
      "Yellow feels energetic and optimistic when used carefully. Small accents create warmth without overwhelming the interface.",
  },
];

function ColorPsychology() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Psychology
            </p>

            <h2
              className="
                mt-8
                text-6xl
                md:text-7xl
                xl:text-8xl
                font-black
                tracking-[-0.06em]
                leading-[0.9]
              "
            >
              Color shapes emotion
              <br />
              before language.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Humans react to color almost instantly. Although culture and
              context influence perception, certain emotional associations
              appear consistently across digital experiences.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {colors.map((color, index) => (

            <Reveal key={color.name} delay={index * 0.08}>

              <article
                className="
                  rounded-[34px]
                  border
                  border-neutral-200
                  bg-white
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                "
              >

                <div
                  className="h-44"
                  style={{
                    background: color.hex,
                  }}
                />

                <div className="p-10">

                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {color.name}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-sm
                      uppercase
                      tracking-[0.35em]
                      text-neutral-400
                    "
                  >
                    {color.meaning}
                  </p>

                  <p
                    className="
                      mt-8
                      text-[20px]
                      leading-[2]
                      text-neutral-600
                    "
                  >
                    {color.description}
                  </p>

                </div>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default ColorPsychology;