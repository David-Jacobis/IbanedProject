import { forwardRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Scroll-reveal primitives built on Framer Motion's `whileInView`.
 *
 * - <Reveal>        a single element that fades + rises into view once.
 * - <Stagger>       a container whose <Stagger.Item> children reveal in sequence.
 *
 * Motion is opacity + small translate only (cheap to composite). When the
 * visitor prefers reduced motion these components render as plain elements
 * with no entrance behaviour at all — the content is simply there.
 */

const EASE = [0.16, 1, 0.3, 1];

export const Reveal = forwardRef(function Reveal(
  {
    as = "div",
    children,
    delay = 0,
    y = 24,
    duration = 0.6,
    once = true,
    amount = 0.25,
    className,
    ...rest
  },
  ref
) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: EASE }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

export const Stagger = forwardRef(function Stagger(
  {
    as = "div",
    children,
    stagger = 0.09,
    delayChildren = 0.05,
    once = true,
    amount = 0.2,
    className,
    ...rest
  },
  ref
) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

const StaggerItem = forwardRef(function StaggerItem(
  { as = "div", children, y = 24, duration = 0.55, className, ...rest },
  ref
) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    const Tag = as;
    return (
      <Tag ref={ref} className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, ease: EASE },
        },
      }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
});

Stagger.Item = StaggerItem;

export default Reveal;
