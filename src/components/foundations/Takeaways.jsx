import { FiCheck } from "react-icons/fi";

import Container from "../ui/Container";
import Reveal from "../animations/Reveal";

const takeaways = [
  "Design solves problems before it decorates interfaces.",
  "Clarity should always come before creativity.",
  "Consistency builds trust and confidence.",
  "Accessibility is a requirement, not a feature.",
  "Performance is part of the user experience.",
  "Strong foundations make every future decision easier.",
];

function Takeaways() {
  return (
    <section className="py-44">
      <Container>

        <Reveal>

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.35em] text-neutral-500">
              Key Takeaways
            </p>

            <h2 className="mt-6 text-6xl font-black leading-none tracking-[-0.05em]">
              Remember these
              <br />
              principles.
            </h2>

            <p className="mt-8 max-w-3xl text-xl leading-10 text-neutral-600">
              Every successful digital product—whether it's Apple, Stripe,
              Linear or Notion—shares these timeless ideas.
            </p>

          </div>

        </Reveal>

        <div className="mt-24 space-y-6">

          {takeaways.map((item, index) => (

            <Reveal
              key={item}
              delay={index * 0.08}
            >

              <div
                className="
                  group
                  flex
                  items-center
                  gap-8
                  rounded-[28px]
                  border
                  border-neutral-200
                  bg-white/70
                  px-10
                  py-8
                  backdrop-blur-xl
                  transition-all
                  duration-500
                  hover:-translate-y-1
                  hover:border-black/20
                  hover:shadow-[0_25px_60px_rgba(0,0,0,.08)]
                "
              >

                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-black
                    text-white
                  "
                >
                  <FiCheck className="text-xl" />
                </div>

                <p className="text-2xl font-medium leading-relaxed tracking-tight">
                  {item}
                </p>

              </div>

            </Reveal>

          ))}

        </div>

      </Container>
    </section>
  );
}

export default Takeaways;