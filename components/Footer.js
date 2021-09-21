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
    font-size: 3.5rem;

    ${media(
      "sm"
    )`font-size: 2.5rem;  margin: 0 1rem;`}

  }

  ${media(
      "sm"
    )`height: 10%;`}

`;

function Footer() {
    return (
        <FooterContainer>
            <a href="https://www.linkedin.com/in/mohaimin-islam/" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-linkedin" /> 
            </a>
            <a href="https://github.com/SL0TR" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-github"  /> 
            </a>
            <a href="https://stackoverflow.com/users/8687318/mohaimin" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-stackoverflow" /> 
            </a>
            <a href="https://twitter.com/MohaiminIslam11" rel="noopener noreferrer" target="_blank">
                <ion-icon name="logo-twitter" /> 
            </a>
        </FooterContainer>
    )
}

export default Footer
