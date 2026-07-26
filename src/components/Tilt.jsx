import { useRef } from "react";
import gsap from "gsap";

function Tilt({ children }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    const rotateX = -((y - rect.height / 2) / rect.height) * 12;

    gsap.to(ref.current, {
      rotateX,
      rotateY,
      transformPerspective: 1000,
      transformOrigin: "center",
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleLeave = () => {
    gsap.to(ref.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.7,
      ease: "power3.out",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="transform-gpu"
    >
      {children}
    </div>
  );
}

export default Tilt;