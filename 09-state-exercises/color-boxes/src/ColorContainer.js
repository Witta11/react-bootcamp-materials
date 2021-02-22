import React, { Component } from "react";
import "./ColorBox.css";
import ColorBox from "./ColorBox";
import "./ColorContainer.css";

class ColorContainer extends Component {
  static defaultProps = {
    numBoxes: 20,
    allColors: ["purple", "green", "blue", "pink", "lilac"],
  };
  render() {
    const boxes = Array.from({ length: this.props.numBoxes }).map(() => (
      <ColorBox colors={this.props.allColors} />
    ));
    return <div className="ColorContainer">{boxes}</div>;
  }
}

export default ColorContainer;
