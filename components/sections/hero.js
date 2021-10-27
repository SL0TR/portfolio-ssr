import React, { useEffect, useRef } from "react";
import useParallax from "hooks/useParallax";
import useElementSize from "hooks/useElementSize";
import useTyped from "hooks/useTyped";

function HeroSection() {
  const greetingEL = useRef(null);
  useTyped({
    elemRef: greetingEL,
    strings: ["Hello", "হ্যালো", "Bonjour", "Hola", "Hello"],
  });
  const offsetY = useParallax();
  const leftElem = useRef(null);
  const rightElem = useRef(null);
  const { height: leftElemHeight } = useElementSize({ elementRef: leftElem });
  const { height: rightElemHeight } = useElementSize({ elementRef: rightElem });

  return (
    <div className="min-h-screen flex flex-row justify-around dark:bg-gray-800 bg-gray-100">
      <div className="relative w-1/3">
        <div
          className="w-full h-200 absolute"
          style={{
            transform: `translateY(-${offsetY * 0.4}px)`,
            top: `calc(50% - ${leftElemHeight / 2}px)`,
          }}
          ref={leftElem}
        >
          <h1 className="dark:text-white text-5xl font-bold">
            <span style={{ whiteSpace: "pre" }} ref={greetingEL} /> <br />
            I&apos;m Mohaimin
            <br /> A Full Stack Developer
          </h1>
          <p className="text-md mt-3">JS / TS / React / React Native / Node</p>
          <a href="mailto:mohaiminislam94@gmail.com">
            <button className="text-xl mt-2">Contact Me</button>
          </a>
        </div>
      </div>

      <div className="relative w-1/3">
        <div
          className="w-full absolute z-10"
          style={{
            transform: `translateY(${offsetY * 0.6}px)`,
            top: `calc(50% - ${rightElemHeight / 2}px)`,
          }}
          ref={rightElem}
        >
          <img className="px-2" src="/guy-laptop.svg" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
