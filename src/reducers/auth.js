import { LOGIN, LOGOUT } from "./../actions/auth";

export default function auth(state = {}, action) {
  switch (action.type) {
    case LOGIN:
      return { user: action.payload };
    case LOGOUT:
      return {};
    default:
      return state;
  }
}
