import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Background from './lac-allos-light.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 1920,
    
  },
  media: {
    height: 100,
  },
  background: {
    //backgroundImage: `url(${Background})`,
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    minHeight: 200,
    padding: 50,
    fontSize:"0.8",
  },

});

export default function MediaCard() {
  const classes = useStyles();

  return (


    <div className={classes.background}>

      <Typography variant="h1" color="textSecondary" component="h1">
          Bicaïs Plomberie
      </Typography>

    </div>

  );
}