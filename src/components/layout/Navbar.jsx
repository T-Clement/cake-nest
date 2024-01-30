import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import Profile from './Profile';

const NavbarStyled = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
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