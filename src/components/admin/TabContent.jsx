import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../utils/theme/index'
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import FormAlert from './FormAlert';
import UpdateForm from './UpdateForm';
// import 


const TabContentStyled = styled(({ isShown, ...rest }) => <div {...rest} />).attrs(props => ({
  isShown: props.isShown,
}))`
  background-color: ${theme.colors.background_white};
  /* padding: 16px; */
  z-index: 100000;
  position: relative;
  box-shadow: 
  /* inset 0px -2px 3px 0px #1D13A3,  */
  0px -2px 0px 0px ${theme.colors.greyLight};
  margin-top: -1px;
  border-radius: 0 0 ${theme.borderRadius.round};


  // conditionnal rendering with styled compenents via the props passed to the style container component
  height: ${props => 
    props.isShown ? 
      '25vh' : '0vh'
  };
  overflow: hidden; // to hide the content who is overflowing
  transition: height 500ms ease-in-out;



  .content {
    display: flex;
    padding: 30px 0px 0px 52px; //top  right bottom left
    gap: 46px;
    /* margin-bottom */
    /* border: 1px solid red; */
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .img-preview {
    border: 1px solid ${theme.colors.greySemiDark};
    border-radius: ${theme.borderRadius.round};
    padding: 32px 50px;
    color:${theme.colors.greyMedium};
    height: 100px;
    /* width: auto; */
  }

  .btn-submit {
    border: 1px solid ${theme.colors.success};
    border-radius: ${theme.borderRadius.round};
    /* background-color: transparent; */
    /* color: ${theme.colors.success}; */
    background-color: ${theme.colors.success};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.subtle};
    font-weight: ${theme.fonts.weights.bold};
    padding: 10px;
    
  }
`



 // ------------------------------------------------------------------
 // ------------------------------------------------------------------
 // ------------------------------------------------------------------

const FormFieldStyled = styled.div`
  position: relative;


  


  input {
    padding : 8px;
    padding-left: 60px;
    background-color: ${theme.colors.greyLight};
    border: 0;
    border-radius: ${theme.borderRadius.round};
    width: max(180px, 250%);
    /* overflow: ellipse; */
  }


  .icon {
    position: absolute;
    top: 6px;
    color: ${theme.colors.greyDark};
    left: 30px;
  }


  .fade-out {
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  

`;


const ButtonContainerStyled = styled.div`
  display: flex;
  gap: 40px;
`;



function TabContent({ content, isShown , AddItemToMenu }) {

  // to handle multiple form field in one state
  const [formValues, setFormValues] = useState({
    id: Date.now(),
    name: "",
    imageSource: "", // to fix the input not updating
    price: ""
  });
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => { // to remove after 2 seconds the notification
    let timeout;

    if (showAlert) {
      timeout = setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [showAlert]);



  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };


  const handleSubmit = (e) => {
    e.preventDefault(); 
    AddItemToMenu(formValues);  
    // reset all values
    setFormValues({
      id: Date.now(),
      name: "",
      imageSource: "",
      price: ""
    }) ;
    setShowAlert(true);
  }

  // console.log(content.action);
  return (
    <TabContentStyled isShown = { isShown }>
        {(content.action == "add") // ADD
        ?
        <div className='content'>
          <img className='img-preview' src={formValues.imageSource} alt="Aucune image" />
          <form onSubmit={handleSubmit}>
            <FormFieldStyled>
              <input type='text' name="name" placeholder='Nom du produit' value={formValues.name} onChange={handleChange}/>
              <GiCupcake className='icon'/>
            </FormFieldStyled>
            <FormFieldStyled>
              <input type="text" name="imageSource" placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)" value={formValues.imageSource} onChange={handleChange}/>
              <BsFillCameraFill className='icon'/>
            </FormFieldStyled>
            <FormFieldStyled>
              <input type="number" name="price" placeholder="Prix" step="0.01" value={formValues.price} onChange={handleChange}/>
              <MdOutlineEuro className='icon'/>
            </FormFieldStyled>
            <ButtonContainerStyled>
              <button className='btn-submit' type='submit'>Ajouter un nouveau produit</button>
              {showAlert && <FormAlert className="fade-out" state = "true" /> }
            </ButtonContainerStyled>
          </form>
        </div>
         : // UPDATE
         <UpdateForm />
         
        }
        
    </TabContentStyled>
  )
}

export default TabContent