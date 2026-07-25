function SectionHeading({ label, title, description }) {
  return (
    <div className="max-w-4xl">

      <p className="mb-5 text-sm font-medium uppercase tracking-[0.35em] text-neutral-500">
        {label}
      </p>

      <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl xl:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-10 max-w-2xl text-lg leading-9 text-neutral-600">
          {description}
        </p>
      )}

    </div>
  );
}

export default SectionHeading;