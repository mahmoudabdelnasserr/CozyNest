import React from 'react'
import { useContext } from 'react'
import { UsersContext } from '../stores/UsersContext'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({children}) {
    const {token} = useContext(UsersContext);
  
  if(localStorage.getItem('token')){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
  
}
