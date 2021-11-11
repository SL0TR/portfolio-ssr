import React from "react";
import ParallaxItem from "./parallaxItem";

function SectionHeader({ style, title, animate = true }) {
  return (
    <ParallaxItem
      animateProp="y"
      reverse={true}
      offset={80}
      className="absolute w-full flex justify-center"
      animate={animate}
    >
      <div
        className={`absolute top-0 border-b-2 pb-3 border-gray-700 ${
          !animate && "left-1/2 -translate-x-1/2 top-10"
        }`}
        style={{ ...style }}
      >
        <h2 className="dark:text-white md:text-4xl 2xl:text-5xl font-bold">
          {title}
        </h2>
      </div>
    </ParallaxItem>
  );
}

export default SectionHeader;
