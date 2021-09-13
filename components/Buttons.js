import styled from "styled-components";

export const AnimatedButton = styled.button`
  padding: 1rem 3.6rem;
  border: none;
  background: none;
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.fg};
  border: 2px solid ${(props) => props.theme.fg};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.paraFont};
  border-radius: 0.3em;
  transition: ${(props) => props.theme.defaultTransition};
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;

  &:before {
    content: "";
    background-color: ${(props) => props.theme.bg};
    opacity: 0.5;
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: ${(props) => props.theme.defaultTransition};
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.fg};
    color: ${(props) => props.theme.bg};
    border-bottom: 4px solid darken(${(props) => props.theme.fg}, 10%);
    &:before {
      transform: skewX(-45deg) translateX(35.5rem);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const AnimatedThemeButton = styled(AnimatedButton)`
  color: ${(props) => props.theme.darkBlue};
  border: 2px solid ${(props) => props.theme.darkBlue};

  &:hover {
    background-color: ${(props) => props.theme.darkBlue};
    color: ${(props) => props.theme.bg};
    border-bottom: 4px solid darken(${(props) => props.theme.darkBlue}, 10%);
  }
`;
