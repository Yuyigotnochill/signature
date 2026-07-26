import Reveal from "../animations/Reveal";
import Container from "../ui/Container";

function FullImage({
  src,
  alt,
  caption,
}) {
  return (
    <section className="py-44">

      <Container>

        <Reveal>

          <figure>

            <div className="overflow-hidden rounded-[36px]">

              <img
                src={src}
                alt={alt}
                className="
                  h-auto
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  hover:scale-[1.03]
                "
              />

            </div>

            {caption && (

              <figcaption
                className="
                  mt-8
                  text-sm
                  uppercase
                  tracking-[0.35em]
                  text-neutral-500
                "
              >
                {caption}
              </figcaption>

            )}

          </figure>

        </Reveal>

      </Container>

    </section>
  );
}

export default FullImage;