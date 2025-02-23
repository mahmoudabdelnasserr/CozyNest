import React from "react";

export default function OrderItem({ item }) {
  return (
    <>
      <div className="shadow-md p-4 my-6 bg-white rounded-lg flex items-center justify-between flex-wrap">
        <div className="flex items-center gap-4">
          {" "}
          <img
            src={item.product.imageCover}
            className="w-32 h-full"
          />
          <div>
            {" "}
            <h3 className="text-lg mb-2">{item.product.title}</h3>
            <p className="text-gray-500">{item.count} QTY</p>
          </div>
        </div>
        <div>
          <h2 className="text-primary text-xl">{item.price} EGP</h2>
        </div>
      </div>
    </>
  );
}
