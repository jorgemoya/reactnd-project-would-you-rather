import { ADD_USERS } from "./../actions/users";

export default function users(state = {}, actions) {
  switch (actions.type) {
    case ADD_USERS:
      return actions.payload;
    default:
      return state;
  }
}
