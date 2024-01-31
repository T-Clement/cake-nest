import React, { useState } from 'react'
import AdminTabs from './AdminTabs';
import TabContent from './TabContent';
import styled from 'styled-components';


const AdminPannelStyled = styled.div`
  outline: 1px solid red;
  position: sticky;
  /* top: auto; */
  bottom: 0;
  /* left: 0; */
  /* inset: auto; */
  /* width: 100%; */
`;





function AdminPannel() {
  console.log("Le panneau Admin est rendu");
  const [isShown, setIsShown] = useState(true);
  const [tabSelected, setTabSelected] = useState(
    {
      action: "add",
      content : {

      }
    }
  );





  return (
    <AdminPannelStyled>
        <AdminTabs isShown ={ isShown } setIsShown = { setIsShown } setTabSelected = { setTabSelected }/>
        {isShown && <TabContent content = { tabSelected } />}
    </AdminPannelStyled>
  )
}

export default AdminPannel