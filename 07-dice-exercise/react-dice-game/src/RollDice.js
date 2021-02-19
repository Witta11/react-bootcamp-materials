import React, { Component } from "react";
import "./RollDice.css";
import Dice from "./Dice";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "one", rolling: false };
    this.roll = this.roll.bind(this);
  }
  roll() {
    // pick 2 new rolls
    const newDice1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDice2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    // set state with new rolls
    this.setState({ die1: newDice1, die2: newDice2, rolling: true });
    // wait a second then set rolling to false:
    setTimeout(() => this.setState({ rolling: false }), 1000);
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDices">
          <Dice face={this.state.die1} rolling={this.state.rolling} />
          <Dice face={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>
          {this.state.rolling ? "Rolling..." : "Roll the Dice"}
        </button>
      </div>
    );
  }
}
export default RollDice;
