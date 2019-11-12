import { CHANGE_ATTRIBUTE, INPUT_POKEMON, DELETE_POKEMON } from "./constants";

export function changeAttribute(attribute) {
  return {
    action: CHANGE_ATTRIBUTE,
    attriute: attribute
  };
}

export function inputPokemon(pokemon) {
  return {
    action: INPUT_POKEMON,
    inputPokemon: pokemon
  };
}

export function deletePokemon(pokemonList) {
  return {
    action: DELETE_POKEMON,
    pokemonList: pokemonList
  };
}
