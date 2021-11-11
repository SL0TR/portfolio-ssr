import React from "react";
import SectionHeader from "components/sectionHeader";
import { getExpInyears } from "libs/utils";
import ParallaxItem from "components/parallaxItem";
import useMediaQuery from "hooks/useMediaQuery";

function AboutSection() {
  const { xxl, xl } = useMediaQuery();

  return (
    <section
      id="about-me"
      className="min-h-screen relative flex flex-col xl:flex-row md:justify-center lg:justify-around dark:bg-gray-800 bg-white z-20 overflow-hidden"
    >
      <SectionHeader title="About me" animate={xl} />
      <div className="flex w-full xl:w-1/2 p-10 md:px-32 mt-20  lg:mt-0 lg:p-48 xl:p-28 justify-center items-center">
        <ParallaxItem animateProp="x" offset={xxl ? 300 : 150} animate={xl}>
          <div className="w-full">
            <img
              src="/questions-bro.svg"
              alt="mohaimin thinking"
              width="600"
              height="400"
            />
          </div>
        </ParallaxItem>
      </div>
      <div className="flex w-full xl:w-1/2 md:p-10 xl:p-16 justify-center items-center">
        <ParallaxItem animateProp="x" offset={700} animate={xl}>
          <div className="w-full p-5 xl:p-20">
            <p className="text-sm md:text-xl md:text-md mt-3 2xl:leading-loose">
              I love building things that put value into people's lives. I have
              started my career as a frontend developer but then transitioned to
              a full-stack role. I have built multiple React web applications,
              React Native mobile apps and REST APIs with Node. I primarily work
              with JavaScript and also love TypeScript.
              <br />
              <br />I have ~{`${getExpInyears()} `}
              years of experience in the software industry. Because of being a
              frontend developer first, I have great experience in building Web
              and Mobile UIs with complex features and design. Also, tackled
              great challenges in the world of backend too. I prefer to keep
              learning, continue challenging myself, and do interesting things
              that matter. I’m a quick learner, able to pick up new skills and
              juggle different projects and roles with relative ease.
            </p>
          </div>
        </ParallaxItem>
      </div>
    </section>
  );
}

export default AboutSection;
