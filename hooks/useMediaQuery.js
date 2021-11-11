const breakpointSizes = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xxl: 1536,
};

import { useWindowSize } from "hooks";
import { useCallback, useEffect, useState } from "react";

function useMediaQuery() {
  const { width } = useWindowSize();
  const [breakpoints, setBreakPoints] = useState({
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  const getBreakpoints = useCallback(() => {
    const newBreakPoints = { ...breakpoints };

    Object.keys(breakpointSizes).forEach((key) =>
      breakpointSizes[key] <= width
        ? (newBreakPoints[key] = true)
        : (newBreakPoints[key] = false)
    );

    setBreakPoints(newBreakPoints);
  }, [width]);

  useEffect(() => {
    getBreakpoints();
  }, [getBreakpoints]);

  return breakpoints;
}

export default useMediaQuery;
