import React from "react";

function SectionHeader({ style, title }) {
  return (
    <div
      className="absolute top-32 border-b-2 pb-3 border-gray-700"
      style={{ ...style }}
    >
      <h2 className="dark:text-white xl:text-4xl 2xl:text-5xl font-bold">
        {title}
      </h2>
    </div>
  );
}

export default SectionHeader;
