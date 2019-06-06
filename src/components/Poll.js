import React from "react";

export default class Poll extends React.PureComponent {
  render() {
    return <li>{this.props.poll.id}</li>;
  }
}
