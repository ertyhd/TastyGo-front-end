import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/services/auth";

export const singup = createAsyncThunk(
  "auth/singup",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.singup(data);

      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);
      const result = await api.login(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const current = createAsyncThunk(
  "auth/current-user",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const updateUser = createAsyncThunk(
  "auth/update-user",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.updateUser(data);
      return result.data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const updateUserAvatar = createAsyncThunk(
  "auth/avatars",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.updateUserAvatar(data);
      return result.data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const deleteUserAvatar = createAsyncThunk(
  "auth/delete-avatar",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.deleteAvatar();
      return result.data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      const data = await api.logout();
      return data;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
