import React, { useContext, useState } from 'react'
import { Form, useNavigate  } from "react-router-dom";
import styled from 'styled-components';
import { theme } from '../utils/theme/index';
import { IoPersonCircleOutline } from "react-icons/io5";
import { UserContext } from '../App';
import apiAxios from '../../libs/axios';







const LoginStyled = styled.div`

    display: flex;
    flex-direction: column;
    gap: 32px;

    hr {
        padding: 2px 0;
        border: none;
        background-color: ${theme.colors.primary_cake};
        letter-spacing: 5px;
    }
    .username-field {
        padding: 12px;
        padding-left: 60px;
        width: 100%;
        border-radius: ${theme.borderRadius.round};
        &::placeholder {
            color: ${theme.colors.greyMedium};
        }
    }


    button, .username-field {
        /* border: ${theme.borderRadius.round}; */
    }


    div {
        position: relative;
    }

    .icon {
        height: 1.5rem;
        width: 1.5rem;
        /* background-color: red; */
        padding: 4px;
        position: absolute;
        box-sizing:border-box;
        top:50%;
        left:32px;
        transform: translateY(-50%);
    }

    svg {
        color:${theme.colors.greyMedium};
    }


    .btn {
        width: 100%;
        /* text-align: center; */
        display: flex;
        /* align-items: center; */
        justify-content: center;
        margin-top: 16px;
        padding: 12px;
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
    }
`





function LoginForm( ) {
    const {user, setUser } = useContext(UserContext);
    const  [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate ();

    

    const handleChange = (e) => {
        if(e.target.name == "password") {
            setPassword(e.target.value);

        }
        if(e.target.name == "email") {
            setEmail(e.target.value);

        }

    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Le formulaire est soumis")

    //     apiAxios.


    //     // use setUser comming from Context
    //     setUser("test");


    //     setPassword("");
    //     setEmail("");

    //     // username
    //     navigate(`/orderpage`);
        
    // }


  return (
    <LoginStyled>
        <h1 className="ttl">Bienvenue chez nous !</h1>
        <hr/>
        <section>
            <h2 className="ttl sub-ttl">Connectez-vous</h2>
            <Form method='post' action="/login">
            {/* <Form method='post' action="/login" onSubmit={ handleSubmit }> */}
                <div>
                    <input 
                        type="email" 
                        name='email' 
                        value = {email} 
                        placeholder='Entrez votre email' 
                        onChange = { handleChange }
                        autoComplete = "off" 
                        className='form-element username-field'
                        required 
                    />
                    <IoPersonCircleOutline className='icon'/>
                    {/* <IoPersonCircleOutline /> */}
                </div>
                <div>
                    <input type="password" name="password" value={password} onChange={(handleChange)} className='form-element username-field' placeholder='Entrez votre mot de passe' required/>
                </div>
                <button className='form-element btn' type='submit'>Mon espace</button>
            </Form>

        </section>
    </LoginStyled>
  )
}

export default LoginForm


