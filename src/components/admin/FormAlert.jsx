import React from 'react'
import styled from 'styled-components'
import { FiCheck } from "react-icons/fi";
import { theme } from '../../utils/theme';

// const FormAlertStyled = styled(({ color, ...rest }) => <div {...rest} />).attrs(props => ({
//   color: props.color,
// }))`
//   color: ${props => 
//     props.color 
//   };

// .icon {
//   border: 1px solid ${props=> props.color};
//   padding: 2px;
//   border-radius: ${};
// }

// `;




function FormAlert({state}) {
  const FormAlertStyled = styled.div`
    color: ${state == "true" ? theme.colors.success : ""};
  `;
  return (
    <FormAlertStyled >
      {(state == "true") ? 
        <p><FiCheck className='icon'/> Ajouté avec succès !</p>
        :
        ""
      }

    </FormAlertStyled>
  )
}

export default FormAlert