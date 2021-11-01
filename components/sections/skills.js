import IconCloud from "components/iconCloud";
import SectionHeader from "components/sectionHeader";
import {
  backendIconTags,
  frontEndTags,
  mobileIconsTags,
  stacks,
  toolsIconTags,
} from "constants/iconTags";
import { useGlobalStateContext } from "context/GlobalContext";
import { motion, useAnimation } from "framer-motion";
import { useMultiplier, useWindowSize } from "hooks";
import { isScreenSize } from "libs/utils";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function SkillsSection() {
  const { offsetY, containerHeight } = useGlobalStateContext();
  const currentSectionOffsetY = offsetY - containerHeight?.hero * 2;
  const [multiplier] = useMultiplier({
    offsetY,
    prevContainerHeight: containerHeight?.hero,
  });
  const { width } = useWindowSize();
  const [tags, setTags] = useState([]);
  const [selectStack, setSelectStack] = useState({
    frontend: true,
    backend: false,
    mobile: false,
    tools: false,
  });

  const canvasSize = isScreenSize({ width, bp: "2xl" }) ? 500 : 400;

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
  const controls = useAnimation();
  const { ref, inView } = useInView();

  const boxVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <section
      id="skills"
      className="min-h-screen relative flex flex-row justify-around dark:bg-gray-800 bg-gray-100"
    >
      <SectionHeader
        style={{
          transform: `translateY(-${
            multiplier * (currentSectionOffsetY * 0.3)
          }px)`,
        }}
        title="Skillset"
      />
      <motion.div
        ref={ref}
        className="w-1/3 flex justify-center items-center"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
        <div className="flex flex-col w-full justify-center  items-start pl-40 xl:pl-30 xl:pt-20">
          {stacks.map((stack) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" my-4 relative rounded  pl-8 overflow-hidden h-12 cursor-pointer"
              key={stack}
              onClick={(e) => handleClick(e, stack)}
            >
              <input type="checkbox" name="cb" id="cb1" />
              <span
                data-value={stack}
                className={`cursor-pointer transition-all duration-300 ease-in-out rounded border-gray-900 border-2 absolute  w-6 top-1/2 -translate-y-1/2 ${
                  selectStack[stack] ? "left-64 h-12" : "-left-px h-6"
                }`}
              />
              <label
                className={`rounded cursor-pointer duration-300 transition-all ease-in-out  capitalize text-3xl  2xl:text-4xl h-12 p-4 ${
                  selectStack[stack] && "bg-gray-800 shadow text-gray-50"
                }`}
                htmlFor="cb1"
                data-value={stack}
              >
                {stack}
              </label>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex w-1/3 justify-center items-center xl:pt-32 xl:px-20"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
        <IconCloud tags={tags} height={canvasSize} width={canvasSize} />
      </motion.div>
    </section>
  );
}

export default SkillsSection;
