import { AnimatedThemeButton } from "./Buttons";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
// import anime from "animejs";

function Left() {
  const greetingEL = useRef(null);
  const greetingTyped = useRef(null);
  // const animationRef = useRef(null);

  useEffect(() => {
    const greetingString = [
      "Hello",
      "হ্যালো",
      "こんにちは",
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

  // useEffect(() => {
  //   animationRef.current = anime({
  //     targets: ".el",
  //     translateY: 250,
  //     delay: function (el, i) {
  //       return i * 100;
  //     },
  //     // loop: true,
  //     // direction: "alternate",
  //     easing: "easeInOutSine",
  //   });
  // }, []);

  return (
    <div className="left">
      {/* <div className="el">Habahsdbashd </div> */}
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
