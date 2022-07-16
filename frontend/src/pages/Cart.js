import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItems from "./../components/CartItems";
import { CartContainer } from "./../styles/CartStyles";
import { clearCart, cartTotal } from "../features/cartSlice";
import EmptyCart from "./../components/EmptyCart";
import Checkoutform from "./../components/Checkoutform";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.cartItems);
  const cartTotalPrice = useSelector((state) => state.cart.totalCartPrice);

  useEffect(() => {
    dispatch(cartTotal());
  }, [cartProducts, dispatch]);

  return (
    <CartContainer>
      <h2>Shopping Cart</h2>
      {cartProducts.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <div className="titles">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quantity</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cartItem-container">
            {cartProducts?.map((product) => (
              <CartItems key={product._id} products={product} />
            ))}
          </div>

          {/* checkout  and total */}

          <Checkoutform cartTotalPrice={cartTotalPrice} clearCart={clearCart} />
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
