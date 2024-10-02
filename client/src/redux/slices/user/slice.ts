import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// ===== API ===== //

// ===== Constants ===== //
import { initialUser } from "./constants";
import { API_LIFECYCLE_STATUS } from "redux/statuses";
const { PENDING, FULFILLED, REJECTED } = API_LIFECYCLE_STATUS;
import { statusAndError } from "redux/statuses";

// ===== Endpoints ===== //
import { setUser } from "./endpoints";

// ===== Helpers ===== //

// // ===== Interfaces ===== //
import { State, User } from "./interfaces";

export const initialState: State = {
  user: initialUser,
  isLoggedIn: false,
  setUserStatus: statusAndError,
};

export const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    reset: (state: State) => {
      state.isLoggedIn = false;
      state.user = initialUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(setUser.pending, (state: State) => {
        state.setUserStatus = {
          status: PENDING,
          error: "",
        };
      })
      .addCase(
        setUser.fulfilled,
        (state: State, action: PayloadAction<User>) => {
          state.setUserStatus.status = FULFILLED;
          state.user = action.payload;
          state.isLoggedIn = true;
        }
      )
      .addCase(setUser.rejected, (state: State, action) => {
        state.setUserStatus = {
          status: REJECTED,
          error: action?.error?.message,
        };
      });
  },
});

export const { reset } = slice.actions;

export default slice.reducer;
