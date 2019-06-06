import { createSelector } from "reselect";

const pollsSelector = state => state.polls;
const userSelector = state => state.auth.user;
const pollSelector = (state, pid) => state.polls[pid];

export const answeredPolls = createSelector(
  pollsSelector,
  userSelector,
  (polls, user) =>
    Object.keys(polls)
      .filter(
        pid =>
          polls[pid].optionOne.votes.find(username => username === user) ||
          polls[pid].optionTwo.votes.find(username => username === user)
      )
      .map(pid => polls[pid])
      .sort((a, b) => b.timestamp - a.timestamp)
);

export const unansweredPolls = createSelector(
  pollsSelector,
  answeredPolls,
  (polls, answeredPolls) =>
    Object.keys(polls)
      .filter(pid => !answeredPolls.find(poll => pid === poll.id))
      .map(pid => polls[pid])
      .sort((a, b) => b.timestamp - a.timestamp)
);

export const getPoll = createSelector(
  pollSelector,
  poll => {
    return poll;
  }
);
