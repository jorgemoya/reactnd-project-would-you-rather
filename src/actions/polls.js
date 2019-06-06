import { _getQuestions, _saveQuestionAnswer } from "../_DATA";

export const ADD_POLLS = "ADD_POLLS";
const FETCH_POLLS = "FETCH_POLLS";
const SAVE_POLL_ANSWER = "SAVE_POLL_ANSWER";

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

function savePollAnswer() {
  return {
    type: SAVE_POLL_ANSWER
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

export function handleSavePollAnswer(answer) {
  return dispatch => {
    dispatch(savePollAnswer());

    return _saveQuestionAnswer(answer)
      .then(() => dispatch(handleFetchPolls()))
      .catch(() => {
        alert("There was an error. Try again.");
      });
  };
}
