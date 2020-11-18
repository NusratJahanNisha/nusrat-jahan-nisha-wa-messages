import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// -----------ANIMATION SECTION OF HOME PAGE--------------

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Animation = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <img style={{ width: "100%" }} class="img-responsive fancy" src="https://i.ibb.co/3BbYYW8/animation.png" alt="" />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Animation;