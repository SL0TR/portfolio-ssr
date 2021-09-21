import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, invertedTheme, theme } from "../styles";
import '../styles/particle.css';

function MyApp({ Component, pageProps }) {
  const [isLightTheme, setIsLightTheme] = useState(false);

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
  }

  return (
    <>
      <ThemeProvider theme={isLightTheme ? theme : invertedTheme}>
        <GlobalStyle />
        <Component
          {...pageProps}
          toggleTheme={toggleTheme}
          isLightTheme={isLightTheme}
        />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
