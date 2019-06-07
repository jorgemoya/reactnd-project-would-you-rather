import React from "react";
import { Link } from "react-router-dom";
import { PollContainer, PollAuthor, PollText } from "./styled";
import { connect } from "react-redux";

class PollBrief extends React.PureComponent {
  render() {
    const { author, id, optionOne, optionTwo } = this.props.poll;
    const user = this.props.users[author];

    return (
      <PollContainer>
        <PollAuthor>
          <img src={user.avatarURL} alt={author} />
          {this.props.users[author].name} asks
        </PollAuthor>
        <PollText>
          <span>Would you rather</span>
          <p>
            {optionOne.text} <strong>or</strong> {optionTwo.text}
          </p>
        </PollText>
        <button>
          <Link to={`/questions/${id}`}>View Poll</Link>
        </button>
      </PollContainer>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(PollBrief);
