import React from "react";
import { Link } from "react-router-dom";

export default class PollBrief extends React.PureComponent {
  render() {
    // const user = this.props.users[author];
    const { author, id, optionOne, optionTwo } = this.props.poll;

    return (
      <>
        <h2>
          {/* <img src={user.avatarURL} /> */}
          {author} asks
        </h2>
        <span>Would you rather</span>
        <p>
          {optionOne.text} or {optionTwo.text}
        </p>
        <Link to={`/questions/${id}`}>View Poll</Link>
      </>
    );
  }
}
