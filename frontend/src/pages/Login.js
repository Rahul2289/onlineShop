import React, { useState, useEffect } from "react";
import { RegisterAndLoginContainer } from "./../styles/RegisterAndLoginStyles";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const auth = useSelector((state) => state.auth);
  const history = useNavigate();
  useEffect(() => {
    if (auth._id) {
      history("/cart");
    }
  }, [history, auth._id]);
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(loginUser(user));
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <RegisterAndLoginContainer>
      <form onSubmit={handleSubmit} className="wrapper">
        <h4>Login</h4>
        <input
          type="email"
          onChange={handleChange}
          placeholder="email"
          name="email"
        />
        <input
          type="password"
          onChange={handleChange}
          placeholder="password"
          name="password"
        />

        <button type="submit">Login</button>
        <p>{auth.loginStatus === "rejected" ? auth.loginError : null}</p>
      </form>
    </RegisterAndLoginContainer>
  );
};

export default Login;
