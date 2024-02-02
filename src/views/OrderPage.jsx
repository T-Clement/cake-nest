import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { theme } from '../utils/theme/index'
import Main from '../components/Main'
import EditedItemContext from '../context/EditedItemContext'






const OrderPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    display: flex;
    width: 1400px;
    flex-direction: column;
    margin: 1em;
  }

  
`


function OrderPage() {
  // voir Outlet
  
  const [isAdmin, setIsAdmin] = useState(true);
  const [editedItem, setEditedItem] = useState(
    { id: "",
      title: "",
      imageSource: "", // to fix the input not updating
      price: "",
    }
  ); // store edited user
  
  const EditedItemContextValue = { editedItem, setEditedItem };
  // qd click sur carte, editedItem devient l'item séléctionné
  // qd tu changes, met à jour, 
  // qd tu cliques sur le bouton et que user pas séléctionné, bloquer les champs en disabled,
    // puis quand séléctionné, activer les champs
  // mettre à jour directement dans l'objet menu l'objet séléctionné


  return (
    <EditedItemContext.Provider value = {EditedItemContextValue}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar isAdmin={ isAdmin } setIsAdmin={ setIsAdmin }/>
          <Main isAdmin = {isAdmin} />
        </div>        
      </OrderPageStyled>
    </EditedItemContext.Provider>
  )
}

export default OrderPage