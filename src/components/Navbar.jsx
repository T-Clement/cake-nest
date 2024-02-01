import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import { theme } from '../utils/theme/index';
import RightSide from './RightSide';

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    border-radius: ${theme.borderRadius.extraRound} ${theme.borderRadius.extraRound} 0 0;
    background-color: ${theme.colors.background_white};
`;

function LeftSide ({children}) {
    return (
        <>
            {children}
        </>
    )
}





function Navbar({isAdmin, setIsAdmin}) {
  return (
    <NavbarStyled>
        <LeftSide>
            <Logo />
        </LeftSide>
        <RightSide isAdmin={ isAdmin } setIsAdmin={ setIsAdmin } />
    </NavbarStyled>
        
  )
}

export default Navbar