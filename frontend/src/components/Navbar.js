import React from "react";
import { Link } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";
import { NavBar } from "../styles/NavbarStyles";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../features/authSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const totalCartQuantity = useSelector(
    (state) => state.cart.totalCartQuantity
  );
  const userId = useSelector((state) => state.auth._id);
  return (
    <NavBar>
      <Link to="/">
        <h5>OnlineShop</h5>
      </Link>

      <div className="cart-logo">
        <Link to="/cart">
          <CgShoppingCart />
          <div className="cart-quantity">
            <span>{totalCartQuantity ? totalCartQuantity : 0}</span>
          </div>
        </Link>
      </div>
      {!userId && (
        <>
          <button>
            <Link to="/login">Login</Link>
          </button>
          <button>
            <Link to="/register">register</Link>
          </button>
        </>
      )}
      {userId && (
        <button
          onClick={() => {
            dispatch(logoutUser(null));
          }}
        >
          Logout
        </button>
      )}
    </NavBar>
  );
};

export default Navbar;
