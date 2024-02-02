import React, { useContext, useState } from 'react'
import {editedItemContext} from "../../views/OrderPage"
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";


const ContentDivStyled = styled.div`
  .message {
    font-family: "Pacifico";
  }

  input:disabled {
    /* border: 1px solid red; */
    background-color: ${theme.colors.greyDark};
  }
`;




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




function UpdateForm() {

    const {editedItem, setEditedItem} = useContext(editedItemContext);
    // console.log(editedItem);

    const [formValues, setFormValues] = useState({
        id: "",
        name: "",
        imageSource: "", // to fix the input not updating
        price: ""
    });


    const handleChange = () => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    }

  return (
    <ContentDivStyled className='content'>
        {/* <p style={{color: "black"}}>✎</p> */}
        <img className='img-preview' src={formValues.imageSource} alt="Aucune image" />
        <form>
        <FormFieldStyled>
            <input 
                type='text' name="name" placeholder='Nom du produit' 
                value={formValues.name} onChange={handleChange}
                disabled = {editedItem != null ? "true" : "false"} 
            />
            <GiCupcake className='icon'/>
        </FormFieldStyled>
        <FormFieldStyled>
            <input 
                type="text" name="imageSource" 
                placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)" 
                value={formValues.imageSource} onChange={handleChange}
                disabled = {editedItem != null ? "true" : "false"}   
            />
            <BsFillCameraFill className='icon'/>
        </FormFieldStyled>
        <FormFieldStyled>
            <input 
                type="number" name="price" placeholder="Prix" step="0.01" 
                value={formValues.price} onChange={handleChange}
                disabled = {editedItem != null ? "true" : "false"} 
            />
            <MdOutlineEuro className='icon'/>
        </FormFieldStyled>
            <p className='message'>Veuillez séléctionner une carte pour la modifier</p>
        </form>
    </ContentDivStyled>
  )
}

export default UpdateForm