import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const brands = [
  {
    name: "Spotify",
    color: "#1DB954",
    title: "Energy Through Green",
    description:
      "Spotify uses a vibrant green to communicate freshness, creativity and momentum. The accent color immediately becomes part of the brand's identity.",
  },
  {
    name: "Coca-Cola",
    color: "#E61C2D",
    title: "Passion Through Red",
    description:
      "Coca-Cola's iconic red evokes excitement, celebration and energy. Decades of consistent use have made the color instantly recognizable.",
  },
  {
    name: "Facebook",
    color: "#1877F2",
    title: "Trust Through Blue",
    description:
      "Blue creates a sense of reliability and calm, making it a natural choice for social platforms, financial products and enterprise software.",
  },
  {
    name: "McDonald's",
    color: "#FFC300",
    title: "Optimism Through Yellow",
    description:
      "Yellow attracts attention and conveys warmth and happiness. Combined with red, it creates one of the world's most memorable brand identities.",
  },
];

function BrandColors() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>
          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Brand Colors
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
              Great brands own
              <br />
              a single color.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Consistency transforms color into memory. Over time, people begin
              recognizing a brand long before they read its name.
            </p>

          </div>
        </Reveal>

        <div className="mt-28 space-y-12">

          {brands.map((brand, index) => (

            <Reveal key={brand.name} delay={index * 0.08}>

              <article
                className="
                  grid
                  gap-10
                  border-t
                  border-neutral-200
                  pt-12
                  lg:grid-cols-12
                "
              >

                {/* Color Block */}

                <div className="lg:col-span-2">

                  <div
                    className="
                      h-36
                      rounded-[24px]
                      border
                      border-neutral-200
                    "
                    style={{
                      backgroundColor: brand.color,
                    }}
                  />

                </div>

                {/* Brand */}

                <div className="lg:col-span-3">

                  <h3 className="text-4xl font-black tracking-[-0.04em]">
                    {brand.name}
                  </h3>

                </div>

                {/* Description */}

                <div className="lg:col-span-7">

                  <h4 className="text-2xl font-bold">
                    {brand.title}
                  </h4>

                  <p className="mt-6 text-[20px] leading-[2] text-neutral-600">
                    {brand.description}
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

export default BrandColors;