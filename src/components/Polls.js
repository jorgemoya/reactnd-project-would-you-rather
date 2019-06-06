import React from "react";
import { handleFetchPolls } from "../actions/polls";
import { connect } from "react-redux";
import { answeredPolls, unansweredPolls } from "./../selectors/polls";
import Poll from "./Poll";

class Polls extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchPolls());
  }

  render() {
    const { answeredPolls, unansweredPolls } = this.props;

    return (
      <>
        <h1>Unanswered Polls</h1>
        <div>
          <ul>
            {unansweredPolls.map(poll => (
              <Poll key={poll.id} poll={poll} />
            ))}
          </ul>
        </div>
        <h1>Answered Polls</h1>
        <div>
          <ul>
            {answeredPolls.map(poll => (
              <Poll key={poll.id} poll={poll} />
            ))}
          </ul>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    answeredPolls: answeredPolls(state),
    unansweredPolls: unansweredPolls(state)
  };
}

export default connect(mapStateToProps)(Polls);
