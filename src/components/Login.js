import React from "react";
import { connect } from "react-redux";
import { login } from "./../actions/auth";
import { LoginContainer } from "./styled";

class Login extends React.PureComponent {
  render() {
    const { users } = this.props;

    return (
      <LoginContainer>
        <p>Choose a user to login:</p>
        {Object.keys(users).length > 0 ? (
          <select onChange={this.handleOnChange}>
            <option>Choose username</option>
            {Object.keys(users).map(username => (
              <option key={users[username].id} value={users[username].id}>
                {users[username].id}
              </option>
            ))}
          </select>
        ) : (
          <div>Loading...</div>
        )}
      </LoginContainer>
    );
  }

  handleOnChange = event => {
    const username = event.target.value;
    this.props.dispatch(login(username));

    this.props.history.goBack();
  };
}

function mapStateToProps({ users }) {
  return {
    users
  };
}

export default connect(mapStateToProps)(Login);
