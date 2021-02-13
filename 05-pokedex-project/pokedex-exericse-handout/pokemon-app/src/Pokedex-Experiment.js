import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [],
    componentDidMount() {
      this.getData();
    },
    getData() {
      for (let i = 1; i <= 40; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
          .then((response) => response.json())
          .then((data) => {
            this.pokemon.push({
              id: data.id,
              namePoke: data.name,
              type: data.types[0].type.name,
              base_experience: data.base_experience,
            });
          });
      }
    },
  };
  render() {
    // this.props.getData();
    return (
      <div className="Pokedex">
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
