import React, { useRef, useState, useLayoutEffect } from "react";
import {
  useViewportScroll,
  useTransform,
  useSpring,
  motion,
  useReducedMotion,
} from "framer-motion";

export default function ParallaxItem({
  children,
  offset = 50,
  animateProp = "y",
  reverse = false,
  stiffness = 800,
  damping = 90,
  isSpring = true,
  animate = true,
  ...rest
}) {
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef(null);
  const { scrollY } = useViewportScroll();

  // start animating our element when we've scrolled it into view
  const initial = elementTop - clientHeight;
  // end our animation when we've scrolled the offset specified
  const final = elementTop + offset;

  const yRange = useTransform(
    scrollY,
    [initial, final],
    [reverse ? -offset : offset, reverse ? offset : -offset]
  );
  // apply a spring to ease the result
  const y = useSpring(yRange, { stiffness, damping });

  useLayoutEffect(() => {
    const element = ref?.current;
    // save our layout measurements in a function in order to trigger
    // it both on mount and on resize
    console.log(element);
    const onResize = () => {
      if (element) {
        // use getBoundingClientRect instead of offsetTop in order to
        // get the offset relative to the viewport
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY ||
            window.pageYOffset
        );
        setClientHeight(window.innerHeight);
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref, animate]);

  // Don't parallax if the user has "reduced motion" enabled
  if (prefersReducedMotion || !animate) {
    console.log("got called");
    return <>{children}</>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ [animateProp]: isSpring ? y : yRange }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
