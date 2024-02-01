import { useState, createContext } from 'react';
// import Login from './components/layout/Login';
import LoginPage from './components/layout/LoginPage';
import {
  createBrowserRouter,
  RouterProvider, Routes, Route, Link, BrowserRouter
} from "react-router-dom";
import OrderPage from './components/layout/OrderPage';
import Error404 from './components/layout/Error404';
import { ToastContainer } from 'react-toastify';

export const UserContext = createContext(null);
// update

function App() {

  const [user, setUser] = useState(null);
 

  return (
    <UserContext.Provider value = {{ user, setUser }}> 
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path = "/orderpage" element={<OrderPage />} />
            <Route path = "/*" element={<Error404 />}/>
          </Routes>
        </BrowserRouter>
        <ToastContainer />

    </UserContext.Provider>
  )
}

export default App
