import React, { useState } from 'react'

function Login( { onSubmit } ) {
    const  [username, setUsername] = useState("");

    

    const handleChange = (e) => {
        setUsername(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Le formulaire est soumis")
        onSubmit(username);
        setUsername("");
    }


  return (
    <div>
        <h1>Bienvenue chez nous !</h1>

        <section>
            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name='username' 
                    value={username} 
                    placeholder='Entrez votre prénom...' 
                    onChange={handleChange}
                    autoComplete = "off" 
                    required 
                />
                <button type='submit'>Accédez à votre espace</button>
            </form>

        </section>
    </div>
  )
}

export default Login