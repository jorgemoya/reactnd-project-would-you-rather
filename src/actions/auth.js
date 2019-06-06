export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export function login(email) {
  return {
    type: LOGIN,
    payload: email
  };
}

export function logout() {
  return {
    type: LOGOUT
  };
}
