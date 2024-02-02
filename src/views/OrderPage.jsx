import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { theme } from '../utils/theme/index'
import Main from '../components/Main'



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

export const editedItemContext = createContext(null);

function OrderPage() {
// voir Outlet

  const [isAdmin, setIsAdmin] = useState(true);
  const [editedItem, setEditedItem] = useState(null); // store edited user

  // qd click sur carte, editedItem devient l'item séléctionné
  // qd tu changes, met à jour, 
  // qd tu cliques sur le bouton et que user pas séléctionné, bloquer les champs en disabled,
    // puis quand séléctionné, activer les champs
  // mettre à jour directement dans l'objet menu l'objet séléctionné

  

  return (
    <editedItemContext.Provider value = {{editedItem, setEditedItem}}>
      <OrderPageStyled>
        <div className='container'>
          <Navbar isAdmin={ isAdmin } setIsAdmin={ setIsAdmin }/>
          <Main isAdmin = {isAdmin} />
        </div>        
      </OrderPageStyled>
    </editedItemContext.Provider>
  )
}

export default OrderPage