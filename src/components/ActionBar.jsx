import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {

  },
  button: {
    backgroundColor: '#EE8F48'
  }
}));

const ActionBar = () => {
  const classes = useStyles();
  const actions = [
    'New Filament',
    'Edit Filament',
    'View Filament',
    'Log Print',
    'Edit Print',
    'View Prints'
  ]
  return (
    <div></div>
  )
}

export default ActionBar;
