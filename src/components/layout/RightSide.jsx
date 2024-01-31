import React from 'react'
import styled from 'styled-components'
import ToggleAdmin from './ToggleAdmin'
import Profile from './Profile'


const RightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
`





function RightSide ({ isAdmin, setIsAdmin }) {
    
    return (
        <RightSideStyled>
            <ToggleAdmin  isAdmin = { isAdmin } setIsAdmin = { setIsAdmin }/>
            <Profile />
        </RightSideStyled>
    )
}

export default RightSide