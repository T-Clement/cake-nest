import React, { useState } from 'react'
import AdminTabs from './AdminTabs';
import TabContent from './TabContent';
import styled from 'styled-components';


const AdminPannelStyled = styled.div`
  
  position: sticky;
  bottom: 0;
`;





function AdminPannel({ adminState, setAdminState, isShown, setIsShown, AddItemToMenu }) {
  // console.log("Le panneau Admin est rendu");

  return (
    <AdminPannelStyled>
        <AdminTabs 
        isShown ={ isShown } setIsShown = { setIsShown } 
        tabSelected = { adminState } setTabSelected = { setAdminState }
        />
        <TabContent content = { adminState }  isShown = { isShown } AddItemToMenu = { AddItemToMenu } />
    </AdminPannelStyled>
  )
}

export default AdminPannel