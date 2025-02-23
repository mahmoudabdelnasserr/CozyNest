import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function Brands() {
  const [data, setData] = useState([]);

 async function getBrands(){
  let {data} = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  setData(data.data);
  console.log(data.data);
  
 }

 useEffect(() => {
  getBrands();
 }, [])
  
  return <>
  <div className='flex flex-wrap justify-center'>

    {data.map((brand) => (
      <div key={brand._id} className='flex justify-center w-full md:w-1/6 shadow-md m-4 p-4 text-center rounded-lg'>
       <img src={brand.image}/>
       
       </div>
     
    ))}
  </div>

   
  
  </>
}
