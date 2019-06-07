import React from "react";
import { connect } from "react-redux";
import { handleFetchUsers } from "./../actions/users";
import { getLeaderboardStats } from "../selectors/users";
import { LeaderboardContainer } from "./styled";

class Leaderboard extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchUsers());
  }

  render() {
    const { leaderboardStats } = this.props;

    return (
      <LeaderboardContainer>
        <thead>
          <tr>
            <th>User</th>
            <th />
            <th>Answered questions</th>
            <th>Created questions</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardStats.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt={user.id} />
              </td>
              <td>{user.answers}</td>
              <td>{user.questions}</td>
              <td>{user.total}</td>
            </tr>
          ))}
        </tbody>
      </LeaderboardContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    leaderboardStats: getLeaderboardStats(state)
  };
}

export default connect(mapStateToProps)(Leaderboard);
