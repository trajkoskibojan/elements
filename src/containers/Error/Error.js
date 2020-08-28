import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  error: {
    height: '100vh',
    backgroundColor: 'rgb(205, 203, 203)',
  },
  link: {
    color: '#d84545',
    fontWeight: 800,
    textDecoration: 'none',
  },
}));

const Error = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.error}
      justify="center"
      alignItems="center"
      direction="column"
    >
      <Grid item style={{ textAlign: 'center' }}>
        <Typography variant="h1">Error 404</Typography>
        <Typography variant="body1">
          You reached a dead end. Go back to the{' '}
          <Link className={classes.link} to="/">
            Homepage
          </Link>{' '}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Error;
