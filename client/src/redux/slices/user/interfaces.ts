export interface State {
  user: User;
  isLoggedIn: boolean;
}

export interface User {
  firstName: string;
  lastName: string;
  email: string;
}
