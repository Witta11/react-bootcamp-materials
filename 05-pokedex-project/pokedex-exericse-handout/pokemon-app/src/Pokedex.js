import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    let title;
    if (this.props.isWinner) {
      title = <h1 className="Pokedex-winner">Winning Hand</h1>;
    } else {
      title = <h1 className="Pokedex-loser">Losing Hand</h1>;
    }
    return (
      <div className="Pokedex">
        {title}
        <h3>Total experience: {this.props.exp}</h3>
        <div className="Pokedex-grid">
          {this.props.pokemon.map((p) => (
            <Pokecard
              id={p.id}
              name={p.namePoke}
              type={p.type}
              exp={p.base_experience}
              key={p.id}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
