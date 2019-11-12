import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createStore } from "redux";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {INPUT_POKEMON} from '../../src/containers/constants'

let rows = [
  createData("1", "피카츄", "electric", "X"),
  createData("2", "라이츄", "electric", "X"),
  createData("3", "꼬부기", "water", "X"),
  createData("4", "갸랴도스", "water", "X"),
  createData("5", "뮤츠", "phychics", "X"),
  createData("6", "후딘", "phychics", "X"),
  createData("7", "미뇽", "dragon", "X"),
  createData("8", "망나뇽", "dragon", "X")
];

function reducer(state, action) {
  if (state === undefined) {
    state = {
      value: 0,
      attribute: "electric",
      inputPokemon: "",
      pokemonList: rows
    };
    return state;
  }
  console.log(state, action);
  var newState;
  if (action.type === "CHANGE_ATTRIBUTE") {
    newState = Object.assign({}, state);
    newState.attribute = action.attribute;
  }
  if (action.type === "DELETE_POKEMON") {
    // console.log('action : ', state )
    // newState = Object.assign({}, state);
    // newState.pokemonList = action.pokemonList;
    newState = {...state, pokemonList: [...action.pokemonList]}
    console.log('newState :: ', newState)
  }
  if (action.type === "INPUT_POKEMON") {
    newState = Object.assign({}, state);
    newState.inputPokemon = action.inputPokemon;
  }
  return newState;
}

var store = createStore(reducer);
store.subscribe(FilteredTableRow);

const attributes = ["electric", "water", "phychics", "dragon"];

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  // var state = store.getState();

  const handleChange = (event, newValue) => {
    console.log("handleCHange called");
    setValue(newValue);
    store.dispatch({
      type: "CHANGE_ATTRIBUTE",
      attribute: attributes[newValue]
    });
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Electric" {...a11yProps(0)} />
          <Tab label="Water" {...a11yProps(1)} />
          <Tab label="Phychics" {...a11yProps(2)} />
          <Tab label="Dragon" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <SimpleTable></SimpleTable>
      </TabPanel>
      <BasicTextFields></BasicTextFields>
    </div>
  );
}

function createData(number, name, attribute) {
  return { number, name, attribute };
}

function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">number</TableCell>
            <TableCell>name</TableCell>
            <TableCell align="center">attribute</TableCell>
            <TableCell align="right">remove</TableCell>
          </TableRow>
        </TableHead>
        <FilteredTableRow />
      </Table>
    </Paper>
  );
}

const deletePokemon = (number) => (event) => {
  const state = store.getState();
  const pokemonList = state.pokemonList;

  const deletedRow = pokemonList.filter(row => {
    return row.number !== number;
  });
  console.log('delete!! : ', deletedRow)
  store.dispatch({
    type: "DELETE_POKEMON",
    pokemonList: deletedRow
  });
};
// store.subscribe(deletePokemon);

const FilteredTableRow = () => {
  const [state, setState] = useState(store.getState())
  const attribute = state.attribute;
  const pokemonList = state.pokemonList;

  store.subscribe(() => {
    console.log('subscribe!!')
    setState(store.getState())
  })

  return (
    <TableBody>
      {pokemonList
        .filter(row => {
          return row.attribute === attribute;
        })
        .map(row => (
          <TableRow key={row.name}>
            <TableCell align="center"> {row.number}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="center">{row.attribute}</TableCell>
            <TableCell align="right">
              <button onClick={deletePokemon(row.number)}>X</button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
}

export function BasicTextFields() {
  const state = store.getState();
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

  function handleOnSubmit() {
    const textField = document.getElementById("standard-basic");
    const newInputPokemon = createData("100", textField.value, state.attribute);
    const newList = state.pokemonList.push(newInputPokemon);

    store.dispatch({
      type: INPUT_POKEMON,
      inputPokemon: newInputPokemon,
      pokemonList: newList
    });

    console.log(textField.value);
  }

  return (
    <form
      className={classes.container}
      noValidate
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault();
        handleOnSubmit();
      }}
    >
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
}
