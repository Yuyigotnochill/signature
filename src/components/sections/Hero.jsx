function Hero() {
  return (
    <section className="flex min-h-screen items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <p className="mb-5 text-sm uppercase tracking-[0.35em] text-neutral-500">
          The Design Handbook
        </p>

        <h1 className="max-w-5xl text-5xl font-semibold leading-tight md:text-7xl lg:text-8xl">
          Understanding the principles behind thoughtful digital experiences.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
          Signature is an interactive handbook exploring modern web design,
          typography, accessibility, performance, and the craft of building
          meaningful digital products.
        </p>
      </div>
    </section>
  );
}

export default Hero;