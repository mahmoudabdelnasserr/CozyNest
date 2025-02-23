import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import OrdersCard from './OrdersCard';
import NoOrders from './NoOrders';
import Loading from './Loading';

export default function AllOrders() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  let token = localStorage.getItem('token');
  const userId = jwtDecode(token);
  async function getOrders(){
    setIsLoading(true);
    const {data} = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId.id}`);
    setData(data);
    console.log(data);
    setIsLoading(false)
  }
  useEffect(() => {
    getOrders();
  
  }, [])


  return <>

  {isLoading ? <Loading /> : data.length == 0 ? <NoOrders /> : <OrdersCard items={data}/> }
  
  
  </>
}
