import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <p>Your cart is empty</p>
      <Link to="/">
        <div className="back-arrow-container">
          <BiArrowBack />
          <span>start shopping</span>
        </div>
      </Link>
    </div>
  );
};

export default EmptyCart;
