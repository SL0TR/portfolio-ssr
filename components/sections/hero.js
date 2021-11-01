import React, { useCallback, useEffect, useRef } from "react";
import { useElementSize, useTyped } from "hooks";
import { useGlobalStateContext } from "context/GlobalContext";
import HeroIllust from "components/heroIllust";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import {
  heroContentVariants,
  heroImgVariants,
} from "constants/animationVariants";

function HeroSection() {
  const { setContainerHeight } = useGlobalStateContext();
  const greetingEL = useRef(null);
  useTyped({
    elemRef: greetingEL,
    strings: ["Hello", "হ্যালো", "Bonjour", "Hola", "Hello"],
  });
  const containerHeightElem = useRef(null);
  const { height: heroContainerHeight } = useElementSize({
    elementRef: containerHeightElem,
  });
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 300]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const updateContainerHeight = useCallback(() => {
    if (heroContainerHeight) {
      setContainerHeight((prev) => ({ ...prev, hero: heroContainerHeight }));
    }
  }, [heroContainerHeight]);

  useEffect(() => {
    updateContainerHeight();
  }, [heroContainerHeight]);

  return (
    <section
      ref={containerHeightElem}
      className="min-h-screen flex flex-row justify-around dark:bg-gray-800 bg-gray-100"
    >
      <motion.div
        className="flex w-1/3 justify-center items-center"
        variants={heroContentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="w-full" style={{ y: y2 }}>
          <h1 className="dark:text-white 2xl:text-5xl text-4xl font-bold leading-snug">
            <span style={{ whiteSpace: "pre" }} ref={greetingEL} /> <br />
            I&apos;m Mohaimin
            <br /> A Full Stack Developer
          </h1>
          <a href="#about-me">
            <button className="button text-xl mt-4">About Me</button>
          </a>
        </motion.div>
      </motion.div>

      <div className="flex w-1/3 justify-center items-center">
        <motion.div
          className="w-full"
          variants={heroImgVariants}
          initial="hidden"
          animate="visible"
          style={{ y: y1 }}
        >
          <HeroIllust />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
