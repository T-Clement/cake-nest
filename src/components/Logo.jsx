import React from 'react'
import { theme } from './../utils/theme/index';
import styled from 'styled-components';
import Cupcake from '../assets/images/cupcake.png';


const LogoStyled = styled.div`
    text-transform: uppercase;
    font-weight: ${theme.fonts.weights.bold};
    display: flex;
    align-items: center;

    span {
        font-size: ${theme.fonts.size.P4};
        color: ${theme.colors.primary}
    };
    img{
        width: 100px;
        padding: ${theme.fonts.size.P2};
    }
    `



function Logo() {

    
  return (
    <LogoStyled onClick={() => window.location.reload()}>
        
        <span>Cake</span>
        <img src={Cupcake} alt="logo cake nest" />
        <span>Nest</span>
    </LogoStyled>
  )
}

export default Logo