import { useEffect, useState } from "react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percent = (scrollTop / height) * 100;

      setProgress(percent);
    };

    window.addEventListener("scroll", update);

    update();

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-transparent">

      <div
        className="h-full bg-black transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}

export default ReadingProgress;