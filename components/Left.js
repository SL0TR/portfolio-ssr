import { AnimatedThemeButton } from "./buttons";

function Left() {
  return (
    <div className="left">
      <h1>
        Hello, <br /> I&apos;m Mohaimin,
        <br /> A Full Stack JS Developer
      </h1>
      <p> React / React Native / Node </p>
      <a href="mailto:mohaiminislam94@gmail.com">
        <AnimatedThemeButton>Contact Me</AnimatedThemeButton>
      </a>
    </div>
  );
}

export default Left;
