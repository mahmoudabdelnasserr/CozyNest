import axios from "axios";
import { createContext, useEffect, useState } from "react";

import { toast } from "react-hot-toast";

export const CartContext = createContext();
const headers = {
  token: localStorage.getItem("token"),
};

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(null);
  

  async function addItemToCart(productId) {
    try {
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId },
        {
          headers,
        }
      );

      setCart(data);
      getCartProducts();
      toast.success("Item added to the cart", {
        position: "bottom-right",
        duration: 4000,
      });
    } catch (err) {
      toast.error("Failed adding item to cart", {
        position: "bottom-right",
        duration: 4000,
      });
    }
  }

 

  async function updateItemQuantity(productId, count) {
    const { data } = await axios.put(
      `https://ecommerce.routemisr.com/api/v1/cart/${productId}`,
      {
        count,
      },
      {
        headers,
      }
    );
    setCart(data);
    
   
    toast.success("Quantity increased by 1", {
        position: "bottom-right",
        duration: 1000,
      });
    
  }

  async function getCartProducts() {
    const { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/cart",
      {
        headers,
      }
    );
   
    setCart(data);
    
    
  }

  useEffect(() => {
    getCartProducts();
    
    
  }, []);

  async function removeItemFromCart(productId) {
    const {data} = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`,{
        headers
    });
    setCart(data);
    toast.success("Item removed from cart", {
        position: "bottom-right",
        duration: 1000,
      }); 
    
  }

  return (
    <CartContext.Provider value={{ addItemToCart, cart, updateItemQuantity, removeItemFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}
