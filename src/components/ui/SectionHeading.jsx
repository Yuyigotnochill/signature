function SectionHeading({
  label,
  title,
  description,
  align = "left",
}) {
  return (
    <div
      className={`${
        align === "center"
          ? "mx-auto max-w-4xl text-center"
          : "max-w-4xl"
      }`}
    >
      {/* Label */}
      <p className="mb-6 text-xs font-medium uppercase tracking-[0.45em] text-neutral-500">
        {label}
      </p>

      {/* Title */}
      <h2 className="text-5xl font-bold leading-[0.95] tracking-[-0.05em] md:text-6xl xl:text-7xl">
        {title}
      </h2>

      {/* Description */}
      {description && (
        <p className="mt-8 max-w-2xl text-lg leading-9 text-neutral-600">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;