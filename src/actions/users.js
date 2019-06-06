import { _getUsers } from "./../_DATA";

export const ADD_USERS = "ADD_USERS";
const FETCH_USERS = "FETCH_USERS";

function addUsers(users) {
  return {
    type: ADD_USERS,
    payload: users
  };
}

function fetchUsers() {
  return {
    type: FETCH_USERS
  };
}

export function handleFetchUsers() {
  return dispatch => {
    dispatch(fetchUsers());

    return _getUsers()
      .then(users => {
        dispatch(addUsers(users));
      })
      .catch(() => {
        alert("There was an error. Try again");
      });
  };
}
