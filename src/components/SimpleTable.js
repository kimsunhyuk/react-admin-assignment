import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FilteredTableRow from './FilteredTableRow';

export default function SimpleTable() {
  return (
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
        <FilteredTableRow />
      </Table>
    </Paper>
  );
}