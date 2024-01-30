import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';

function OrderPage({resetUsername}) {

  const {username} = useParams();
  const navigate = useNavigate ();

  const handleClick = (e) => {
    console.log("C'est cliqué")
    resetUsername("");
    navigate("/");
  }



  return (
    <div>
        <p>Bravo {username}, vous êtes connecté !!!</p>
        <button onClick={handleClick}>Se déconnecter</button>
        
    </div>
  )
}

export default OrderPage