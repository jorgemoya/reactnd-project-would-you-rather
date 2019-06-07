import { createSelector } from "reselect";

const usersSelector = state => state.users;

export const getLeaderboardStats = createSelector(
  usersSelector,
  users =>
    Object.keys(users)
      .map(uid => {
        const answers = Object.keys(users[uid].answers).length;
        const questions = users[uid].questions.length;
        return {
          answers,
          id: users[uid].id,
          avatar: users[uid].avatarURL,
          questions,
          total: answers + questions
        };
      })
      .sort((a, b) => b.total - a.total)
);
