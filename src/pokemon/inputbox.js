import React from "react";
import TextField from "@material-ui/core/TextField";

export default class BasicTextFields extends React.Component {
  // constructor(props){
  //   super(props)
  // }
  
  render() {
    const attribute = this.props.attribute;
    console.log(attribute);
    return (
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleOnSubmit}
      >
        <div>
          <TextField
            id="standard-basic"
            label="Standard"
            margin="normal"
          />
        </div>
      </form>
    );
  }
}

function handleOnSubmit(event){
  event.preventDefault();
  console.log(event);
  const inputPokemon = document.getElementById("standard-basic")
  console.log("InputValue is : " + inputPokemon.value);
}
