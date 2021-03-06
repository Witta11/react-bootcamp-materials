import React, { Component } from "react";
import { choice } from "./helpers";
import Coin from "./Coin";

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "https://tinyurl.com/react-coin-heads-jpg" },
      { side: "tails", imgSrc: "https://tinyurl.com/react-coin-tails-jpg" },
    ],
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      numFlips: 0,
      numHeads: 0,
      numTails: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  flipCoin() {
    // take choice function from helpers and get one array item
    const newCoin = choice(this.props.coins);
    this.setState((st) => {
      let newState = {
        ...st,
        currCoin: newCoin,
        numFlips: st.numFlips + 1,
      };
      if (newCoin.side === "heads") {
        newState.numHeads += 1;
      } else {
        newState.numTails += 1;
      }
      return newState;
    });
  }
  handleClick(e) {
    this.flipCoin();
  }
  render() {
    return (
      <div className="CoinContainer">
        <h2>Lets flip the Coin</h2>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
        <button onClick={this.handleClick}>Flip it!</button>
        <p>
          Out of {this.state.numFlips} flips, there have been{" "}
          {this.state.numHeads} heads and {this.state.numTails} tails.
        </p>
      </div>
    );
  }
}

export default CoinContainer;
