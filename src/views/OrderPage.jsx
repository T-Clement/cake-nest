import React, { useState } from 'react'
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


function OrderPage() {
// voir Outlet

  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar isAdmin={ isAdmin } setIsAdmin={ setIsAdmin }/>
        <Main isAdmin = {isAdmin} />
      </div>        
    </OrderPageStyled>
  )
}

export default OrderPage