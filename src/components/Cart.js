import React from "react";
import CartItem from "./CartItem";
import CartTotals from "./CartTotals";
import { useSelector, useDispatch } from "react-redux";
import { setQuantity, removeItem } from "../store/actions/cartActions";

const Cart = () => {

  const {totalProducts, totalCost, items} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="cart-contents">
        {items && 
          items.map(item => <CartItem key={item.id} {...item} onQuantityChange={(qty) => 
              qty > 0 ? dispatch(setQuantity(item.code, qty)) : dispatch(removeItem(item.code))
            }
            onItemRemove={() => dispatch(removeItem(item.code))}
          />)
        }
      </div>
      <CartTotals totalProducts={totalProducts} totalCost={totalCost} />
    </div>
  );
};

export default Cart;
