import React from 'react';
import { makeStyles,createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Background from './lac-allos-light.jpg';

const useStyles = makeStyles({
  root: {
       
  },
  background: {
    //backgroundImage: `url(${Background})`,
   
    paddingTop: 50,
    paddingBottom: 50,
  },

});


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


export default function MediaCard() {
  const classes = useStyles();

  return (

    <div className={classes.background}>

    <ThemeProvider theme={theme}>
      <Typography variant="h3" color="textSecondary" component="h1">
          Bicaïs Plomberie
      </Typography>
      <Typography variant="h5" color="textSecondary" component="h2">
          Plombier diplomé dans le Haut-Verdon
      </Typography>
      </ThemeProvider>

    </div>

  );
}