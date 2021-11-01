export const heroImgVariants = {
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export const heroContentVariants = {
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
