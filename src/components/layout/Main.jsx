import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'
import { fakeMenu } from '../../data/fakeData/fakeMenu.js'

const MainStyled = styled.main`
    flex: 1;
    /* box-shadow: ; */
    
      /* width: 150px;
      height: 150px; */
    box-shadow: inset gray 0px 0px 60px -12px; 
    background: ${theme.colors.background_white};
    border-radius: 0 0 ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound};
    padding: 1rem;
`



function Main() {
    console.log(fakeMenu);
  return (
    <MainStyled>
        
    </MainStyled>
  )
}

export default Main