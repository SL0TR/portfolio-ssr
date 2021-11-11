export const heroImgVariants = ({ y } = {}) => ({
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y,
    transition: {
      duration: 1,
    },
  },
});

export const heroContentVariants = ({ y } = {}) => ({
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y,
    transition: {
      duration: 1,
    },
  },
});
