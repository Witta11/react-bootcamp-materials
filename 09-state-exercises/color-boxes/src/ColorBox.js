import React, { Component } from "react";
import "./ColorBox.css";
import { choice } from "./helpers";

class ColorBox extends Component {
  static defaultProps = {
    allColors: ["purple", "green", "blue", "pink", "lilac"],
  };
  constructor(props) {
    super(props);
    this.state = { color: choice(this.props.colors) };
    this.handleClick = this.handleClick.bind(this);
  }
  picColor() {
    let newColor;
    do {
      newColor = choice(this.props.allColors);
    } while (newColor === this.state.color);
    this.setState({ color: newColor });
  }
  handleClick() {
    this.picColor();
  }
  render() {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}

export default ColorBox;
