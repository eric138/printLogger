import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  root: {
    height: '5vh',
    textAlign: 'center',
    backgroundColor: '#EE8F48',
    color: 'black',
    border: '2px solid',
    borderColor: '#25CCCC',
    borderRadius: '5px'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant='h4'>
        Header
      </Typography>
    </Paper>
  )
}

export default Header;
