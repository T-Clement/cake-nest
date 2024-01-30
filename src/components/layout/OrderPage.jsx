import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { theme } from '../../theme'
import Main from './Main'



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
  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar />
        <Main />
      </div>        
    </OrderPageStyled>
  )
}

export default OrderPage