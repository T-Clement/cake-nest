import { useState, useEffect } from 'react';
import { fetchUser } from '../../services/auth';
import apiAxios from '../../libs/axios';
import { useNavigate } from 'react-router-dom';

export function useUser() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

//   const navigate = useNavigate();
    console.log(user);
  useEffect(() => {
    const checkUser = async () => {
        // call to /api/user to get info if user is connected
        const fetchedUser = await fetchUser();

        if (fetchedUser) {
            // si user connecté
            setUser(fetchedUser);
            // set user
            localStorage.setItem('user', JSON.stringify(fetchedUser));
        } else {
            await apiAxios.get('sanctum/csrf-cookie');
            setUser(null);
            // return navigate("/login");
        }
    };
    checkUser();
  }, []);

  return { user, setUser };
}
