import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import NotesIcon from '@material-ui/icons/Notes';

const useStyles = makeStyles((theme) => ({
root: {
    marginLeft: "90px",

},
  menuButton: {
    marginRight: theme.spacing(2),
    color: "purple"
  },
  customizeToobar: {
    minHeight: 70,
    color: "black"
  }
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="static" style={{background: "White"}}>
        <Toolbar variant="dense" className={classes.customizeToobar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <NotesIcon />
          </IconButton>
          <Typography variant="h5" color="inherit">
            Admin Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
