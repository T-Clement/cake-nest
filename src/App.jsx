import { useState } from 'react';
import Login from './components/layout/Login';
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider, Routes, Route, Link, BrowserRouter
} from "react-router-dom";
import OrderPage from './components/layout/OrderPage';
import Error404 from './components/layout/Error404';


function App() {
  const [username, setUsername] = useState(null);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login onSubmit = { setUsername } />} />
        <Route path = "/orderpage/:username" element={<OrderPage />} />
        <Route path = "/*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
    // <>

    //   {/* <Login /> */}
    //   {/* {username ? alert("Bonjour " + username) : ""} */}
    // </>
  )
}

export default App
