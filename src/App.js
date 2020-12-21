import React from 'react';

import Grid from '@material-ui/core/Grid';

import ActionBar from './components/ActionBar';
import Header from './components/Header';

const App = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header></Header>
      </Grid>
      <Grid item xs={12}>
        <ActionBar></ActionBar>
      </Grid>
    </Grid>
  )
};

export default App;
