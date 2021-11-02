import React from "react";
import { useOnFullView } from "hooks";
import SectionHeader from "components/sectionHeader";
import { getExpInyears } from "libs/utils";
import ParallaxItem from "components/parallaxItem";

function AboutSection() {
  const [isOnFullView] = useOnFullView();

  return (
    <section
      id="about-me"
      className="min-h-screen relative flex flex-col xl:flex-row justify-around dark:bg-gray-800 bg-white z-20 overflow-hidden"
    >
      <SectionHeader title="About me" />
      <div className="flex w-full xl:w-1/2 xl:p-20 justify-center items-center">
        <ParallaxItem
          animateProp="x"
          reverse={isOnFullView ? false : true}
          offset={300}
        >
          <div className="w-full">
            <img
              className="px-16"
              src="/guy-thinking.svg"
              alt="mohaimin thinking"
            />
          </div>
        </ParallaxItem>
      </div>
      <div className="flex w-full xl:w-1/2 xl:p-20 justify-center items-center">
        <ParallaxItem
          animateProp="x"
          reverse={isOnFullView ? true : false}
          offset={500}
        >
          <div className="w-full p-20">
            <p className="2xl:text-xl md:text-md mt-3 2xl:leading-loose">
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
