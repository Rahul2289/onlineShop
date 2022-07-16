import React from "react";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { NavBar } from "../styles/NavbarStyles";
import { useSelector } from "react-redux";

const Navbar = () => {
  const totalCartQuantity = useSelector(
    (state) => state.cart.totalCartQuantity
  );
  return (
    <NavBar>
      <Link to="/">
        <h5>OnlineShop</h5>
      </Link>
      <Link to="/cart">
        <div className="cart-logo">
          <CgShoppingCart />
          <div className="cart-quantity">
            <span>{totalCartQuantity ? totalCartQuantity : 0}</span>
          </div>
        </div>
      </Link>
    </NavBar>
  );
};

export default Navbar;
