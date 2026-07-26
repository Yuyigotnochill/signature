import { Link } from "react-router-dom";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

function FinalMessage() {
  return (
    <section className="py-56">
      <Container>

        <Reveal>

          <div className="mx-auto max-w-5xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-neutral-500">
              Final Chapter
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
              Design
              <br />
              With Purpose.
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
              Every interface tells a story. Every interaction shapes an
              experience. Great design is never created by accident—it is the
              result of thoughtful decisions, empathy and continuous
              improvement.
            </p>

            <p
              className="
                mx-auto
                mt-8
                max-w-3xl
                text-[22px]
                leading-[2]
                text-neutral-600
              "
            >
              Thank you for exploring <strong>Signature</strong>. May these
              principles inspire you to build products that are clear,
              consistent, accessible and meaningful for everyone.
            </p>

            <div className="mt-16">

              <Link
                to="/"
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-black
                  px-8
                  py-4
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  transition-all
                  duration-300
                  hover:bg-black
                  hover:text-white
                "
              >
                Start Again
              </Link>

            </div>

          </div>

        </Reveal>

      </Container>
    </section>
  );
}

export default FinalMessage;