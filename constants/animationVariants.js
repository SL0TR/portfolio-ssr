export const heroImgVariants = ({ y = 100 } = {}) => ({
  hidden: { opacity: 0, y: 500 },
  visible: {
    opacity: 1,
    y,
    transition: {
      duration: 1,
    },
  },
});

export const heroContentVariants = ({ y = 150 } = {}) => ({
  hidden: { opacity: 0, y: -500 },
  visible: {
    opacity: 1,
    y,
    transition: {
      duration: 1,
    },
  },
});
