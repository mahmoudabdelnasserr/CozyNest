import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { CartContext } from '../stores/CartContext';
import { useQuery } from '@tanstack/react-query';
import useProducts from '../hooks/useProducts';
import { WishlistContext } from '../stores/WishlistContext';


export default function RecentProducts() {
    const {addItemToCart} = useContext(CartContext);
    const {addItemToWishlist, wishlistProducts, removeItemToWishlist, getWishlistProducts} = useContext(WishlistContext);
    //  const[products, setProducts] = useState([]);
    //  const[isLoading, setIsLoading] = useState(true);
    //   useEffect(() => {
    //     getProducts();
    //   },[])
    //   async function getProducts(){
    //     let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
    //     setProducts(data.data);
    //     setIsLoading(false);
    //   }

    let {data, isLoading} = useProducts();
     useEffect(() => {
        getWishlistProducts()
      }, [wishlistProducts])
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className=" flex flex-col md:flex-row flex-wrap gap-y-4 py-8 justify-center ">
          {data.data.data.map((product) => (
            <div key={product.id} className="w-full md:w-1/6 p-4">
              <div className="product p-2 rounded-lg relative">
                {wishlistProducts?.find((wishlistedProduct) => wishlistedProduct.id === product.id) ? (

                  <div onClick={() => removeItemToWishlist(product.id)} className='absolute top-2 right-2 cursor-pointer'><i className="fa-solid fa-heart text-black"></i></div>
                ) :  <div onClick={() => addItemToWishlist(product.id)} className='absolute top-2 right-2 cursor-pointer'> <i className="fa-regular fa-heart "></i> </div>}
             
                <Link to={`/productdetails/${product.id}`}>
                  <img
                    src={product.imageCover}
                    className="w-full"
                    alt={product.title}
                  />
                  <p className="text-sm text-main">{product.category.name}</p>
                  <h3 className="text-xl">
                    {product.title.split(' ').slice(0, 2).join(' ')}
                  </h3>
                  <div className="flex justify-between">
                    <span>{product.price}</span>
                    <span>
                      <i className="fas fa-star rating-color"></i>
                      {product.ratingsAverage}
                    </span>
                  </div>
                </Link>
                <button onClick={() => addItemToCart(product.id)} className="btn w-full">Add To Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
