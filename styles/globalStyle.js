import { createGlobalStyle, css } from "styled-components";
import { media } from "./utils";

export const GlobalStyle = createGlobalStyle`

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-rendering: optimizeLegibility;
  }

  html {
    font-size: 62.5%;

    ${media("sm")`font-size: 48.5%;`}
  }

  body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  h1, h2 , h3, h4, li, a {
    transition: all .3s ease-in-out;
    color: ${(props) => props.theme.fg};
    font-family: ${(props) => props.theme.headerFont};
    ${(props) => props.theme.defaultTransition};
  }

  h1 {
    font-size: 4.5rem;
  }

  h2 {
    font-size: 3.5rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h1,
  h2,
  h3,
  h5,
  p,
  button,
  a {
    text-align: ${(props) => props.center && props.theme.center};
    margin: 1rem 0;
  }


  p {
    font-size: 1.6rem;
    color: ${(props) => props.theme.fg};
    font-family: ${(props) => props.theme.paraFont};
    transition: ${(props) => props.theme.defaultTransition};
  }
}

`;
