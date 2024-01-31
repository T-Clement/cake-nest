import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { fakeMenu } from '../../data/fakeData/fakeMenu.js'
import { formatPrice } from '../../utils/maths.js'
import AdminPannel from './admin/AdminPannel.jsx'

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
    box-shadow: -8px 8px 20px 0px rgb(0 0 0 / 20%);
    border-radius: ${theme.borderRadius.extraRound};
    padding: 32px 40px;

    img {
        max-width: 100%;
    }

    h4 {
        font-family: "Pacifico";
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
  return (
    <MainStyled>
        <GridListStyled>
            {fakeMenu.map(item => (
            <li key={ item.id }>
                
                    <ArticleStyled>
                        <img src={item.imageSource} alt="Photo de Cupcake" />
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
        {isAdmin ? <AdminPannel /> : "" }
        {/* div invisible qui fait la hauteur du panneau d'admin, qui est derrière le panneau admin
        rendu conditionnel && */}
    </MainStyled>
  )
}

export default Main