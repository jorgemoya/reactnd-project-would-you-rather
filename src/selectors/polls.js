import { createSelector } from "reselect";

const pollsSelector = state => state.polls;
const userSelector = state => state.auth.user;

export const answeredPolls = createSelector(
  pollsSelector,
  userSelector,
  (polls, user) =>
    Object.keys(polls)
      .filter(
        pollId =>
          polls[pollId].optionOne.votes.find(username => username === user) ||
          polls[pollId].optionTwo.votes.find(username => username === user)
      )
      .map(pollId => polls[pollId])
      .sort((a, b) => b.timestamp - a.timestamp)
);

export const unansweredPolls = createSelector(
  pollsSelector,
  answeredPolls,
  (polls, answeredPolls) =>
    Object.keys(polls)
      .filter(pollId => !answeredPolls.find(poll => pollId === poll.id))
      .map(pollId => polls[pollId])
      .sort((a, b) => b.timestamp - a.timestamp)
);
