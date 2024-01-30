import { useState } from 'react';
// import Login from './components/layout/Login';
import LoginPage from './components/layout/LoginPage';
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
        <Route path='/' element={<LoginPage onSubmit = { setUsername } />} />
        <Route path = "/orderpage/:username" element={<OrderPage resetUsername = { setUsername }/>} />
        <Route path = "/*" element={<Error404 />}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
