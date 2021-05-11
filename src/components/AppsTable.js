import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 500,
  },
}));

export default function AppsTable(apps) {
  const classes = useStyles();
  const newApps = apps.apps

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Address</TableCell>
            <TableCell align="right">isForwarder</TableCell>
            <TableCell align="right">isUpgradable</TableCell>
            <TableCell align="right">Version</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newApps.map((app) => (
            <TableRow key={JSON.stringify(newApps.address)}>
              <TableCell component="th" scope="row">
                {JSON.stringify(app.address)}
              </TableCell>
              <TableCell align="right">{JSON.stringify(app.isForwarder)}</TableCell>
              <TableCell align="right">{JSON.stringify(app.isUpgradeable)}</TableCell>
              <TableCell align="right">{JSON.stringify(app.version)}</TableCell>
              <TableCell align="right">{JSON.stringify(app.repoName)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}