import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = {
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
};

let id = 0;
function createData(name, ticker, price, changes, changesPerc) {
  id += 1;
  return { id, name, ticker, price, changes, changesPerc };
}

const data = [
  createData('Wins Finance Holdings Inc.', "Win", 21.105, 0.105, 0.004975),
  createData('Cohu Inc.', "COHU", 19.21, 2.63, 0.136907),
  createData('SolarEdge Technologies Inc.', "SEDG", 53.84, 3.38, 0.062778),
  createData('Itron Inc.', "ITRI", 64.93, 8.13, 0.125211),
];

function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Company Name</TableCell>
            <TableCell align="right">Ticker</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Changes</TableCell>
            <TableCell align="right">ChangesPerc</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(n => (
            <TableRow key={n.id}>
              <TableCell component="th" scope="row">
                {n.name}
              </TableCell>
              <TableCell align="right">{n.ticker}</TableCell>
              <TableCell align="right">{n.price}</TableCell>
              <TableCell align="right">{n.changes}</TableCell>
              <TableCell align="right">{n.changesPerc}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);
