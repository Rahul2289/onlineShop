import Styled from "styled-components";

export const CartContainer = Styled.div`
width:100vw;
text-align:center;
gap:1rem;
padding-top:4rem;
background-color: black;
color:white;
min-height:100vh;
h2{
font-size:2rem;
padding-top:1rem;
padding-bottom:1rem;
font-weight:600;
}
.empty-cart{
  display:flex;
flex-direction:column;
align-items:center;
}
.empty-cart p{
color:red;
font-size:1rem;
font-weight:600;
}
.back-arrow-container{
display:flex;
flex-direction:row;
align-items:center;
gap:0.5rem;
padding-top:0.5rem;
}
a{
text-decoration:none;
color:white;
}
.cartItem-container{
padding:0.5rem 1rem;
}
.titles,.cart-wrapper{
display:grid;
grid-template-columns:2fr 1fr 1fr 1fr;
place-items:center;
justify-content:center;
width:95vw;
margin:auto;
border-bottom:1px solid white;
padding:0.5rem 0;
}

.btn-container {
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
background:white;
gap:0.3rem;
}
.btn-container span{
color:black;
}
.btn-container button{
  cursor:pointer;
  width:22px;
  outline:none;
  border:none;
  height:22px;
}
.product-info{
display:flex;
justify-content:center;
gap:0.3rem;
}
.product-desc{
display:flex;
flex-direction:column;
align-items:flex-start;
gap:0.2rem;
}
.desc{
font-size:0.7rem;
font-weight:500;
}
.product-info button{
border:none;
outline:none;
background:transparent;
cursor:pointer;
color:red;
font-weight:600;
}
.checkout-container{
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
padding:0.5rem 2rem;

}

.checkout-wrapper{
display:flex;
flex-direction:column;
}
.checkout-wrapper .subtotal{
 display:flex;
flex-direction:row;
justify-content:space-between;

}
.checkout-wrapper p{
font-size:0.8rem;
font-weight:400;
margin:0.2rem 0;
}
.clear-btn{
width:6rem;
height:2rem;
cursor:pointer;
background-color:white;
border:1px solid black;
border-radius:5px;
color:black;
font-weight:600;
transition: ease 10ms;
}
.clear-btn:hover{
    background-color:black;
    color:red;
    border:1px solid red;
    transition: ease 10ms;
}
.checkout-wrapper button{
width:100%;
max-width:100%;
height:2rem;
cursor:pointer;
border:none;
border-radius:5px;
font-weight:600;
transition: ease 1s;
}
.checkout-wrapper .check-btn:hover{
    background-color:black;
    color:green;
    border:1px solid green;
    transition: ease 1s;
}
.checkout-wrapper .check-login-btn:hover{
    background-color:black;
    color:yellow;
    border:1px solid yellow;
    transition: ease 1s;
}
.check-btn{
  background-color:green;
color:white;
}
.check-login-btn{
background:yellow;
}

.inc-btn,.dec-btn{
cursor:pointer;
background-color:white;
border:0.5px solid black;
border-radius:1px;
color:black;
font-size:0.8rem;
font-weight:700;
}
.inc-btn:hover{
    background-color:black;
    color:green;
    border:2px solid green;
}
.dec-btn:hover{
    background-color:black;
    color:red;
    border:2px solid red;
}

@media (max-width:400px){
.titles h3{
    font-size:0.8rem;
    font-weight:500;
}
.product-desc h4{
  font-size:0.8rem;
}
.product-desc button{
  font-size:0.7rem;
}
.desc{
    font-size:0.6rem;
}
.price{
font-size:0.9rem;
}
.btn-container{
width:50px;
}
.clear-btn{
width:90px;
height:1.7rem;
}
.checkout-container{
padding:0.5rem 1rem;
gap:1.5rem;
align-items:flex-start;
}
.subtotal h3{
  font-size:1rem;
}
.checkout-wrapper p{
  font-size:0.6rem;
}

}

`;
