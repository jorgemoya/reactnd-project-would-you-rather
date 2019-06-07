import React from "react";
import { connect } from "react-redux";
import { handleCreateNewPoll } from "./../actions/polls";
import { PollContainer, PollText } from "./styled";

class NewPoll extends React.PureComponent {
  render() {
    return (
      <PollContainer>
        <PollText>
          <h2>Create New Poll</h2>
          <h3>Complete the question:</h3>
          <form onSubmit={this.handleOnSubmit}>
            <span>Would you rather...</span>
            <p>
              <input type="text" name="optionOne" />
            </p>
            <span>or</span>
            <p>
              <input type="text" name="optionTwo" />
            </p>
            <button type="submit">Submit</button>
          </form>
        </PollText>
      </PollContainer>
    );
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const { dispatch, history, user } = this.props;
    const optionOneText = event.target.elements.optionOne.value;
    const optionTwoText = event.target.elements.optionTwo.value;

    if (optionOneText && optionTwoText) {
      dispatch(
        handleCreateNewPoll({
          optionOneText,
          optionTwoText,
          author: user
        })
      );

      history.push("/");
    }
  };
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user
  };
}

export default connect(mapStateToProps)(NewPoll);
