import { getValue } from "@testing-library/user-event/dist/utils";
import { useState } from "react";

const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (key) {
    case "ADDITEM":
      //Check of Product is Already Existed
      const existingProduct = state.find((x) => x.id === product.id);
      if (existingProduct) {
        //Increase the quantity of the product
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
      break;
    case "DELITEM":
            const exist1=state.find((x)=>x.id===product.id);
            if(exist1===1){
                return state.filter((x)=>x.id !== exist1.id);
            }
            else{
                return useState.map((x)=>
                x.id === product.id ? {...x,qty:x.qty-1}:x);
            }
      break;

    default:
      break;
  }
};

export default handleCart;
