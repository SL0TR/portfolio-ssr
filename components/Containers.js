import styled from "styled-components";
import { media } from "../styles/utils";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 200vh;
  align-items: center;
  flex-direction: column;
  padding: 5.5rem;
  background: ${(props) => props.theme.bg};
  
  .main-content {
    display: flex;
    justify-content: center;
    height: 95%;
    width:  100%;
    align-items: center;
    z-index: 5;
    
    .left,
    .right {
      width: 50%;
      padding: 2rem;
      ${media("sm")` width: 100%`}
    }

    .left {
      ${media("sm")`padding-top: 6rem;  text-align: center;`}
      position: absolute;
      left: 10rem;
      top: 45rem;

      h1 {
        

        ${media(
          "sm"
        )`font-size: 3.5rem;`}
      }

      margin-bottom: 1rem;

    }

    h1, p, a {
      margin-bottom: 1.5rem;
    }

    /* .right {
      width: 
    } */

    ${media(
      "sm"
    )`flex-direction: column; justify-content: space-between; height: 90%;`}

  }

  ${media(
    "sm"
  )`flex-direction: column; padding: 2rem; justify-content: space-between;`}

  
`;
