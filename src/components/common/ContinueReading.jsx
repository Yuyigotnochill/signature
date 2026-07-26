import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function ContinueReading({
  chapter,
  title,
  description,
  link,
}) {
  return (
    <section className="py-40">
      <Container>

        <Reveal>

          <Link
            to={link}
            className="
              group
              block
              overflow-hidden
              rounded-[40px]
              border
              border-neutral-200
              bg-white/70
              p-14
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-2
              hover:border-black
              hover:shadow-[0_40px_100px_rgba(0,0,0,.08)]
            "
          >

            <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">

              <div>

                <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
                  Continue Reading
                </p>

                <h2 className="mt-6 text-5xl font-black leading-none tracking-[-0.05em] md:text-7xl">
                  {chapter}
                </h2>

                <p className="mt-8 max-w-2xl text-xl leading-10 text-neutral-600">
                  {description}
                </p>

              </div>

              <div className="flex items-center gap-6">

                <span className="text-3xl font-semibold tracking-tight">
                  {title}
                </span>

                <div
                  className="
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-300
                    transition-all
                    duration-300
                    group-hover:bg-black
                    group-hover:text-white
                    group-hover:border-black
                  "
                >
                  <FiArrowRight
                    className="
                      text-2xl
                      transition-transform
                      duration-300
                      group-hover:translate-x-2
                    "
                  />
                </div>

              </div>

            </div>

          </Link>

        </Reveal>

      </Container>
    </section>
  );
}

export default ContinueReading;