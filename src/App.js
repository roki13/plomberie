import React from 'react';
import logo from './assets/logo-cyril.jpg';
import './App.css';
import Box from '@material-ui/core/Box';
import Address from './components/Address/Address';
import AppBar from './components/AppBar/AppBar'
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from './components/MediaCard/MediaCard';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height:200,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    //color: theme.palette.text.secondary,
    borderBlockStyle: 'none',
  },
  paperLeft: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    
  },
  logo: {
    maxWidth: '300px',
  },
}));



function App() {
  const classes = useStyles();
  return (

    <div className="App">



    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    

    <AppBar></AppBar>


    <div className={classes.root}>



      <Grid container spacing={2}>


        <Grid xs="12">
          <Paper className={classes.paper}>
          <MediaCard/>      
          </Paper>
        </Grid>
        <Grid item xs={"12"} sm={"6"}>
          <Paper className={classes.paperLeft}>
          <Typography variant="h5" color="textSecondary" component="h2">
            Bienvenue chez Bicaïs Plomberie
        </Typography>
            <p>
            Installé dans le Val d'Allos, je peux intervenir rapidement pour toute <b>urgence 24h/24</b> ou simple demande de devis Gratuit. <br></br>
            Spécialisé dans le domaine de la plomberie, je saurai répondre à vos besoins rapidement en proposant un <b>service de qualité</b>.
            </p>
            <p>
            Une <b>fuite</b> ? Des <b>WC</b> ou un évier bouchés ? Ou une panne de chauffe eau ? Je suis équipé pour vous fournir une prestation de service rapide et efficace.
            </p><p>
            Appelez-moi dès maintenant, le devis est gratuit !
            </p><p>
            Recherche et réparation de fuite<br/>
            Débouchage de canalisation<br/>
            Chauffe eau, Cumulus,<br/>
            Ballon d'eau chaude<br/>
            Chauffagiste
            </p><p>
            Intervention rapide
            </p>  
          </Paper>
        </Grid>
        <Grid item xs={"12"} sm={"6"}>
          <Paper>
          <img src={logo} className={classes.logo} alt="Plombier Val d'Allos, Haut-Verdon"/>
            
            </Paper>
        </Grid>
        <Grid item xs={"12"}>
        <Paper className={classes.paper}>
            <Address />
      </Paper>

        </Grid>
        
      </Grid>
    </div>

    
    </div>
  );
}

export default App;
