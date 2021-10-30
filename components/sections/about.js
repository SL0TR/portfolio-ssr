import React, { useEffect, useRef } from "react";
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

  console.log({ containerHeight });

  useEffect(() => {
    if (aboutContainerHeight) {
      setContainerHeight((p) => ({ ...p, about: aboutContainerHeight }));
    }
  }, [aboutContainerHeight]);

  return (
    <div
      ref={containerHeightElem}
      className="min-h-screen relative flex flex-row justify-around dark:bg-gray-800 bg-white z-20"
    >
      <div className="relative w-1/3">
        <div
          // ref={containerRef}
          className="w-full absolute z-10"
          style={{
            transform: `translateX(${
              (offsetY - (containerHeight?.hero - 200)) * 0.6
            }px)`,
            top: `calc(50% - ${leftElemHeight / 2}px)`,
          }}
          ref={leftElem}
        >
          <img
            className="px-2"
            src="/guy-thinking.svg"
            alt="mohaimin thinking"
          />
        </div>
      </div>
      <div className="w-1/3"></div>
      <div className="relative w-1/3">
        <div
          className="w-full h-200 absolute"
          style={{
            transform: `translateX(-${
              (offsetY - (containerHeight?.hero - 300)) * 0.6
            }px)`,
            top: `calc(50% - ${rightElemHeight / 2}px)`,
          }}
          ref={rightElem}
        >
          <h2 className="dark:text-white text-5xl font-bold">About me</h2>
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
