import { combineReducers } from "redux";

import auth from "./auth";
import users from "./users";
import polls from "./polls";

export default combineReducers({
  auth,
  users,
  polls
});
