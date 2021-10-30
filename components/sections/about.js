import React, { useCallback, useEffect, useRef, useState } from "react";
import { useElementSize } from "hooks";
import { useGlobalStateContext } from "context/GlobalContext";

function AboutSection() {
  const { offsetY, setContainerHeight, containerHeight } =
    useGlobalStateContext();
  const leftElem = useRef(null);
  const rightElem = useRef(null);
  const containerHeightElem = useRef(null);
  const { height: leftElemHeight } = useElementSize({ elementRef: leftElem });
  const { height: rightElemHeight } = useElementSize({ elementRef: rightElem });
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
      <h2
        className="dark:text-white text-5xl font-bold absolute top-32"
        style={{
          transform: `translateY(${
            multiplier * ((aboutOffsetY + 70) * 0.3)
          }px)`,
        }}
      >
        About me
      </h2>
      <div className="relative w-1/2">
        <div
          className="w-full absolute z-10"
          style={{
            transform: `translateX(${multiplier * translateX}px)`,
            top: `calc(50% - ${leftElemHeight / 2}px)`,
          }}
          ref={leftElem}
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
          className="w-full h-200 absolute px-32"
          style={{
            transform: `translateX(${-(multiplier * translateX)}px)`,
            top: `calc(50% - ${rightElemHeight / 2}px)`,
          }}
          ref={rightElem}
        >
          <p className="text-md mt-3">
            Experienced Full Stack Developer with a demonstrated history of
            working in the computer software industry. Skilled in the JavaScript
            stack building React, React Native and Node Applications. Team
            player with leading abilities.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
