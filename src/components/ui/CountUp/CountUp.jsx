import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Counts from 0 up to `to` the first time it scrolls into view.
 * Under prefers-reduced-motion the final value is shown immediately.
 */
export default function CountUp({
  to,
  duration = 1.6,
  prefix = "",
  suffix = "",
  className,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) {
      return undefined;
    }

    if (reduceMotion) {
      node.textContent = `${prefix}${to}${suffix}`;
      return undefined;
    }

    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        node.textContent = `${prefix}${Math.round(value)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, to, duration, prefix, suffix, reduceMotion]);

  return (
    <span ref={ref} className={className}>
      {reduceMotion ? `${prefix}${to}${suffix}` : `${prefix}0${suffix}`}
    </span>
  );
}
