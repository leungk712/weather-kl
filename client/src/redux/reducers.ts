import { combineReducers } from "redux";

// ===== Slices ===== //
import settings from "./slices/settings/slice";
import user from "./slices/user/slice";

export const rootReducer = combineReducers({
  settings,
  user,
});
