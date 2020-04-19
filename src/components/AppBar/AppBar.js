import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/core/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  withStyles, makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor:'#eeeeee',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  margin: {
    margin: theme.spacing(1),
    boxAlign: 'right',
    float: 'right',
  },
}));


const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    fontWeight: 'bold',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    justifyItems: 'right',
    alignItems: 'right',    
  },
})(Button);


export default function ButtonAppBar() {


  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <AppBar position="static" className={classes.root}>

        <Toolbar className="">
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>

          <BootstrapButton edge="end" 
          anchorEl="right"
          variant="contained" color="primary" disableRipple className={classes.margin}
          href="tel:+33686220118">
            06 86 22 01 18
        </BootstrapButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}