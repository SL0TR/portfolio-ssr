import styled from "styled-components";
import { media } from "../styles/utils";

const ThemeSwitcherBtn = styled.div`
  position: fixed;
  height: 4rem;
  width: 15rem;
  right: 5rem;
  z-index: 15;
  top: 5rem;
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme.darkBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${media("sm")`top: 2.5rem; right: 2.5rem`}

  .light,
  .dark {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    font-family: ${(props) => props.theme.paraFont};
    font-weight: 700;
    font-size: 1.7rem;
    z-index: 15;
    overflow: hidden;
  }

  .light {
    color: ${(props) => (props.isLightTheme ? props.theme.bg : props.theme.fg)};
  }

  .dark {
    color: ${(props) => (props.isLightTheme ? props.theme.fg : props.theme.bg)};
  }

  &::after {
    content: "";
    position: absolute;
    left: ${(props) => (props.isLightTheme ? "0" : "50%")};
    top: 0;
    width: 50%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    background-color: ${(props) => props.theme.darkBlue};
    border-radius: ${(props) => (props.isLightTheme ? "8px 0px" : "0px 8px")}
      ${(props) => (props.isLightTheme ? "0px 8px" : "8px 0px")};
  }
`;

const ThemeSwitcher = ({ isLightTheme, toggleTheme }) => {
  return (
    <ThemeSwitcherBtn onClick={toggleTheme} isLightTheme={isLightTheme}>
      <div className="light">Light</div>
      <div className="dark">Dark</div>
    </ThemeSwitcherBtn>
  );
};

export default ThemeSwitcher;
