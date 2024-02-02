import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { theme } from '../../utils/theme';
import { GiCupcake } from "react-icons/gi";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import EditedItemContext from '../../context/EditedItemContext';


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

    const {editedItem, setEditedItem} = useContext(EditedItemContext);
    // console.log(editedItem);
    // console.log(editedItem);
    const [formValues, setFormValues] = useState(editedItem);

    // console.log(formValues);

    useEffect(() => {
        setFormValues(editedItem);
      }, [editedItem]);

    const handleChange = () => {
        const {name, value} = e.target;
        setFormValues({...editedItem, [name]: value});
        setEditedItem(formValues);
    }

  return (
    <ContentDivStyled className='content'>
        {/* <p style={{color: "black"}}>✎</p> */}
        <img className='img-preview' src={formValues.imageSource} alt="Aucune image" />
        <form>
        <FormFieldStyled>
            <input 
                type='text' name="title" placeholder='Nom du produit' 
                value={formValues.title} onChange={handleChange}
                disabled = {editedItem.id === "" ? true : false} 
            />
            <GiCupcake className='icon'/>
        </FormFieldStyled>
        <FormFieldStyled>
            <input 
                type="text" name="imageSource" 
                placeholder="Lien URL d'une image (ex:https://la-photo-de-mon-produit.png)" 
                value={formValues.imageSource} onChange={handleChange}
                disabled = {editedItem.id === "" ? true : false}   
            />
            <BsFillCameraFill className='icon'/>
        </FormFieldStyled>
        <FormFieldStyled>
            <input 
                type="number" name="price" placeholder="Prix" step="0.01" 
                value={formValues.price} onChange={handleChange}
                disabled = {editedItem.id === "" ? true : false} 
            />
            <MdOutlineEuro className='icon'/>
        </FormFieldStyled>
            <p className='message'>Veuillez séléctionner un produit pour le modifier</p>
        </form>
    </ContentDivStyled>
  )
}

export default UpdateForm