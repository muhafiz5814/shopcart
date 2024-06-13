import React from "react";

const CartButton = ({ items = 0, onClick }) => (
  <button className="btn" onClick={onClick}>
    CART
    {items > 0 ? <span className="bubble">{items}</span> : null}
  </button>
);

export default CartButton;
