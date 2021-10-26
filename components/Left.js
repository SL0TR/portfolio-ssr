import { AnimatedThemeButton } from "./Buttons";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import useParallax from "../libs/hooks/useParallax";


function Left() {
  const greetingEL = useRef(null);
  const greetingTyped = useRef(null);
  const offsetY = useParallax()


  useEffect(() => {
    const greetingString = [
      "Hello",
      "হ্যালো",
      "Bonjour",
      "Hola",
      "Hello",
    ];

    const options = {
      typeSpeed: 50,
      backSpeed: 50,
    };

    greetingTyped.current = new Typed(greetingEL.current, {
      ...options,
      strings: greetingString,
    });

    return () => {
      greetingTyped.current.destroy();
    };
  }, []);

 

  return (
    <div className="left" style={{ transform: `translateY(-${offsetY * 0.4}px)` }}>
      <h1>
        <span style={{ whiteSpace: "pre" }} ref={greetingEL} /> <br /> I&apos;m
        Mohaimin,
        <br /> A Full Stack Developer
      </h1>
      <p>JS / TS / React / React Native / Node</p>
      <a href="mailto:mohaiminislam94@gmail.com">
        <AnimatedThemeButton>Contact Me</AnimatedThemeButton>
      </a>
      
    </div>
  );
}

export default Left;
