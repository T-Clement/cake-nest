import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import { theme } from '../../theme'
import Main from './Main'


// import {  useNavigate } from 'react-router-dom';
// 100 vh 
// et

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
  }
`


function OrderPage() {

  

  // const handleClick = (e) => {
  //   console.log("C'est cliqué")
  //   resetUsername("");
  //   navigate("/");
  // }



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