import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "redux/api";

// ===== Interfaces ===== //
import { User } from "./interfaces";

export const setUser = createAsyncThunk(
  "setUser",
  async (payload: User, { rejectWithValue }) => {
    try {
      const { data } = await instance.post(`/user`, payload);

      return data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);
