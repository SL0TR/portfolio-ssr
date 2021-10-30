import React, { useCallback, useEffect, useRef, useState } from "react";
import { useElementSize } from "hooks";
import { useGlobalStateContext } from "context/GlobalContext";
import SectionHeader from "components/sectionHeader";

function AboutSection() {
  const { offsetY, setContainerHeight, containerHeight } =
    useGlobalStateContext();
  const containerHeightElem = useRef(null);
  const { height: aboutContainerHeight } = useElementSize({
    elementRef: containerHeightElem,
  });
  const aboutOffsetY = offsetY - containerHeight?.hero;
  const translateX = aboutOffsetY * 0.6;
  const [multiplier, setMultiplier] = useState(1);

  const updateContainerHeight = useCallback(() => {
    if (aboutContainerHeight) {
      setContainerHeight((prev) => ({ ...prev, about: aboutContainerHeight }));
    }
  }, [aboutContainerHeight]);

  const updateMultiplier = useCallback(() => {
    const isOnCurrentSection = offsetY >= containerHeight?.hero;

    if (isOnCurrentSection) {
      setMultiplier(-1);
    } else {
      setMultiplier(1);
    }
  }, [offsetY, containerHeight.hero]);

  useEffect(() => {
    updateContainerHeight();
  }, [aboutContainerHeight]);

  useEffect(() => {
    updateMultiplier();
  }, [updateMultiplier]);

  return (
    <div
      ref={containerHeightElem}
      className="min-h-screen relative flex flex-row justify-around dark:bg-gray-800 bg-white z-20 overflow-hidden"
    >
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
          <p className="2xl:text-xl md:text-md mt-3">
            I love building things that puts value into peoples lives. I have
            started my career as a frontend developer but then transitioned to a
            full stack role. I have built multiple React web applications, React
            Native mobile apps and REST APIs with Node. I primarily work with
            JavaScript and also love TypeScript.
            <br />
            <br />
            I have almost 5 years of experience in the software industry.
            Because of being a fronten developer first, I have great experience
            in building Web and Mobile UIs with complex features and design.
            Also, tackeled great challenges in the world of backend too. I
            prefer to keep learning, continue challenging myself, and do
            interesting things that matter.
            <br />
            <br />
            I’m passionate, expressive, with a natural ability to adapt fast.
            I’m a quick learner, able to pick up new skills and juggle different
            projects and roles with relative ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
