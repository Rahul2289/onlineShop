import React from "react";
import { useSelector } from "react-redux";
import Product from "./../components/Product";
import Styled from "styled-components";
const Home = () => {
  const products = useSelector((state) => state.products.items);
  const isloading = useSelector((state) => state.products.loading);
  return (
    <HomeContainer>
      <h2>New Arravials</h2>
      {isloading && <h3 className="loading">Loading...</h3>}
      <div className="container">
        {!isloading &&
          products?.map((product) => (
            <Product key={product._id} products={product} />
          ))}
      </div>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = Styled.div`
    max-width:100vw;
    padding:4rem 1rem;;
    background:black;
    color:white;
    min-height:100vh;
    h2{
      font-size:2rem;
      font-weight:600;
      font-family: cursive;
      text-align:center;
      margin-bottom:1rem;
    }
    .loading{
    text-align:center;
    margin-top:40%;
    }
    .container{
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items:center;
    justify-content:space-around;
    align-self: flex-start;
    gap:1.5rem;
    }
`;
