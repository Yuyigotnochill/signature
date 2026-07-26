import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const devices = [
  {
    title: "Desktop",
    width: "1440px",
    description:
      "Large screens provide generous space for multi-column layouts, rich visuals and complex navigation.",
  },
  {
    title: "Tablet",
    width: "768px",
    description:
      "Tablet layouts balance readability with flexibility by reducing columns while preserving comfortable spacing.",
  },
  {
    title: "Mobile",
    width: "390px",
    description:
      "Mobile interfaces prioritize simplicity, larger touch targets and vertically stacked content for effortless navigation.",
  },
  {
    title: "Fluid Systems",
    width: "Flexible",
    description:
      "Responsive layouts adapt naturally instead of relying on fixed dimensions, ensuring consistency across every screen size.",
  },
];

function ResponsiveDesign() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="max-w-5xl">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Responsive Design
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
              One design.
              <br />
              Every screen.
            </h2>

            <p className="mt-10 max-w-3xl text-[22px] leading-[2] text-neutral-600">
              Great layouts don't belong to one device. They adapt gracefully,
              preserving clarity and usability whether viewed on a phone,
              tablet or desktop.
            </p>

          </div>

        </Reveal>

        <div className="mt-28 grid gap-8 md:grid-cols-2">

          {devices.map((device, index) => (

            <Reveal key={device.title} delay={index * 0.08}>

              <article
                className="
                  rounded-[34px]
                  border
                  border-neutral-200
                  bg-white
                  p-10
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_rgba(0,0,0,.08)]
                "
              >

                <div
                  className="
                    flex
                    items-center
                    justify-between
                  "
                >

                  <h3 className="text-3xl font-black tracking-[-0.03em]">
                    {device.title}
                  </h3>

                  <span
                    className="
                      rounded-full
                      bg-neutral-100
                      px-5
                      py-2
                      text-sm
                      font-semibold
                    "
                  >
                    {device.width}
                  </span>

                </div>

                <div
                  className="
                    mt-10
                    flex
                    h-48
                    items-center
                    justify-center
                    rounded-[24px]
                    bg-neutral-100
                  "
                >

                  <div
                    className="
                      rounded-xl
                      border-2
                      border-neutral-400
                      bg-white
                    "
                    style={{
                      width:
                        device.title === "Desktop"
                          ? "220px"
                          : device.title === "Tablet"
                          ? "150px"
                          : device.title === "Mobile"
                          ? "90px"
                          : "180px",
                      height: "120px",
                    }}
                  />

                </div>

                <p className="mt-8 text-[20px] leading-[2] text-neutral-600">
                  {device.description}
                </p>

              </article>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default ResponsiveDesign;