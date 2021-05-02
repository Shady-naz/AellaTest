import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MyBooks from './MyBooks';
import Button from '@material-ui/core/Button';
import useStyles from './styles/navbarStyles';

export default function Navbar( { books }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Heimdall's library
          </Typography>
          <MyBooks books = {books} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

 
