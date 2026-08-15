import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

function AnimatedCounter({ from = 0, to, suffix = "", duration = 2, decimals = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (val) => setCount(val),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  );
}

export default AnimatedCounter;
