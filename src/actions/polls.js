import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from "../_DATA";

export const ADD_POLLS = "ADD_POLLS";
const CREATE_NEW_POLL = "CREATE_NEW_POLL";
const FETCH_POLLS = "FETCH_POLLS";
const SAVE_POLL_ANSWER = "SAVE_POLL_ANSWER";

function addPolls(questions) {
  return {
    type: ADD_POLLS,
    payload: questions
  };
}

function createNewPoll() {
  return {
    type: CREATE_NEW_POLL
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

export function handleCreateNewPoll(poll) {
  return dispatch => {
    dispatch(createNewPoll());

    return _saveQuestion(poll)
      .then(() => dispatch(handleFetchPolls()))
      .catch(() => {
        alert("There was an error. Try again.");
      });
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
