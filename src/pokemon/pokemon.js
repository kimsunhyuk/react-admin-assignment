import React from "react";
import SimpleTabs from "./pokemonTab";

export default class Pokemon extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     attribute: ""
  //   };
  // }

  render() {
    return (
      <div className="pokemon">
        <div className="pokemonTab">
          <SimpleTabs attribute=""></SimpleTabs>
        </div>
      </div>
    );
  }

  // handleChange() {
  //   const attribute = this.state.attribute;
  //   this.setState({
  //     attribute: attribute
  //   });
  //   console.log(`Main : handleChange - setState, attribute is ${attribute}`)
  // }
}
