import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";

const Checkoutform = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="checkout-container">
      <button
        type="button"
        className="clear-btn"
        onClick={() => dispatch(props.clearCart())}
      >
        clear cart
      </button>
      <div className="checkout-wrapper">
        <div className="subtotal">
          <h3>Subtotal</h3>
          <h3>${props.cartTotalPrice}</h3>
        </div>
        <p>Taxes ans Shipping calculated at checkout</p>
        <button>Check out</button>
        <Link to="/">
          <div className="back-arrow-container">
            <BiArrowBack />
            <span>continue shopping</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Checkoutform;
