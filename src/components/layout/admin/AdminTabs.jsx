import React from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from 'styled-components';
import { theme } from '../../../theme';


const AdminTabsStyled = styled.div`
    margin-left: 46px;
    display: flex;
    

    .tab-selected {
        background-color: ${theme.colors.background_dark};
        color: ${theme.colors.white};
    }
`

const ButtonStyled = styled.button`
    /* ${({ $tabSelected }) =>
    $tabSelected ? `display: block `: `display: block`}; */


    padding: 0.6em 1.2em;
    background-color: ${theme.colors.background_white};
    border: none;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    border-radius: ${theme.borderRadius.round};
    display: flex;
    flex-direction: row;
    gap: 0.8em;
    align-items: center;
    color: ${theme.colors.greyDark};


`




function AdminTabs({isShown, setIsShown, setTabSelected, tabSelected}) {
    console.log(tabSelected);
    const handleClick = (e) => {
        // handle case if click on svg
        if(e.target.tagName == "svg") {
            // console.log(e.target.parentElement.id);
            if(e.target.parentElement.id === "show") {
                setIsShown(!isShown);
            } else {
                // setTabSelected({action: e.target.parentElement.id});
            }
        } else {
            console.log(e.target, e.target.id);
            if(e.target.id !== "show") {
                setTabSelected({action: e.target.id});
                setIsShown(true); // open panel bt default when click on btn
            }
            
            if(e.target.id === "show") setIsShown(!isShown);
        }
        
        // console.log(isShown);
    }

  return (
    <AdminTabsStyled>
     {/* pass in onClick event only the props edit,
      show or add and not a general handleClick props */}

        <ButtonStyled  id="show" onClick={handleClick}>{isShown ? <FiChevronDown/> : <FiChevronUp/>}</ButtonStyled>
        <ButtonStyled 
            className={ tabSelected.action == "add" ? "tab-selected" : "" } 
            id="add" onClick={handleClick}>
                <AiOutlinePlus/> Ajouter un produit
        </ButtonStyled>
        <ButtonStyled 
            className={ tabSelected.action == "edit" ? "tab-selected" : "" } 
            id="edit" onClick={handleClick}>
                <MdModeEditOutline/> Modifier un produit
        </ButtonStyled>
    
    </AdminTabsStyled>
  )
}

export default AdminTabs