import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalCartQuantity: null,
  totalCartPrice: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add to Cart
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    //remove from cart
    removeFromCart(state, action) {
      const updatedCart = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      state.cartItems = updatedCart;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //decrement

    decrement(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const updatedCart = state.cartItems.filter(
          (item) => item._id !== action.payload._id
        );
        state.cartItems = updatedCart;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    //clear cart

    clearCart(state, action) {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    //sub total

    cartTotal(state, action) {
      const { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalCartQuantity = quantity;
      state.totalCartPrice = total;
    },
  },
});
export const { addToCart, removeFromCart, decrement, clearCart, cartTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
