import { _getQuestions } from "../_DATA";

export const ADD_POLLS = "ADD_POLLS";
const FETCH_POLLS = "FETCH_POLLS";

function addPolls(questions) {
  return {
    type: ADD_POLLS,
    payload: questions
  };
}

function fetchPolls() {
  return {
    type: FETCH_POLLS
  };
}

export function handleFetchPolls() {
  return dispatch => {
    dispatch(fetchPolls());

    return _getQuestions()
      .then(questions => dispatch(addPolls(questions)))
      .catch(() => {
        alert("There was an error. Try again.");
      });
  };
}
