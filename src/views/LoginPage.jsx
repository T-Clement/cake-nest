import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm';
import styled from 'styled-components';
import {theme} from '../utils/theme/index.js';
import Logo from '../components/Logo.jsx';
import tarts from '../assets/images/tarts.jpg';
import apiAxios from '../../libs/axios.js';
import { useActionData, useNavigate } from 'react-router-dom';
import { useUser } from '../hooks/useUser.jsx';


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
        url(${tarts});

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

// function action () {
//     const response = apiAxios.post("/login");
//     console.log(response);
// }


function LoginPage({onSubmit}) {
    // const navigate = useNavigate();
    // const actionData = useActionData()
    // const {setUser} = useUser(); // or Context
    // console.log("Action Data", actionData);

    // useEffect(() => {
    //     if (actionData) {
    //         // Si l'utilisateur est récupéré avec succès, met à jour l'état et redirige
    //         setUser(actionData);
    //         localStorage.setItem('user', JSON.stringify(actionData));
    //         navigate("/orderpage");
    //     }
    // }, [actionData, setUser, navigate]);




  return (
    <LoginPageStyled>
        <Logo />
        <LoginForm onSubmit={ onSubmit }/>
    </LoginPageStyled>
  )
}

export default LoginPage