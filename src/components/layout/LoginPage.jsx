import React from 'react';
import Login from './Login';
import styled from 'styled-components';
import {theme} from './../../theme/index.js';
import Logo from './Logo.jsx';

// import tarts from '../../../src/assets/tarts.jpg'
// import styled from "styled-components"
// lLopginpage
    // LoginPageStyled
        // Logo
        // LogoForm
    // LoginPageStyled

const LoginPageStyled = styled.div`
    height: 100vh;
    font-family: "Open sans";
    /* background-image: url("../../src/assets/tarts.jpg"); */
    background-image: 
        linear-gradient(rgba(0, 0, 0, 0.5), 
        rgba(0, 0, 0, 0.5)), 
        url("../../src/assets/tarts.jpg");

    background-size: cover;
    background-position: center;
    color: ${theme.colors.white};
    /* margin: ; */
    display: flex;
    flex-direction: column;
    gap: 64px;
    justify-content: center;
    align-items: center;
    text-align: center;
    .ttl {
        font-family: "Pacifico";
        font-size: ${theme.fonts.size.P5}
    }
    .sub-ttl {
        font-size: ${theme.fonts.size.P4}
    }

    .form-element {
        display: flex;
        /* text-align: center; */
    }

    

`;

function LoginPage({onSubmit}) {



  return (
    <LoginPageStyled>
        <Logo />
        <Login onSubmit={ onSubmit }/>
    </LoginPageStyled>
  )
}

export default LoginPage