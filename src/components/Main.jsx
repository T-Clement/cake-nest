import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../utils/theme/index.js'
import { fakeMenu } from '../utils/data/fakeMenu.js'
import { formatPrice } from '../utils/maths.js'
import AdminPannel from './admin/AdminPannel.jsx'

import { TiDelete } from "react-icons/ti";

const MainStyled = styled.main`
    flex: 1;
    box-shadow: inset gray 0px 0px 60px -12px; 
    background: ${theme.colors.background_white};
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    /* padding: 1rem; */
    grid-template-columns: repeat(4, 1fr);
    /* height: 100%; */
    overflow-y: scroll;
    position: relative;
`;

const GridListStyled = styled.ul`
    margin: 42px 72px;
    display: grid;
    /* width: auto; */
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px 40px;

    li {
        list-style: none;
    }
`


const ArticleStyled = styled.article`
    position: relative;
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    padding: 32px 40px;

    img {
        max-width: 100%;
    }

    h4 {
        font-family: "Pacifico";
    }

    .delete-btn {
        position: absolute;
        top: 12px;
        right: 12px;
        background-color: transparent;
        /* color: ${theme.colors.white}; */
        /* border-radius: ${theme.borderRadius.circle}; */
        border: none;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
    
    svg {
        /* background-color: ${theme.colors.white};  */
        color: ${theme.colors.primary};
        width: ${theme.fonts.size.P3};
        height: auto;
        border-radius: ${theme.borderRadius.circle};
        
    }
`;


const DetailsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
    .price {
        color: ${theme.colors.primary};
    }

  .btn {
    background-color: ${theme.colors.primary};
    padding: 16px 32px;
    border-radius: ${theme.borderRadius.round};
    border: none;
    color: ${theme.colors.white};
  }
`;



function Main({ isAdmin }) {
    // console.log(fakeMenu);
    const [adminState, setAdminState] = useState({action : "add", content: {name: "", url: "", price: ""}}); // initialize when first toggle to admin mode to add tab
    const [isShown, setIsShown] = useState(true);


    const handleDelete = (e) => {
        console.log(e.target.id);
    }


    return (
    <MainStyled>
        <GridListStyled>
            {fakeMenu.map(item => (
            <li key={ item.id }>
                
                    <ArticleStyled>
                        <img src={item.imageSource} alt="Photo de Cupcake" />

                        {isAdmin ?<button id = {item.id} className='delete-btn' onClick={handleDelete}><TiDelete className="icon"/></button> : ""}

                        <h4>{item.title}</h4>
                        <DetailsStyled>
                            <p className='price'>{formatPrice(item.price)}</p>
                            <button className='btn'>Ajouter</button>
                        </DetailsStyled>
                    </ArticleStyled>
                </li>
            )
            )} 

        </GridListStyled>
        {isAdmin ? <AdminPannel 
            adminState = { adminState } setAdminState = { setAdminState } 
            isShown = { isShown }  setIsShown = { setIsShown }
            /> 
        : 
            "" }
        {/* div invisible qui fait la hauteur du panneau d'admin, qui est derrière le panneau admin
        rendu conditionnel && */}
    </MainStyled>
  )
}

export default Main