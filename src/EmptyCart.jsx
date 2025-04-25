import React from 'react'
import emptyCartImg from './assets/images/empty-cart.svg'
import { Link } from 'react-router-dom'

export default function EmptyCart() {
  return (
    <div className='flex flex-col justify-center w-full items-center gap-4' >
      <img className='w-[200px]' src={emptyCartImg}/>
      <p>Your cart is empty, Start adding some products</p>
      <button className='p-3'> <Link className='hover:text-white' to={'/'}>Discover Products</Link></button>
    </div>
  )
}
