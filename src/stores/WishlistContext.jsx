import axios from "axios";
import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export default function WishlistContextProvider({ children }) {
 

  const [wishlistProducts, setWishlistProducts] = useState([]);

  async function getWishlistProducts() {
    const headers = {token: localStorage.getItem('token')};
    let { data } = await axios.get(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        headers,
      }
    );
    setWishlistProducts(data.data);
    
  
  }

  async function addItemToWishlist(prodId) {
    const headers = {token: localStorage.getItem('token')};
    let { data } = await axios.post(
      `https://ecommerce.routemisr.com/api/v1/wishlist`,
      {
        productId:prodId,
      },
      { headers }
    );
  
    
    toast.success(data.status, {
        position: "bottom-right",
        duration: 4000,
      })
    console.log(data.status);
  }

  async function removeItemToWishlist(prodId) {
    const headers = {token: localStorage.getItem('token')};
    let { data } = await axios.delete(
      `https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}`,
  
      { headers }
    );
    
    toast.success(data.status, {
        position: "bottom-right",
        duration: 4000,
      });
    
  }
  return (
    <>
      <WishlistContext.Provider
        value={{ getWishlistProducts, wishlistProducts, addItemToWishlist,removeItemToWishlist }}
      >
        {children}
      </WishlistContext.Provider>
    </>
  );
}
