// ===== Interfaces ===== //
import { StatusAndError } from "redux/statuses";

export interface State {
  user: User;
  isLoggedIn: boolean;
  setUserStatus: StatusAndError;
}

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt?: string;
  updatedAt?: string;
}
