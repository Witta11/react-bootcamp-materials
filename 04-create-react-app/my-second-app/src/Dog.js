import React, { Component } from "react";
import "./Dog.css";
import photo from "./Dog.jpg";

class Dog extends Component {
  render() {
    return (
      <div className="Dog">
        <h1>Dog</h1>
        <img src={photo} className="Dog-image"></img>
      </div>
    );
  }
}

export default Dog;
