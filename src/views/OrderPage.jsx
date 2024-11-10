import React, { useContext, useState } from 'react'
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import { theme } from '../utils/theme/index'
import Main from '../components/Main'
import EditedItemContext from '../context/EditedItemContext'
import { useLoaderData, useOutletContext } from 'react-router-dom'




// loader + fetch pour récupérer le isAdmin




function OrderPage({}) {
  // voir Outlet

  const cupcakes = useLoaderData();
  // console.warn(cupcakes);

  const [isAdmin] =  useOutletContext(); 

  // console.log("log du isAdmin");
  // console.log(isAdmin);
  
  const [editedItem, setEditedItem] = useState(
    { id: "",
      title: "",
      imageSource: "", // to fix the input not updating
      price: "",
    }
  ); // store edited user
  
  const EditedItemContextValue = { editedItem, setEditedItem };
  // qd click sur carte, editedItem devient l'item séléctionné
  // qd tu changes, met à jour, 
  // qd tu cliques sur le bouton et que user pas séléctionné, bloquer les champs en disabled,
    // puis quand séléctionné, activer les champs
  // mettre à jour directement dans l'objet menu l'objet séléctionné


  return (
    <EditedItemContext.Provider value = {EditedItemContextValue}>
      <Main isAdmin = {isAdmin} cupcakes = {cupcakes}/>
    </EditedItemContext.Provider>
  )
}

export default OrderPage