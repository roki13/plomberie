import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {  purple } from '@material-ui/core/colors';
import {  withStyles, makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
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
  },
})(Button);


export default function ButtonAppBar() {
  
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">

        <Toolbar>
         
          <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}
          href="tel:+33686220118">
            06 86 22 01 18
        </BootstrapButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}