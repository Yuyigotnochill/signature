const links = [
  "Foundations",
  "Typography",
  "Color",
  "Motion",
];

function Navbar() {
  return (
    <header className="fixed left-1/2 top-5 z-50 w-full -translate-x-1/2 px-6 lg:px-8">
      <nav className="mx-auto flex max-w-7xl translate-x-8 items-center justify-between overflow-hidden rounded-full border border-black/5 bg-white/70 px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,.08)] backdrop-blur-xl">

       <a
  href="/"
  className="ml-8 lg:ml-16 text-lg font-semibold uppercase tracking-[0.28em]"
>
  SIGNATURE
</a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="rounded-full px-3 py-2 text-sm text-neutral-600 transition-all duration-300 hover:bg-black/5 hover:text-black"
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