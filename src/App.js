import React from 'react';
import logo from './assets/logo-cyril.jpg';
import './App.css';
import Title from './components/Title/Title';
import Address from './components/Address/Address';
import AppBar from './components/AppBar/AppBar'

function App() {
  return (

    
    <div className="App">
  
    <AppBar></AppBar>
      <header className="App-header">
      
        <Title name="Bicaïs Plomberie" />

        <img src={logo} className="App-logo" alt="logo" with="350" />

        <Address />

      </header>

     
    </div>
  );
}

export default App;
