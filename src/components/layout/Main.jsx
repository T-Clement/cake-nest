import React from 'react'
import styled from 'styled-components'
import { theme } from '../../theme'


const MainStyled = styled.main`
    flex: 1;
    /* box-shadow: ; */
    background: ${theme.colors.background_white};
`



function Main() {
  return (
    <MainStyled>
        C'est le Main
    </MainStyled>
  )
}

export default Main