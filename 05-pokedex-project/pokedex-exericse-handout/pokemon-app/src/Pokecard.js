import React, { Component } from "react";
import "./Pokecard.css";
const Poke_API = "https://pokeres.bastionbot.org/images/pokemon/";

class Pokecard extends Component {
  render() {
    let imgSrc = `${Poke_API}${this.props.id}.png`;
    return (
      <div className="Pokecard">
        <h1>{this.props.name}</h1>
        <img src={imgSrc} alt={this.props.name} className="Pokecard-img" />
        <h2 className="Pokecard-type">Type: {this.props.type}</h2>
        <h2 className="Pokecard-exp">EXP: {this.props.exp}</h2>
      </div>
    );
  }
}

export default Pokecard;
