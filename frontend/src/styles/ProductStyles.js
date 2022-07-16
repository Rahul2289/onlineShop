import Styled from "styled-components";

export const ProductWrapper = Styled.div`
display:flex;
flex-direction:column;
align-items:center;
border-radius:5px;
gap:0.5rem;
width:250px;
box-shadow: 0px 0px 5px white, 5px 10px 15px black;
/* transform: scale(1);
transition:ease 1s linear;
&:hover{
    cursor:pointer;
    transform: scale(1.01);
} */
h3{
text-align:center;
font-size:1.3rem;
font-weight:700;
}
img{
width:150px;
height:250px;
transform: scale(1);
transition:ease 1s linear;
&:hover{
    cursor:pointer;
    transform: scale(1.1);
}
}
.info{
display:flex;
flex-direction:column;
align-items:flex-start;
gap:0.2rem;
}
p{
font-size:0.8rem;
font-weight:500;
}
h5{
font-size:1.1rem;
font-weight:500;
}
span{
font-size:1rem;
font-weight:700;
}
button{
margin-bottom:0.5rem;
width:90%;
height:2rem;
cursor:pointer;
background-color:green;
border:none;
border-radius:5px;
color:white;
font-weight:600;
}
button:hover{
    background-color:black;
    color:green;
    border:1px solid green;
}
@media (max-width:400px){
    width:120px;
    padding:0 0.5rem;
    align-items:flex-start;
    h3{
    font-size:1rem;
    font-weight:500;
    }
    img{
    width:100%;
    height:90px;
    }
    p{
     display:none;
    }
    h5{
    font-size:0.8rem;
    }
    span{
    font-size:0.8rem;
    }
    button{
    width:95%;
    height:1.5rem;
    border-radius:2px;
    font-weight:500;
    font-size:0.8rem;
}
}
`;
