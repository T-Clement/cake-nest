import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { fakeMenu } from '../../data/fakeData/fakeMenu.js'

const MainStyled = styled.main`
    flex: 1;
    box-shadow: inset gray 0px 0px 60px -12px; 
    background: ${theme.colors.background_white};
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 1rem;
    grid-template-columns: repeat(4, 1fr);
    /* height: 100%; */
    overflow-y: scroll;
`;

const GridListStyled = styled.ul`
    display: grid;
    /* width: auto; */
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

`


const ArticleStyled = styled.article`
    img {
        max-width: 100%;
    }
`;






function Main() {
    console.log(fakeMenu);
  return (
    <MainStyled>
        <GridListStyled>
            {fakeMenu.map(item => (
            <li key={ item.id }>
                
                    <ArticleStyled>
                        <p>{item.title}</p>
                        <img src={item.imageSource} alt="Photo de Cupcake" />
                        <p>{item.price}</p>
                    </ArticleStyled>
                </li>
            )
            )} 

        </GridListStyled>
    </MainStyled>
  )
}

export default Main