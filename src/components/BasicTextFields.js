import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

export default function BasicTextFields() {
  //Material UI component//
  const useStyles = makeStyles(theme => ({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200
    }
  }));

  const classes = useStyles();
  /////////////////////////

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <div>
        <TextField
          id="standard-basic"
          className={classes.textField}
          label="Standard"
          margin="normal"
        />
      </div>
    </form>
  );

  // function handleOnSubmit() {
  //   const textField = document.getElementById("standard-basic");
  //   const newInputPokemon = createData("100", textField.value, state.attribute);
  //   const newList = state.pokemonList.push(newInputPokemon);

  //   store.dispatch({
  //     type: INPUT_POKEMON,
  //     inputPokemon: newInputPokemon,
  //     pokemonList: newList
  //   });

  //   console.log(textField.value);
  // }
}
