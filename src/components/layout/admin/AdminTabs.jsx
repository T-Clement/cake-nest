import React from 'react'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

function AdminTabs({isShown, setIsShown, setTabSelected}) {
    const handleClick = (e) => {
        // handle case if click on svg
        if(e.target.tagName == "svg") {
            // console.log(e.target.parentElement.id);
            if(e.target.parentElement.id === "show") setIsShown(!isShown);
        } else {
            console.log(e.target, e.target.id);
            if(e.target.id !== "show") {
                setTabSelected({action: e.target.id});
            }
            
            if(e.target.id === "show") setIsShown(!isShown);
        }
        
        console.log(isShown);
    }

  return (
    <div>
        <button id="show" onClick={handleClick}>{isShown ? <FiChevronDown/> : <FiChevronUp/>}</button>
        <button id="add" onClick={handleClick}><AiOutlinePlus/> Ajouter un produit</button>
        <button id="edit" onClick={handleClick}><MdModeEditOutline/> Modifier un produit</button>
    </div>
  )
}

export default AdminTabs