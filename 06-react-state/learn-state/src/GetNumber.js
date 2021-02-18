import React, { Component } from "react";

class GetNumber extends Component {
  constructor(props) {
    super(props);
    this.state = { num: 1 };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // pick random number
    let rand = Math.floor(Math.random() * 10) + 1;
    // update state with random number
    this.setState({ num: rand });
  }
  render() {
    return (
      <div>
        <h1>Your number is: {this.state.num}</h1>
        {this.state.num === 7 ? (
          <h2>You win!</h2>
        ) : (
          <button onClick={this.handleClick}>Get a 7</button>
        )}
      </div>
    );
  }
}

export default GetNumber;
