import IconCloud from "components/iconCloud";
import SectionHeader from "components/sectionHeader";
import {
  backendIconTags,
  frontEndTags,
  mobileIconsTags,
} from "constants/iconTags";
import { useGlobalStateContext } from "context/GlobalContext";
import { useMultiplier } from "hooks";
import React, { useState } from "react";

function SkillsSection() {
  const { offsetY, containerHeight } = useGlobalStateContext();
  const currentSectionOffsetY = offsetY - containerHeight?.hero * 2;
  const [multiplier] = useMultiplier({
    offsetY,
    prevContainerHeight: containerHeight?.hero,
  });

  const [toggle, setToggle] = useState(true);

  console.log(toggle);

  return (
    <section className="min-h-screen relative flex flex-row justify-around dark:bg-gray-800 bg-gray-100">
      <SectionHeader
        style={{
          transform: `translateY(-${
            multiplier * (currentSectionOffsetY * 0.3)
          }px)`,
        }}
        title="Skillset"
      />
      <button
        onClick={() => setToggle((p) => !p)}
        className="p-20 bg-blue-500 h-3"
      >
        Change icons set
      </button>
      {/* <div className="w-1/2"> */}
      <IconCloud tags={toggle ? frontEndTags : mobileIconsTags} />
      {/* </div> */}
    </section>
  );
}

export default SkillsSection;
