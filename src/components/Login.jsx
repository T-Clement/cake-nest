import React, { useContext, useState } from 'react'
import { useNavigate  } from "react-router-dom";
import styled from 'styled-components';
import { theme } from '../utils/theme/index';
import { IoPersonCircleOutline } from "react-icons/io5";
import { UserContext } from '../App';







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





function Login( ) {
    const {user, setUser } = useContext(UserContext);
    const  [username, setUsername] = useState("");
    const navigate = useNavigate ();

    

    const handleChange = (e) => {
        setUsername(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Le formulaire est soumis")

        // use setUser comming from Context
        setUser(username);


        setUsername("");

        // username
        navigate(`/orderpage`);
        
    }


  return (
    <LoginStyled>
        <h1 className="ttl">Bienvenue chez nous !</h1>
        <hr/>
        <section>
            <h2 className="ttl sub-ttl">Connectez-vous</h2>
            <form onSubmit={ handleSubmit }>
                <div>
                    <input 
                        type="text" 
                        name='username' 
                        value = {username} 
                        placeholder='Entrez votre prénom' 
                        onChange = { handleChange }
                        autoComplete = "off" 
                        className='form-element username-field'
                        required 
                    />
                    <IoPersonCircleOutline className='icon'/>
                    {/* <IoPersonCircleOutline /> */}
                </div>
                <button className='form-element btn' type='submit'>Mon espace</button>
            </form>

        </section>
    </LoginStyled>
  )
}

export default Login


