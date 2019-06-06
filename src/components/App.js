import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
import { connect } from "react-redux";
import { handleFetchUsers } from "./../actions/users";
import { logout } from "./../actions/auth";
import Polls from "./Polls";
import Poll from "./Poll";
import Login from "./Login";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchUsers());
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.user ? (
            <>
              <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/add"}>New Question</Link>
                <Link to={"/leaderboard"}>Leaderboard</Link>
                <span>{this.props.user}</span>
                <button onClick={this.handleOnClick}>Logout</button>
              </nav>
              <Route path="/" exact component={Polls} />
              <Route path="/questions/:pid" component={Poll} />
              <Route path="/add" component={NewPoll} />
              <Route path="/leaderboard" component={Leaderboard} />
            </>
          ) : (
            <Redirect to={"/login"} />
          )}
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
