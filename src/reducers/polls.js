import { ADD_POLLS } from "../actions/polls";

export default function polls(state = {}, actions) {
  switch (actions.type) {
    case ADD_POLLS:
      return actions.payload;
    default:
      return state;
  }
}
