import type { RootState } from "../../app/store";

export const selectAuth = (state: RootState) => state.auth;

export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export const selectUserName = (state: RootState) =>
  state.auth.userName;