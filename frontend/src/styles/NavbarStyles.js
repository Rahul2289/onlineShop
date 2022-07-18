import Styled from "styled-components";
export const NavBar = Styled.nav`
position:fixed;
    width:100vw;
    height:4rem;
    background-color: rgb(15, 15, 15);
    color:white;
    display:flex;
    align-items:center;
    padding:1.5rem;
    z-index:99;
a{
    text-decoration:none;
    color:white;
}    
h5{
    font-size:1.3rem;
    font-weight:500;
    cursor:pointer;
    font-family:cursive
}
.cart-logo{
    position:relative;
    font-size:1.4rem;
    cursor:pointer;
    display:flex;
    align-items:center;
    z-index:2;
    margin-left:auto;
    margin-right:1rem;
}
.cart-quantity{
    position:absolute;
    font-size:0.7rem;
    height:20px;
    width:20px;
    background:green;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    z-index:-1;
    right:-0.7rem;
    top:-0.6rem;

}
span{
    font-weight:700;
}
button{
    margin-left:1rem;
    background:black;
    outline:none;
    border:none;
    color:white;
    border:1px solid white;
    padding:0.5rem;
    padding:0.5rem;
    border-radius:5px;
    cursor:pointer;
}


`;
