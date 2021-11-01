import React, { useCallback, useEffect, useRef } from "react";
import { useElementSize, useTyped } from "hooks";
import { useGlobalStateContext } from "context/GlobalContext";
import HeroIllust from "components/heroIllust";
import { motion } from "framer-motion";
import { heroContentVariants } from "constants/animationVariants";

function HeroSection() {
  const { offsetY, setContainerHeight } = useGlobalStateContext();
  const greetingEL = useRef(null);
  useTyped({
    elemRef: greetingEL,
    strings: ["Hello", "হ্যালো", "Bonjour", "Hola", "Hello"],
  });
  const leftElem = useRef(null);
  const rightElem = useRef(null);
  const containerHeightElem = useRef(null);
  const { height: leftElemHeight } = useElementSize({ elementRef: leftElem });
  const { height: rightElemHeight } = useElementSize({ elementRef: rightElem });
  const { height: heroContainerHeight } = useElementSize({
    elementRef: containerHeightElem,
  });

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
        className="relative w-1/3"
        variants={heroContentVariants}
        initial="hidden"
        animate="visible"
      >
        <div
          className="w-full h-200 absolute"
          style={{
            transform: `translateY(-${offsetY * 0.4}px)`,
            top: `calc(50% - ${leftElemHeight / 2}px)`,
          }}
          ref={leftElem}
        >
          <h1 className="dark:text-white 2xl:text-5xl text-4xl font-bold leading-snug">
            <span style={{ whiteSpace: "pre" }} ref={greetingEL} /> <br />
            I&apos;m Mohaimin
            <br /> A Full Stack Developer
          </h1>
          <a href="#about-me">
            <button className="button text-xl mt-4">About Me</button>
          </a>
        </div>
      </motion.div>

      <div className="relative w-1/3">
        <div
          className="w-full absolute z-10"
          style={{
            transform: `translateY(${offsetY * 0.6}px)`,
            top: `calc(50% - ${rightElemHeight / 2}px)`,
          }}
          ref={rightElem}
        >
          <HeroIllust />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
