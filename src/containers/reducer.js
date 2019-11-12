
// import './actions'

export default function reducer(state, action) {
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

function createData(number, name, attribute) {
  return { number, name, attribute };
}

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