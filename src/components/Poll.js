import React from "react";
import { connect } from "react-redux";
import { handleSavePollAnswer } from "./../actions/polls";
import { answeredPolls, getPoll } from "../selectors/polls";
import { PollContainer, PollAuthor, PollText } from "./styled";

class Poll extends React.PureComponent {
  state = {
    showAnswers: false
  };

  componentDidMount() {
    const { id } = this.props.poll;

    const hasBeenAnswered = this.props.answeredPolls.find(
      poll => poll.id === id
    );

    if (hasBeenAnswered) {
      this.setState({ showAnswers: true });
    }
  }

  render() {
    const { author, optionOne, optionTwo } = this.props.poll;
    const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    const user = this.props.users[author];

    return (
      <div>
        {this.state.showAnswers ? (
          <PollContainer>
            <PollText>
              <p>
                <strong>Results:</strong>
              </p>
              <p>Would you rather {optionOne.text}</p>
              <span>
                {optionOne.votes.length} out of {totalVotes} votes
              </span>
              <p>Would you rather {optionTwo.text}</p>
              <span>
                {optionTwo.votes.length} out of {totalVotes} votes
              </span>
            </PollText>
          </PollContainer>
        ) : (
          <PollContainer>
            <PollAuthor>
              <img src={user.avatarURL} alt={author} />
              {this.props.users[author].name} asks
            </PollAuthor>
            <form onSubmit={this.handleOnSubmit}>
              <PollText>
                <span>Would you rather</span>
                <p>
                  <input
                    type="radio"
                    name="option"
                    id="option-1"
                    value="optionOne"
                  />
                  <label htmlFor="option-1">{optionOne.text}</label>
                  <br />
                  <input
                    type="radio"
                    name="option"
                    id="option-2"
                    value="optionTwo"
                  />
                  <label htmlFor="option-2">{optionTwo.text}</label>
                </p>
              </PollText>
              <button type="submit">Submit</button>
            </form>
          </PollContainer>
        )}
      </div>
    );
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { dispatch, user, poll } = this.props;
    const answer = event.target.elements.option.value;

    if (answer) {
      dispatch(
        handleSavePollAnswer({ authedUser: user, qid: poll.id, answer })
      );
      this.setState({ showAnswers: true });
    }
  };
}

function mapStateToProps(state, props) {
  const { pid } = props.match.params;

  return {
    answeredPolls: answeredPolls(state),
    user: state.auth.user,
    users: state.users,
    poll: getPoll(state, pid)
  };
}

export default connect(mapStateToProps)(Poll);
