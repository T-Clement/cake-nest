
import { useContext } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { UserContext } from './App';

function RequireAuth({ children }) {
  const { user } = useContext(UserContext);
  // const loaderData = useLoaderData();

  // if no user, redirect to /login
  // if (!user && !loaderData.user) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // authorize and render children component
  return children;
}

export default RequireAuth;
