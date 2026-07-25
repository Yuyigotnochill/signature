function Button({ children, variant = "primary" }) {
  const styles = {
    primary:
      "rounded-full bg-neutral-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl",

    secondary:
      "rounded-full border border-neutral-300 bg-white/60 px-7 py-3 text-sm font-semibold backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-neutral-900 hover:bg-white",
  };

  return (
    <button className={styles[variant]}>
      {children}
    </button>
  );
}

export default Button;