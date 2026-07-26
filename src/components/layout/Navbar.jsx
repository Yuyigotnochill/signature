import { NavLink } from "react-router-dom";
import Container from "../ui/Container";

const links = [
  { label: "Foundations", to: "/foundations" },
  { label: "Typography", to: "/typography" },
  { label: "Color", to: "/color" },
  { label: "Motion", to: "/motion" },
  { label: "Layout", to: "/layout" },
];

function Navbar() {
  return (
    <header
    className="
      fixed
      inset-x-0
      top-0
      z-50
      border-b
      border-neutral-200
      bg-[#f7f4ef]/85
      backdrop-blur-2xl
      supports-[backdrop-filter]:bg-[#f7f4ef]/70
    "
  >

      <Container>

        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            className="
  text-lg
  font-black
  tracking-[0.45em]
  transition-opacity
  duration-300
  hover:opacity-70
"
          >
            SIGNATURE
          </NavLink>

          {/* Navigation */}
          <nav className="hidden items-center gap-12 lg:flex">

            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm uppercase tracking-[0.25em] transition-colors ${
                    isActive
                      ? "font-semibold text-black"
                      : "text-neutral-500 hover:text-black"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

          </nav>

        </div>

      </Container>

    </header>
  );
}

export default Navbar;