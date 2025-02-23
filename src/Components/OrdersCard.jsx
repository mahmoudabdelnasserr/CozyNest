import React from "react";
import OrderItem from "./OrderItem";

export default function OrdersCard({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          className="p-6 my-5  bg-white border border-gray-200 rounded-lg shadow-sm  w-full"
        >
          <p className="mb-2 p-3 rounded-full max-w-fit text-xs  tracking-tight text-gray-900 dark:text-white bg-light">
            Order Number:  <span className="font-bold">#{item.id.toString()}</span>
          </p>
          {item.cartItems.map((item) => (
            <OrderItem key={item.id} item={item}/>
          ))}
        </div>
      ))}
    </div>
  );
}
