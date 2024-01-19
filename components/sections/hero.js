import React, { useRef } from "react";
import { useTyped } from "hooks";
import HeroIllust from "components/heroIllust";
import { motion } from "framer-motion";
import {
  heroContentVariants,
  heroImgVariants,
} from "constants/animationVariants";
import ParallaxItem from "components/parallaxItem";
import useMediaQuery from "hooks/useMediaQuery";

function HeroSection() {
  const greetingEL = useRef(null);
  useTyped({
    elemRef: greetingEL,
    strings: ["Hello", "হ্যালো", "Bonjour", "Hola", "Hello"],
  });
  const { md } = useMediaQuery();

  return (
    <section className="min-h-screen flex p-10 xl:p-0 flex-col xl:flex-row  justify-around dark:bg-gray-800 bg-gray-100">
      <div className="flex w-full xl:w-1/2 xl:p-20 justify-center items-center mt-10 xl:mt-0">
        <motion.div
          className="w-full"
          variants={heroContentVariants({
            y: md ? 200 : 0,
          })}
          initial="hidden"
          animate="visible"
        >
          <ParallaxItem
            offset={md ? 200 : 50}
            className="w-full flex justify-center flex-col items-center xl:block"
          >
            <>
              <h1 className="dark:text-white text-xl md:text-5xl xl:text-4xl 2xl:text-6xl font-bold md:leading-snug 2xl:leading-snug text-center xl:text-left">
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
      <div className="flex w-full xl:w-1/2 md:p-20 xl:justify-center items-center">
        <motion.div
          className="w-full"
          variants={heroImgVariants({
            y: md ? 200 : 0,
          })}
          initial="hidden"
          animate="visible"
        >
          <ParallaxItem reverse offset={md ? 200 : 50} className="w-full">
            {/* <img src="/coding-bro.svg" /> */}
            <HeroIllust />
          </ParallaxItem>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
