import React from 'react'
import { Link } from 'react-router-dom'
// import {}

function Error404() {
  return (
    <div>
        <p>ERREUR 404 - Vous vous êtes perdu</p>
        <Link to="/" >Retour sur la page de connexion</Link>
    </div>
  )
}

export default Error404