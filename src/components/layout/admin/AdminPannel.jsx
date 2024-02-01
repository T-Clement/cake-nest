import React, { useState } from 'react'
import AdminTabs from './AdminTabs';
import TabContent from './TabContent';
import styled from 'styled-components';


const AdminPannelStyled = styled.div`
  
  position: sticky;
 
  bottom: 0;
 
`;





function AdminPannel({ adminState, setAdminState }) {
  console.log("Le panneau Admin est rendu");
  const [isShown, setIsShown] = useState(true);
  // const [tabSelected, setTabSelected] = useState(
  //   !tabSelected ?
  //   {
  //     action: "add",
  //     content : []
  //   } : {
  //     action: tabSelected.action,
  //     content : []
  //   }
  // );


  // if(adminState == null) {
  //   setAdminState();
  //   console.log("Dans la condition du adminState à null donc initialisé avec add");
  //   console.log(adminState);
  // }


  // const [tabSelected, setTabSelected] = useState(
    
  //   {
  //     action: "add",
  //     content : []
  //   } 
  // );





  return (
    <AdminPannelStyled>
        <AdminTabs 
        isShown ={ isShown } setIsShown = { setIsShown } 
        tabSelected = { adminState } setTabSelected = { setAdminState }
        />
        {/* update this with height of pannel to 0 or 200 to transition on height */}
        {/* {isShown && <TabContent content = { tabSelected }  />} */}
        <TabContent content = { adminState }  isShown = { isShown }/>
    </AdminPannelStyled>
  )
}

export default AdminPannel