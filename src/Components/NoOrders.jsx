import React from 'react'
import { Link } from 'react-router-dom'
import emptyCartImg from '../assets/images/empty-cart.svg'

export default function NoOrders() {
  return <>
  <div className='flex flex-col items-center justify-center gap-3'>
      <img className='w-[200px]' src={emptyCartImg}/>
      <p>You have not created any orders yet</p>
  <Link to={'/home'}><button className='p-3 w-full'>Discover Products</button></Link>
  </div>

  
  </>
}
