import IconCloud from "components/iconCloud";
import SectionHeader from "components/sectionHeader";
import {
  backendIconTags,
  frontEndTags,
  mobileIconsTags,
  stacks,
  toolsIconTags,
} from "constants/iconTags";
import { motion, useAnimation } from "framer-motion";
import useMediaQuery from "hooks/useMediaQuery";
import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function SkillsSection() {
  const { xxl, xl, md } = useMediaQuery();
  const [tags, setTags] = useState([]);
  const [selectStack, setSelectStack] = useState({
    frontend: true,
    backend: false,
    mobile: false,
    tools: false,
  });

  const canvasSize = xxl ? 520 : xl ? 450 : 300;

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
      className="min-h-screen relative flex flex-col md:flex-row justify-around dark:bg-gray-800 bg-gray-100"
    >
      <SectionHeader title="Skillset" animate={md} />
      <motion.div
        ref={ref}
        className="w-full md:w-1/2 flex justify-center items-center"
        initial="hidden"
        animate={controls}
        variants={boxVariants}
      >
        <div className="flex md:flex-col w-full justify-center p-5 mt-10 md:mt-0 md:px-0  items-start md:pl-16 lg:pl-40 xl:pl-64 xl:pt-20">
          {stacks.map((stack) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className=" my-4 relative rounded flex justify-center items-center  md:pl-8 overflow-hidden h-12 cursor-pointer"
              key={stack}
              onClick={(e) => handleClick(e, stack)}
            >
              <div
                data-value={stack}
                className={`cursor-pointer transition-all duration-300 ease-in-out rounded border-gray-900 border-2  w-6 ${
                  selectStack[stack]
                    ? " translate-x-10 opacity-0 md:h-12"
                    : "h-6 hidden md:block"
                }`}
              />
              <div
                className={`rounded cursor-pointer duration-300 transition-all ease-in-out  capitalize md:text-3xl  2xl:text-4xl p-2  md:p-4  ${
                  selectStack[stack] && "bg-gray-800 shadow text-gray-50"
                }`}
                data-value={stack}
              >
                {stack}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="flex w-full md:w-1/2 justify-center items-center xl:pt-32 xl:px-20"
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
