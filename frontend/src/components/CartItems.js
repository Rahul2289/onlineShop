import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, decrement, addToCart } from "../features/cartSlice";

const CartItems = ({ products }) => {
  const dispatch = useDispatch();
  const { name, image, price, description, cartQuantity } = products;
  return (
    <div className="cart-wrapper">
      <div className="product-info">
        <img src={image} alt={name} width={50} />
        <div className="product-desc">
          <h4>{name}</h4>
          <p className="desc">{description}</p>
          <button onClick={() => dispatch(removeFromCart(products))}>
            Remove
          </button>
        </div>
      </div>
      <p className="price">${price}</p>
      <div className="btn-container">
        <button
          type="button"
          className="inc-btn"
          onClick={() => dispatch(addToCart(products))}
        >
          +
        </button>
        <span>{cartQuantity}</span>
        <button
          type="button"
          className="dec-btn"
          onClick={() => dispatch(decrement(products))}
        >
          -
        </button>
      </div>
      <h4 className="price">${price * cartQuantity}</h4>
    </div>
  );
};

export default CartItems;
