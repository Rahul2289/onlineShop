import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
const initialState = {
  token: localStorage.getItem("token"),
  name: "",
  email: "",
  _id: "",
  registerStatus: "",
  loginStatus: "",
  registerError: "",
  loginError: "",
  userLoaded: false,
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`http://localhost:5000/api/register`, {
        name: user.name,
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", token.data.token);
      console.log(token.data.token);
      return token.data.token;
    } catch (error) {
      console.log(error.response.data.msg);
      return rejectWithValue(error.response.data.msg);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`http://localhost:5000/api/login`, {
        email: user.email,
        password: user.password,
      });

      localStorage.setItem("token", token.data.token);
      console.log(token.data.token);
      return token.data.token;
    } catch (error) {
      console.log(error.response.data.msg);
      return rejectWithValue(error.response.data.msg);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser(state, action) {
      const token = state.token;

      if (token) {
        const user = jwtDecode(token);
        return {
          ...state,
          token,
          name: user.name,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },

    logoutUser(state, action) {
      localStorage.removeItem("token");
      return {
        ...state,
        token: "",
        name: "",
        email: "",
        _id: "",
        registerStatus: "",
        registerError: "",
        loginError: "",
        loginStatus: "",
        userLoaded: false,
      };
    },
  },
  extraReducers: {
    [registerUser.pending]: (state, action) => {
      state.registerStatus = "pending";
    },
    [registerUser.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        state.token = action.payload;
        state.name = user.name;
        state.email = user.email;
        state._id = user._id;
        state.registerStatus = "success";
      }
    },
    [registerUser.rejected]: (state, action) => {
      state.registerStatus = "rejected";
      state.registerError = action.payload;
    },

    [loginUser.pending]: (state, action) => {
      state.loginStatus = "pending";
    },
    [loginUser.fulfilled]: (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);

        state.token = action.payload;
        state.name = user.name;
        state.email = user.email;
        state._id = user._id;
        state.loginStatus = "success";
      }
    },
    [loginUser.rejected]: (state, action) => {
      state.loginStatus = "rejected";
      state.loginError = action.payload;
    },
  },
});
export const { loadUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
