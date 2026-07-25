import Container from "../ui/Container";
import { FiArrowUpRight } from "react-icons/fi";

function Footer() {
  const navigation = [
    "Introduction",
    "Principles",
    "Chapters",
    "Timeline",
  ];

  const resources = [
    "Accessibility",
    "Typography",
    "Performance",
    "Design Systems",
  ];

  return (
    <footer className="mt-40 border-t border-neutral-200 bg-stone-50">
      <Container>
        <div className="grid gap-20 py-24 lg:grid-cols-[2fr_1fr_1fr]">

          {/* Left */}
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-neutral-500">
              Signature
            </p>

            <h2 className="mt-6 max-w-lg text-5xl font-bold tracking-tight">
              Exploring thoughtful digital craftsmanship.
            </h2>

            <p className="mt-8 max-w-md leading-8 text-neutral-600">
              Signature is an editorial project dedicated to modern web design,
              user experience, accessibility, typography, and performance.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Navigation
            </h3>

            <ul className="space-y-5">
              {navigation.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center justify-between text-neutral-700 transition hover:text-black"
                  >
                    {item}

                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-8 text-sm uppercase tracking-[0.3em] text-neutral-400">
              Topics
            </h3>

            <ul className="space-y-5">
              {resources.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="group flex items-center justify-between text-neutral-700 transition hover:text-black"
                  >
                    {item}

                    <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-neutral-200 py-8 text-sm text-neutral-500 md:flex-row">
          <p>© 2026 Signature. Crafted with intention.</p>

          <p>
            Built with React • Tailwind CSS • GSAP
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;