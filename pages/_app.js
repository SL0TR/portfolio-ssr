import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, invertedTheme, theme } from "../styles";


function MyApp({ Component, pageProps }) {
  const [isLightTheme, setIsLightTheme] = useState(true);

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
