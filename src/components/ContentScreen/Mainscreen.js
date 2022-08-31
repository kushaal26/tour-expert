import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import "./Mainscreen.css";
import Product from "./product.js"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:'100%',
    width:'100%',
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'100%',
    width:'100%',
  },
}));

export default function Mainscreen() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        {/* <Grid container item xs={12} >
          <Paper className={classes.paper}>item</Paper>
        </Grid> */}
        <CssBaseline />
      <Container  className="myclass" style={{height:'100vh'}}>
        {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} > */}
          <Product>

          </Product>
          {/* </Typography> */}
      </Container>
      
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}