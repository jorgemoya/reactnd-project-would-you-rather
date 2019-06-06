import React from "react";
import { connect } from "react-redux";
import { handleCreateNewPoll } from "./../actions/polls";

class NewPoll extends React.PureComponent {
  render() {
    return (
      <>
        <h2>Create New Poll</h2>
        <span>Complete the question:</span>
        <form onSubmit={this.handleOnSubmit}>
          <span>Would you rather...</span>
          <input type="text" name="optionOne" />
          <span>or</span>
          <input type="text" name="optionTwo" />
          <button type="submit">Submit</button>
        </form>
      </>
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
