import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme/index.js'

const TabContentStyled = styled.div`
  background-color: ${theme.colors.background_white};
  /* padding: 16px; */
  z-index: 100000;
  position: sticky;
  box-shadow: 
  /* inset 0px -2px 3px 0px #1D13A3,  */
  0px -5px 5px 0px ${theme.colors.greyLight};
  margin-top: -1px;

  height: ${props => 
    props.isShown ? 
      '200px' : '0px'
  };
  overflow: hidden;





`



function TabContent({ content, isShown }) {
  return (
    <TabContentStyled isShown = { isShown }>
        <p>TabContent : {content.action}</p>
    </TabContentStyled>
  )
}

export default TabContent