import { useState, createContext, useEffect } from 'react';
import LoginPage from './views/LoginPage';
import {
  createBrowserRouter,
  RouterProvider, Routes, Route, Link, BrowserRouter,
  redirect,
  useNavigate
} from "react-router-dom";
import OrderPage from './views/OrderPage';
import Error404 from './views/Error404';
import { ToastContainer } from 'react-toastify';
import apiAxios from '../libs/axios';
import Root from './Root';
import ErrorPage from './views/ErrorPage';
import { fetchUser } from '../services/auth';
import RequireAuth from './RequireAuth';
import { useUser } from './hooks/useUser';

export const UserContext = createContext(null);
// update

function App() {


  const { user, setUser } = useUser();
  // const navigate = useNavigate();



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      loader: () => {
        // console.log("dans le loader de root ", user);
        return user;
      },
      children: [
        {
          path: "orderpage",
          element: 
          <RequireAuth>
            <OrderPage />
          </RequireAuth>,
          loader: async () => {
            const cupcakes = await apiAxios.get("/api/cupcake");
            // console.warn(cupcakes.data.data);
            return cupcakes.data.data;
          }
        },
        
        {
          path: "*",
          element: <Error404 />
        }, 
      ]
    }
    ,
    {
      path: "/login",
      element: <LoginPage />,
      errorElement: <ErrorPage />,
      action: async ({request, params}) => {
        try {
          // console.log(request.method);
          let formData = await request.formData();
          const email = formData.get("email");
          const password = formData.get("password");
          // console.log(formData);
          let apiPostLogin = await apiAxios.post("/login", {email, password});
          // console.log(apiPostLogin);
          
          if(apiPostLogin) {
            // console.log("dans le if apiPostLogin")
            const apiGetUserConnected = await apiAxios.get("/api/user");
            
            // return apiGetUserConnected.data;
            // update state
            setUser(apiGetUserConnected.data);
            

            localStorage.setItem("user", JSON.stringify(apiGetUserConnected.data));

            // console.log("après le setUSer dans le action login", user);
  
            return redirect("/orderpage");
            // return null;
          }

        } catch (error){
          console.error("Erreur de la connexion avec le serveur / API : ", error);
          return null;  
        }
      }
    },
  ])






  // protected routes with Auth


  return (
    <UserContext.Provider value = {{ user, setUser }}>
          
        <RouterProvider router={router} fallbackElement={<p>Initial Load...</p>} />
        <ToastContainer />

    </UserContext.Provider>
  )
}

export default App
