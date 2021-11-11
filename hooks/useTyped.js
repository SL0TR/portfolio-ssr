import { useEffect, useRef } from "react";
import Typed from "typed.js";

const options = {
  typeSpeed: 50,
  backSpeed: 50,
};

function useTyped({ elemRef, strings = [] }) {
  const elemTyped = useRef(null);

  useEffect(() => {
    elemTyped.current = new Typed(elemRef.current, {
      ...options,
      strings,
    });

    return () => {
      elemTyped.current.destroy();
    };
  }, []);

  return elemTyped;
}

export default useTyped;
