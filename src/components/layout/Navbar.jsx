const links = [
  "Foundations",
  "Typography",
  "Color",
  "Motion",
];

function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <a
          href="/"
          className="text-lg font-semibold tracking-[0.2em] uppercase"
        >
          Signature
        </a>

        <ul className="hidden items-center gap-8 text-sm text-neutral-600 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="transition-colors duration-300 hover:text-black"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;