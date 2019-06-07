import React from "react";
import { handleFetchPolls } from "../actions/polls";
import { connect } from "react-redux";
import { answeredPolls, unansweredPolls } from "./../selectors/polls";
import PollBrief from "./PollBrief";
import { Tabs } from "./styled";

class Polls extends React.PureComponent {
  state = {
    show: "unanswered"
  };

  componentDidMount() {
    this.props.dispatch(handleFetchPolls());
  }

  render() {
    const { answeredPolls, unansweredPolls } = this.props;

    return (
      <>
        <Tabs>
          <span
            data-isactive={this.state.show === "unanswered"}
            onClick={this.updateTab}
          >
            Unanswered Polls
          </span>
          <span
            data-isactive={this.state.show === "answered"}
            onClick={this.updateTab}
          >
            Answered Polls
          </span>
        </Tabs>
        <div>
          <ul>
            {this.state.show === "unanswered"
              ? unansweredPolls.map(poll => (
                  <li key={poll.id}>
                    <PollBrief poll={poll} />
                  </li>
                ))
              : answeredPolls.map(poll => (
                  <li key={poll.id}>
                    <PollBrief poll={poll} />
                  </li>
                ))}
          </ul>
        </div>
      </>
    );
  }

  updateTab = event => {
    if (event.currentTarget.innerText === "Unanswered Polls") {
      this.setState({ show: "unanswered" });
    }

    if (event.currentTarget.innerText === "Answered Polls") {
      this.setState({ show: "answered" });
    }
  };
}

function mapStateToProps(state) {
  return {
    answeredPolls: answeredPolls(state),
    unansweredPolls: unansweredPolls(state)
  };
}

export default connect(mapStateToProps)(Polls);
