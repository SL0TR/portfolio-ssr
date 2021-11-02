import React, { useRef } from "react";
import { useTyped, useWindowSize } from "hooks";
import HeroIllust from "components/heroIllust";
import { motion } from "framer-motion";
import {
  heroContentVariants,
  heroImgVariants,
} from "constants/animationVariants";
import ParallaxItem from "components/parallaxItem";
import { isScreenSize } from "libs/utils";

function HeroSection() {
  const greetingEL = useRef(null);
  useTyped({
    elemRef: greetingEL,
    strings: ["Hello", "হ্যালো", "Bonjour", "Hola", "Hello"],
  });
  const { width } = useWindowSize();

  return (
    <section className="min-h-screen flex p-10 xl:p-0 flex-col xl:flex-row  justify-around dark:bg-gray-800 bg-gray-100">
      <div className="flex w-full xl:w-1/2 xl:p-20 justify-center items-center">
        <motion.div
          className="w-full"
          variants={heroContentVariants({
            y: !isScreenSize({ width, bp: "md" }) ? 0 : 150,
          })}
          initial="hidden"
          animate="visible"
        >
          <ParallaxItem
            offset={isScreenSize({ width, bp: "md" }) ? 200 : 50}
            className="w-full"
          >
            <>
              <h1 className="dark:text-white text-xl 2xl:text-5xl xl:text-4xl font-bold leading-snug 2xl:leading-snug">
                <span style={{ whiteSpace: "pre" }} ref={greetingEL} /> <br />
                I&apos;m Mohaimin
                <br /> A Full Stack Developer
              </h1>
              <a href="#about-me">
                <button className="button text-xl mt-4">About Me</button>
              </a>
            </>
          </ParallaxItem>
        </motion.div>
      </div>
      <div className="flex w-full xl:w-1/2  xl:p-20 xl:justify-center items-center">
        <motion.div
          className="w-full"
          variants={heroImgVariants({
            y: !isScreenSize({ width, bp: "md" }) ? 0 : 150,
          })}
          initial="hidden"
          animate="visible"
        >
          <ParallaxItem
            reverse
            offset={isScreenSize({ width, bp: "md" }) ? 200 : 50}
            className="w-full"
          >
            <HeroIllust />
          </ParallaxItem>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
