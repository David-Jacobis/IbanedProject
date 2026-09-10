import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

const getPrefersReducedMotion = () =>
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia(REDUCED_MOTION_QUERY).matches;

/**
 * Wraps the app in a single Lenis instance for smooth scrolling.
 *
 * The effect is intentionally gentle (see `lerp`) — enough to feel fluid,
 * not so much that the page feels heavy or detached from the input. When the
 * visitor asks for reduced motion we skip Lenis entirely and fall back to the
 * browser's native scrolling.
 */
const SmoothScroll = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    getPrefersReducedMotion
  );

  useEffect(() => {
    const media = window.matchMedia(REDUCED_MOTION_QUERY);
    const onChange = () => setPrefersReducedMotion(media.matches);
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  if (prefersReducedMotion) {
    return children;
  }

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        wheelMultiplier: 1,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
