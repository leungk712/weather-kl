import { combineReducers } from "redux";

// ===== Slices ===== //
import user from "./slices/user/slice";

export const rootReducer = combineReducers({
  user,
});
