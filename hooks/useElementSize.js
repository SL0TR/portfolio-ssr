import { useCallback, useEffect, useState } from "react";

function useElementSize({ elementRef, checkResize = false }) {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        width: node.offsetWidth || 0,
        height: node.offsetHeight || 0,
      });
    }
  }, [elementRef]);

  useEffect(() => {
    updateSize();

    if (checkResize) {
      elementRef?.current?.addEventListener("resize", updateSize);
    }

    return () => {
      if (checkResize) {
        elementRef?.current?.addEventListener("resize", updateSize);
      }
    };
  }, []);

  return size;
}

export default useElementSize;
