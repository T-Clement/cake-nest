import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'


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
  return (
    <MainStyled>
        C'est le Main
    </MainStyled>
  )
}

export default Main