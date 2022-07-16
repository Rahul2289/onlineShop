import React from "react";
import { ProductWrapper } from "./../styles/ProductStyles";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
const Product = ({ products }) => {
  const dispatch = useDispatch();
  const { name, image, description, price } = products;
  return (
    <ProductWrapper>
      <h3>{name}</h3>
      <img src={image} alt={name} />
      <div className="info">
        <p>{description}</p>
        <h5>
          price:<span>${price}</span>
        </h5>
      </div>
      <button type="button" onClick={() => dispatch(addToCart(products))}>
        Add to Cart
      </button>
    </ProductWrapper>
  );
};

export default Product;
