import { createSlice } from "@reduxjs/toolkit";
import { USER_INFO_KEY } from "src/constants/common";

let userInfo = localStorage.getItem(USER_INFO_KEY);

if (userInfo) {
  userInfo = JSON.parse(userInfo);
}

const initialAuthState = {
  isAuthenticated: false,
  userInfo: userInfo.id,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userInfo = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userInfo = null;
      localStorage.removeItem(USER_INFO_KEY);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
