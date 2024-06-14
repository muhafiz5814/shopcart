import React from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useSelector } from "react-redux";

const Cart = () => {

  const {totalProducts, totalCost, items} = useSelector(state => state.cart)

  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">
        {items && 
          items.map(item => <CartItem key={item.id} {...item} />)
        }
      </div>
      <CartTotals totalProducts={totalProducts} totalCost={totalCost} />
    </div>
  );
};

export default Cart;
