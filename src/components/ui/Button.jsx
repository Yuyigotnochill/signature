import { FiArrowUpRight } from "react-icons/fi";

function Button({
  children,
  variant = "primary",
  icon = true,
  className = "",
}) {
  const styles = {
    primary:
      "bg-black text-white border-black hover:bg-neutral-900",

    secondary:
      "bg-transparent border-neutral-300 hover:border-black hover:bg-white",

    ghost:
      "border-transparent hover:bg-neutral-100",
  };

  return (
    <button
      className={`
        group
        inline-flex
        items-center
        gap-4
        rounded-full
        border
        px-8
        py-4
        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]
        transition-all
        duration-300
        hover:-translate-y-1
        ${styles[variant]}
        ${className}
      `}
    >
      {children}

      {icon && (
        <FiArrowUpRight
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-1
            group-hover:translate-x-1
          "
        />
      )}
    </button>
  );
}

export default Button;