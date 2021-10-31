import React, { useCallback, useEffect, useRef, useState } from "react";
import { useMultiplier } from "hooks";
import { useGlobalStateContext } from "context/GlobalContext";
import SectionHeader from "components/sectionHeader";
import { getExpInyears } from "libs/utils";

function AboutSection() {
  const { offsetY, containerHeight } = useGlobalStateContext();
  const aboutOffsetY = offsetY - containerHeight?.hero;
  const translateX = aboutOffsetY * 0.6;
  const [multiplier] = useMultiplier({
    offsetY,
    prevContainerHeight: containerHeight?.hero,
  });

  return (
    <section className="min-h-screen relative flex flex-row justify-around dark:bg-gray-800 bg-white z-20 overflow-hidden">
      <SectionHeader
        style={{
          transform: `translateY(${multiplier * (aboutOffsetY * 0.3)}px)`,
        }}
        title="About me"
      />
      <div className="relative w-1/2">
        <div
          className="w-full absolute z-10"
          style={{
            transform: `translate(${multiplier * translateX}px, -50%)`,
            top: `50%`,
          }}
        >
          <img
            className="px-16"
            src="/guy-thinking.svg"
            alt="mohaimin thinking"
          />
        </div>
      </div>
      <div className="relative w-1/2">
        <div
          className="w-full h-200 absolute px-16 xl:pt-32 2xl:pt-0"
          style={{
            transform: `translate(${-(multiplier * translateX)}px, -50%)`,
            top: `50%`,
          }}
        >
          <p className="2xl:text-xl md:text-md mt-3 2xl:leading-loose">
            I love building things that put value into people's lives. I have
            started my career as a frontend developer but then transitioned to a
            full-stack role. I have built multiple React web applications, React
            Native mobile apps and REST APIs with Node. I primarily work with
            JavaScript and also love TypeScript.
            <br />
            <br />I have ~{`${getExpInyears()} `}
            years of experience in the software industry. Because of being a
            frontend developer first, I have great experience in building Web
            and Mobile UIs with complex features and design. Also, tackled great
            challenges in the world of backend too. I prefer to keep learning,
            continue challenging myself, and do interesting things that matter.
            I’m a quick learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
