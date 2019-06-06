import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { handleFetchUsers } from "./../actions/users";
import { logout } from "./../actions/auth";
import Polls from "./Polls";
import Login from "./Login";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchUsers());
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.user ? (
            <nav>
              <span>{this.props.user}</span>
              <button onClick={this.handleOnClick}>Logout</button>
            </nav>
          ) : (
            <Redirect to={"/login"} />
          )}
          <Route path="/" exact component={Polls} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }

  handleOnClick = () => {
    this.props.dispatch(logout());
  };
}

function mapStateToProps({ auth }) {
  return {
    user: auth.user
  };
}

export default connect(mapStateToProps)(App);
