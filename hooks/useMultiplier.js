import React, { useCallback, useEffect, useState } from "react";

function useMultiplier({ offsetY, prevContainerHeight }) {
  const [multiplier, setMultiplier] = useState(1);

  const updateMultiplier = useCallback(() => {
    const isOnCurrentSection = offsetY >= prevContainerHeight;

    if (isOnCurrentSection) {
      setMultiplier(-1);
    } else {
      setMultiplier(1);
    }
  }, [offsetY, prevContainerHeight]);

  useEffect(() => {
    updateMultiplier();
  }, [updateMultiplier]);

  return [multiplier, setMultiplier];
}

export default useMultiplier;
