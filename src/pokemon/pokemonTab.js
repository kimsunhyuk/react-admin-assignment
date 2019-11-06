import React from "react";
import { createStore } from "redux";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import SimpleTable, { rows } from "./pokemonRow";
import TextField from "@material-ui/core/TextField";

function reducer(state, action) {
  console.log("reducer : " + state + action);
  if (state === undefined) {
    return {
      value: 0,
      attribute: "electric",
      inputPokemon: "",
      pokemonList: rows
    };
  }
  if ((action.type = "CHANGE_ATTRIBUTE")) {
    state.attribute = "electric";
  }
  return state;
}

var store = createStore(reducer);

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

export default class SimpleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      attribute: "electric",
      inputPokemon: "",
      pokemonList: rows
    };
  }

  render() {
    const value = this.state.value;

    const handleOnSubmit = e => {
      e.preventDefalut();
      console.log("handleOnSubmit called");
    };

    const handleChange = (event, newValue) => {
      this.setState({
        value: newValue,
        attribute: attributes[newValue]
        // inputPokemon: ""
      });
    };
    return (
      <div onClick={this.props.onChange}>
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
          <SimpleTable
            attribute={this.state.attribute}
            onClick={store.dispatch({
              type: "CHANGE_ATTRIBUTE",
              attribute: "electric"
            })}
          ></SimpleTable>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SimpleTable attribute={this.state.attribute}></SimpleTable>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SimpleTable attribute={this.state.attribute}></SimpleTable>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SimpleTable attribute={this.state.attribute}></SimpleTable>
        </TabPanel>
        <BasicTextFields
          attribute={this.state.attribute}
          preventDefalut="true"
          onSubmit={handleOnSubmit}
        ></BasicTextFields>
      </div>
    );
  }
}

export class BasicTextFields extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleOnSubmit}>
        <TextField></TextField>
      </form>
    );
  }
}

// function handleOnSubmit(event){
//   event.preventDefault();
//   console.log(event);
//   const inputPokemon = document.getElementById("standard-basic")
//   console.log("InputValue is : " + inputPokemon.value);
// }

const attributes = ["electric", "water", "phychics", "dragon"];
