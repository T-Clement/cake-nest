import React, { useContext, useEffect, useState } from 'react'
import { Outlet, redirect, useLoaderData, useNavigate } from 'react-router-dom'
import { UserContext } from './App'
import Navbar from './components/Navbar';
import styled from 'styled-components';
import { theme } from './utils/theme';



const RootStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    display: flex;
    width: 1400px;
    flex-direction: column;
    margin: 1em;
  }

  
`;




function Root() {



    const { user } = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(true);

    // const user = useLoaderData();

    const navigate = useNavigate();


    
    // console.log("Root rendering");
    // console.log(user);
    useEffect(() => {
        if (!user) {
        //   console.log("User not found, redirecting to login");
          navigate("/login?msg=not-connected");
        }
      }, [user, navigate]); // only run this effect when user or navigate changes



  return (
    <RootStyled>
        <div className='container'>

            { user && <Navbar isAdmin={ isAdmin } setIsAdmin={ setIsAdmin } user = {user}/>}
            <Outlet context={[isAdmin]} />
        </div>
    </RootStyled>
    
  )



}

export default Root