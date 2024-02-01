import React from 'react'
import styled from 'styled-components'
import { theme } from '../../../theme/index.js'



const TabContentStyled = styled(({ isShown, ...rest }) => <div {...rest} />).attrs(props => ({
  isShown: props.isShown,
}))`
  background-color: ${theme.colors.background_white};
  /* padding: 16px; */
  z-index: 100000;
  position: relative;
  box-shadow: 
  /* inset 0px -2px 3px 0px #1D13A3,  */
  0px -5px 5px 0px ${theme.colors.greyLight};
  margin-top: -1px;

  // conditionnal rendering with styled compenents via the props passed to the style container component
  height: ${props => 
    props.isShown ? 
      '200px' : '0px'
  };
  overflow: hidden; // to hide the content who is overflowing
  transition: height 500ms ease-in-out;
`



function TabContent({ content, isShown }) {
  return (
    <TabContentStyled isShown = { isShown }>
        <p>TabContent : {content.action}</p>
    </TabContentStyled>
  )
}

export default TabContent