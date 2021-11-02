import { useState, useEffect, useCallback } from "react";

function useScrollYPosition() {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = useCallback(() => {
    setOffsetY(window.pageYOffset);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return offsetY;
}

export default useScrollYPosition;
