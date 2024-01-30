import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import Profile from './Profile';
import { theme } from '../../theme';

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
function RightSide ({children}) {
    return (
        <>
            {children}
        </>
    )
}




function Navbar() {
  return (
    <NavbarStyled>
        {/* <LeftSide> */}
            <Logo />
        {/* </LeftSide> */}
        {/* <RightSide> */}
            <Profile />
        {/* </RightSide> */}
    </NavbarStyled>
        
  )
}

export default Navbar