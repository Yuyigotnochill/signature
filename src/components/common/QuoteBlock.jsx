import Reveal from "../animations/Reveal";

function QuoteBlock({ quote, author }) {
  return (
    <Reveal>
      <blockquote className="mx-auto max-w-5xl py-40 text-center">

        <div className="mx-auto mb-10 h-px w-20 bg-neutral-300"></div>

        <p
          className="
            text-5xl
            font-light
            italic
            leading-[1.4]
            tracking-[-0.03em]
          "
        >
          “{quote}”
        </p>

        {author && (
          <p
            className="
              mt-10
              text-sm
              uppercase
              tracking-[0.35em]
              text-neutral-500
            "
          >
            {author}
          </p>
        )}

      </blockquote>
    </Reveal>
  );
}

export default QuoteBlock;