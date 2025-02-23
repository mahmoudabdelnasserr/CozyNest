import React, { useContext, useEffect } from 'react'
import {WishlistContext} from '../stores/WishlistContext'

export default function Wishlist() {
  const {getWishlistProducts, wishlistProducts, removeItemToWishlist} = useContext(WishlistContext);

  useEffect(() => {
    getWishlistProducts()
  }, [wishlistProducts])
  return <>
  
  <section className='px-8'>
  <h2>My Wishlist</h2>
    <div className='flex flex-col md:flex-row flex-wrap gap-y-4 py-8'>

  {wishlistProducts?.map((product) => (
    <div key={product.id} className='relative product w-full md:w-1/6 p-4'>
      
<div onClick={() => removeItemToWishlist(product.id)} className='absolute top-2 right-2 cursor-pointer'><i className="fa-solid fa-heart text-black"></i></div>
      <img src={product.imageCover}/>
      <h3>{product?.title?.split(' ').slice(0, 2).join(' ')}</h3>
      <div className='flex justify-between'>
        <p>{product.price}</p>
        <span>
        <i className="fas fa-star rating-color"></i>
          {product.ratingsAverage}
        </span>
      </div>
      <button onClick={() => addItemToCart(product.id)} className="btn w-full">Add To Cart</button>
    </div>
  ))}
    </div>
 



  </section>
 
  
  </>
}
