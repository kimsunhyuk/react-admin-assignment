import React from "react";
import SimpleTabs from "./pokemonTab";

export default class Pokemon extends React.Component {
  render() {
    return (
      <div className="pokemon">
        <div className="pokemonTab">
          <SimpleTabs ></SimpleTabs>
        </div>
      </div>
    );
  }
}
