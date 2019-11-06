import React from "react";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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

export default class SimpleTable extends React.Component {
  render() {
    const attribute = this.props.attribute;
    return (
      <div>
        <Paper>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">number</TableCell>
                <TableCell>name</TableCell>
                <TableCell align="center">attribute</TableCell>
                <TableCell align="right">remove</TableCell>
              </TableRow>
            </TableHead>
            <FilteredTableRow attribute={attribute}></FilteredTableRow>
          </Table>
        </Paper>
      </div>
    );
  }
}

class FilteredTableRow extends React.Component {

  deleteData(key) {
    console.log("deletedData called " + key);
    const deletedRow = rows.filter(row => {
      return row.number !== key
    });
    
    rows = deletedRow;
    console.log(rows);
  }

  render() {
    const attribute = this.props.attribute;
    return (
      <tbody>
        {rows
          .filter(row => {
            return row.attribute === attribute;
          })
          .map(row => (
            <TableRow key={row.name}>
              <TableCell align="center"> {row.number}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="center">{row.attribute}</TableCell>
              <TableCell align="right">
                <button onClick={() => {this.deleteData(row.number)}}>X</button>
              </TableCell>
            </TableRow>
          ))}
      </tbody>
    );
  }
}
