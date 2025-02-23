
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from "react-slick";
import Loading from './Loading';
import { CartContext } from '../stores/CartContext';

export default function ProductDetail() {
  const {addItemToCart} = useContext(CartContext);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      };
    const[product, setProduct] = useState(null);
    const[isLoading, setIsLoading] = useState(true);
    let {id} = useParams();
    console.log(id)
    async function getProductById(productId) {
        const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${productId}`);
        console.log(data);
        setProduct(data.data);
        setIsLoading(false);

    }
    useEffect(()=> {
        getProductById(id);
    }, [])
  return <>
  
  {isLoading ? <Loading /> : 
  <div className='flex p-6 items-center'>
    <div className='w-1/4'>
    <Slider {...settings}>
      {product.images.map((image, index) => <img key={index} src={image} className='w-full' alt={product.title}/>)}
    </Slider>
    </div>
    <div className='w-3/4 p-6'>
    <h2>{product.title}</h2>
    <p className='mt-2 text-gray-400'>{product.description}</p>
    <p className='mt-2 text-gray-400'>{product.category.name}</p>
    <div className='flex justify-between'> 
             <span>{product.price}</span>
             <span> <i className='fas fa-star rating-color' ></i>{product.ratingsAverage}</span>
            </div>
    <button className='btn w-full' onClick={() => addItemToCart(product.id)}>Add To Cart</button>
    </div>
    
  </div>
  }

  </>

}



