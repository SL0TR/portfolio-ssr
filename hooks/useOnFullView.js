import { useGlobalStateContext } from "context/GlobalContext";
import { useCallback, useEffect, useState } from "react";

function useOnFullView(numOfSection = 1) {
  const { offsetY } = useGlobalStateContext();
  const [isOnFullView, setIsOnFullView] = useState(false);

  const handleResize = useCallback(() => {
    const isOnCurrentSection = offsetY >= window?.innerHeight * numOfSection;

    if (isOnCurrentSection) {
      setIsOnFullView(true);
    } else {
      setIsOnFullView(false);
    }
  }, [offsetY]);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return [isOnFullView, setIsOnFullView];
}

export default useOnFullView;
