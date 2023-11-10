import { createSlice } from "@reduxjs/toolkit";
import {
  singup,
  login,
  current,
  updateUser,
  logout,
  updateUserAvatar,
  deleteUserAvatar,
} from "./auth-operations";

const initialState = {
  user: {},
  token: "",
  loading: false,
  avatarLoading: false,
  isLogin: false,
  congrats: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCongrats: (state, { payload }) => {
      state.congrats = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(singup.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(singup.fulfilled, (store, { payload }) => {
        if (!payload) {
          store.loading = false;
          return;
        }
        const { token } = payload.data;
        store.loading = false;
        store.user = payload.data.user;
        store.token = token;
        store.isLogin = true;
        store.congrats = true;
      })
      .addCase(singup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(login.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        const { token } = payload.data;
        store.loading = false;
        store.user = payload.data.user;
        store.token = token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(current.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(current.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload.user;
        store.isLogin = true;
      })
      .addCase(current.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updateUser.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(updateUser.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload.user;
      })
      .addCase(updateUser.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updateUserAvatar.pending, (store) => {
        store.avatarLoading = true;
        store.error = null;
      })
      .addCase(updateUserAvatar.fulfilled, (store, { payload }) => {
        store.avatarLoading = false;
        store.user.avatarURL = payload;
      })
      .addCase(updateUserAvatar.rejected, (store, { payload }) => {
        store.avatarLoading = false;
        store.error = payload;
      })
      .addCase(deleteUserAvatar.pending, (store) => {
        store.avatarLoading = true;
        store.error = null;
      })
      .addCase(deleteUserAvatar.fulfilled, (store, { payload }) => {
        store.avatarLoading = false;
        store.user.avatarURL = payload;
      })
      .addCase(deleteUserAvatar.rejected, (store, { payload }) => {
        store.avatarLoading = false;
        store.error = payload;
      })
      .addCase(logout.pending, (store) => {
        store.loading = true;
        store.error = null;
      })
      .addCase(logout.fulfilled, (store) => {
        store.loading = false;
        store.user = {};
        store.token = "";
        store.isLogin = false;
        store.congrats = false;
      })
      .addCase(logout.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export const { setCongrats } = authSlice.actions;
export default authSlice.reducer;
