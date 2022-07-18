import Styled from "styled-components";

export const RegisterAndLoginContainer = Styled.div`
    min-width:100vw;
    padding:4rem 2rem;;
    background:black;
    color:white;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    h4{
    font-size:1.5rem;
    font-weight:500;
    }
    .wrapper{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:1rem;
    width:300px;
    min-width:300px;
    background-color: rgb(15, 15, 15);
    border-radius:5px;
    justify-content:center;
    padding:1rem;
    }
    input{
    width:100%;
    height:2rem;
    outline:none;
    border-radius:5px;
    padding:0 1rem;
    }
    button{
    width:50%;
    height:2rem;
    border-radius:5px;
    cursor:pointer;
    border:1px solid white;
    font-size:1rem;
    font-weight:540;
    &:hover{
      background: rgb(15, 15, 15);
      color:white;
    }
    }
    p{
    color:red;
    font-size:0.7rem;
    }
`;
