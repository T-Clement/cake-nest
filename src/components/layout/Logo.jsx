import React from 'react'
import {theme} from './../../theme/index.js';
import styled from 'styled-components';
import cupcake from '../../assets/images/cupcake.png';


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
    <LogoStyled>
        <span>Cake</span>
        <img src={cupcake} alt="logo cake nest" />
        <span>Nest</span>
    </LogoStyled>
  )
}

export default Logo