import styled from "styled-components";
import { media } from "../styles/utils";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  padding: 5.5rem;
  background: ${(props) => props.theme.bg};
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

  .left,
  .right {
    width: 50%;
    padding: 2rem;
    ${media("sm")` width: 100%`}
  }

  .left {
    ${media("sm")`padding-top: 5rem;`}
  }

  ${media(
    "sm"
  )`flex-direction: column; padding: 2rem; justify-content: space-between`}
`;
