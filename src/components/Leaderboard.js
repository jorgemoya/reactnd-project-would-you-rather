import React from "react";
import { connect } from "react-redux";
import { handleFetchUsers } from "./../actions/users";
import { getLeaderboardStats } from "../selectors/users";

class Leaderboard extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchUsers());
  }

  render() {
    const { leaderboardStats } = this.props;

    return (
      <ul>
        {leaderboardStats.map(user => (
          <li key={user.id}>
            <div>
              <span>{user.id}</span>
              <span>Answered questions: {user.answers}</span>
              <span>Created questions: {user.questions}</span>
              <span>Score {user.total}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    leaderboardStats: getLeaderboardStats(state)
  };
}

export default connect(mapStateToProps)(Leaderboard);
