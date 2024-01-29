import { useState } from 'react';
import Login from './components/Login';

function App() {
  const [username, setUsername] = useState(null);

  return (
    <>
      <Login onSubmit = { setUsername } />
      {username ? alert("Bonjour " + username) : ""}
    </>
  )
}

export default App
