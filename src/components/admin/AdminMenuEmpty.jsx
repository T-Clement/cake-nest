import React from 'react'

function AdminMenuEmpty({defaultMenu, setMenu}) {

    const handleClick = () => {
        setMenu(defaultMenu);
    }

  return (
    <div>
        <p>Le menu est vide.</p>
        <button onClick={handleClick}>Remplir la carte</button>
    </div>
  )
}

export default AdminMenuEmpty