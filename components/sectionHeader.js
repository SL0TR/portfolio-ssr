import React from "react";
import ParallaxItem from "./parallaxItem";

function SectionHeader({ style, title }) {
  return (
    <ParallaxItem
      animateProp="y"
      reverse={true}
      offset={80}
      className="absolute w-full flex justify-center"
    >
      <div
        className="absolute top-0 border-b-2 pb-3 border-gray-700"
        style={{ ...style }}
      >
        <h2 className="dark:text-white xl:text-4xl 2xl:text-5xl font-bold">
          {title}
        </h2>
      </div>
    </ParallaxItem>
  );
}

export default SectionHeader;
