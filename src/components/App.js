import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  NavLink,
  Switch
} from "react-router-dom";
import { connect } from "react-redux";
import { handleFetchUsers } from "./../actions/users";
import { logout } from "./../actions/auth";
import Polls from "./Polls";
import Poll from "./Poll";
import Login from "./Login";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import NoMatch from "./NoMatch";
import { Nav, NavItem, UserNavItem } from "./styled";
import { handleFetchPolls } from "../actions/polls";

class App extends React.PureComponent {
  componentDidMount() {
    this.props.dispatch(handleFetchUsers());
    this.props.dispatch(handleFetchPolls());
  }

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.user ? (
            <>
              <Nav>
                <NavItem>
                  <NavLink to={"/"} exact>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/add"}>New Poll</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to={"/leaderboard"}>Leaderboard</NavLink>
                </NavItem>
                <UserNavItem>
                  <img
                    src={this.props.users[this.props.user].avatarURL}
                    alt={this.props.user}
                  />
                  <span>{this.props.user}</span>
                  <button onClick={this.handleOnClick}>Logout</button>
                </UserNavItem>
              </Nav>
              <Switch>
                <Route exact path="/" component={Polls} />
                <Route
                  path={`/questions/:pid(${this.generateRegex()})`}
                  component={Poll}
                />
                <Route path="/add" component={NewPoll} />
                <Route path="/leaderboard" component={Leaderboard} />
                <Route component={NoMatch} />
              </Switch>
            </>
          ) : (
            <Redirect push to={"/login"} />
          )}
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }

  handleOnClick = () => {
    this.props.dispatch(logout());
  };

  generateRegex() {
    return Object.keys(this.props.polls).join("|");
  }
}

function mapStateToProps({ auth, users, polls }) {
  return {
    user: auth.user,
    users,
    polls
  };
}

export default connect(mapStateToProps)(App);
