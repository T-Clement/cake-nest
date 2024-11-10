import React, { useContext } from 'react'
import styled from 'styled-components'
import ToggleAdmin from './ToggleAdmin'
import Profile from './Profile'
import { UserContext } from '../App'


const RightSideStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 100px;
`





function RightSide ({ isAdmin, setIsAdmin }) {
  const {user, setUser} = useContext(UserContext);
    
    return (
        <RightSideStyled>
            {user.is_admin ? <ToggleAdmin  isAdmin = { isAdmin } setIsAdmin = { setIsAdmin }/> : ""}
            <Profile user={user} setUser={setUser}/>
        </RightSideStyled>
    )
}

export default RightSide