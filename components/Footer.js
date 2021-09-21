import React from 'react'
import styled from 'styled-components'
import { media } from '../styles/utils';


const FooterContainer = styled.div`
  height: 5%;
  display: flex;
  justify-content: center;
  align-items: center;

  ion-icon {
    color: ${props => props.theme.fg};
    margin: 0 2rem;
  }

  ${media(
      "sm"
    )`height: 10%;`}

`;

function Footer() {
    return (
        <FooterContainer>
            <a href="https://www.linkedin.com/in/mohaimin-islam/" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-linkedin" size="large" /> 
            </a>
            <a href="https://github.com/SL0TR" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-github" size="large" /> 
            </a>
            <a href="https://stackoverflow.com/users/8687318/mohaimin" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-stackoverflow" size="large" /> 
            </a>
        </FooterContainer>
    )
}

export default Footer
