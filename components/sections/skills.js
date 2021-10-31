import IconCloud from "components/iconCloud";
import SectionHeader from "components/sectionHeader";
import {
  backendIconTags,
  frontEndTags,
  mobileIconsTags,
  toolsIconTags,
} from "constants/iconTags";
import { useGlobalStateContext } from "context/GlobalContext";
import { useMultiplier } from "hooks";
import React, { useCallback, useEffect, useState } from "react";

const stacks = ["frontend", "backend", "mobile", "tools"];

function SkillsSection() {
  const { offsetY, containerHeight } = useGlobalStateContext();
  const currentSectionOffsetY = offsetY - containerHeight?.hero * 2;
  const [multiplier] = useMultiplier({
    offsetY,
    prevContainerHeight: containerHeight?.hero,
  });
  const [tags, setTags] = useState([]);
  const [selectStack, setSelectStack] = useState({
    frontend: true,
    backend: false,
    mobile: false,
    tools: false,
  });

  const getUpdatedTags = useCallback(() => {
    const newTags = [
      ...(selectStack?.frontend ? frontEndTags : []),
      ...(selectStack?.backend ? backendIconTags : []),
      ...(selectStack?.mobile ? mobileIconsTags : []),
      ...(selectStack?.tools ? toolsIconTags : []),
    ];

    setTags(newTags);
  }, [selectStack]);

  useEffect(() => {
    getUpdatedTags();
  }, [getUpdatedTags]);

  function handleClick(event, stack) {
    event.preventDefault();
    setSelectStack((pS) => ({ ...pS, [stack]: !pS[stack] }));
  }

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
      <div className="w-1/3 flex justify-center items-center">
        <div className="flex flex-col w-full justify-center  items-start pl-40 ">
          {stacks.map((stack) => (
            <div
              className=" my-4 relative  pl-8 overflow-hidden h-12 cursor-pointer"
              key={stack}
              onClick={(e) => handleClick(e, stack)}
            >
              <input type="checkbox" name="cb" id="cb1" />
              <span
                data-value={stack}
                className={`cursor-pointer transition-all ease-in-out rounded border-gray-900 border-2 absolute h-6 w-6 top-1/2 -translate-y-1/2 ${
                  selectStack[stack] ? "left-64" : "-left-px"
                }`}
              />
              <label
                className={`rounded cursor-pointer transition-all ease-in-out  capitalize text-4xl h-12 p-4 ${
                  selectStack[stack] && "bg-gray-800 text-gray-50"
                }`}
                htmlFor="cb1"
                data-value={stack}
              >
                {stack}
              </label>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-1/3 justify-center items-center">
        <IconCloud tags={tags} height={500} />
      </div>
    </section>
  );
}

export default SkillsSection;
