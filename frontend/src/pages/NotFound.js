import React from "react";
import notfound from "./../assects/undraw_Page_not_found_re_e9o6.png";
import Styled from "styled-components";

const NotFound = () => {
  return (
    <NotfoundWrapper>
      <img src={notfound} alt="404error" />
    </NotfoundWrapper>
  );
};

export default NotFound;

const NotfoundWrapper = Styled.div`
    width:80vw;
    height:80vh;
    margin:auto;
img{
    width:100%;
    height:100%;
}
`;
