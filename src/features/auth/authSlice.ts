import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
  userName: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<string>) {
      state.isAuthenticated = true;
      state.userName = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userName = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;