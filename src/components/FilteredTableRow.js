import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";

const FilteredTableRow = () => {
  return (
    <TableBody>
      {pokemonList
        // .filter(row => {
        //   return row.attribute === attribute;
        // })
        .map(row => (
          <TableRow key={row.name}>
            <TableCell align="center"> {row.number}</TableCell>
            <TableCell align="left">{row.name}</TableCell>
            <TableCell align="center">{row.attribute}</TableCell>
            <TableCell align="right">
              <button
                onClick={() => {
                  alert("Delete Button CLicked");
                }}
              >
                X
              </button>
            </TableCell>
          </TableRow>
        ))}
    </TableBody>
  );
};

function createData(number, name, attribute) {
  return { number, name, attribute };
}

let pokemonList = [
  createData("1", "피카츄", "electric", "X"),
  createData("2", "라이츄", "electric", "X"),
  createData("3", "꼬부기", "water", "X"),
  createData("4", "갸랴도스", "water", "X"),
  createData("5", "뮤츠", "phychics", "X"),
  createData("6", "후딘", "phychics", "X"),
  createData("7", "미뇽", "dragon", "X"),
  createData("8", "망나뇽", "dragon", "X")
];

export default FilteredTableRow;
