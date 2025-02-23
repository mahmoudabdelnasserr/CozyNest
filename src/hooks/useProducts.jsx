import React from 'react'
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {
  function getProducts(){
        return axios.get('https://ecommerce.routemisr.com/api/v1/products');
      }
  
      let response = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getProducts
      })
  
      return response;
}
