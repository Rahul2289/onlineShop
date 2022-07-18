import React, { useState, useEffect } from "react";
import { RegisterAndLoginContainer } from "./../styles/RegisterAndLoginStyles";
import { registerUser } from "./../features/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let auth = useSelector((state) => state.auth);
  const history = useNavigate();
  useEffect(() => {
    if (auth._id) {
      history("/cart");
    }
  }, [history, auth._id]);

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    dispatch(registerUser(user));
  };
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <RegisterAndLoginContainer>
      <form onSubmit={handleSubmit} className="wrapper">
        <h4>Register</h4>
        <input
          type="text"
          onChange={handleChange}
          placeholder="name"
          name="name"
        />
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
        <button type="submit">Signup</button>
        <p>{auth.registerStatus === "rejected" ? auth.registerError : null}</p>
      </form>
    </RegisterAndLoginContainer>
  );
};

export default Register;
