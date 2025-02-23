import React from 'react'
import { Link } from 'react-router-dom'
import emptycart from '../assets/empty-cart.svg'

export default function NoOrders() {
  return <>
  <div className='flex flex-col items-center justify-center h-screen gap-3'>
    <img className='w-[50px]' src= {emptycart}/>
  <h2>No Orders Yet</h2>
  <Link to={'/home'}><button className='p-3 w-full'>Discover Products</button></Link>
  </div>

  
  </>
}
