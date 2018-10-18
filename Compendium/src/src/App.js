import React, { Component } from 'react';
import ItemCreationContainer from './containers/ItemCreationContainer';
import MetaDataContainer from './containers/MetaDataContainer';

import logo from './logo.svg';
import './App.css';

//TODO: Add React Context API
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Compendium</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MetaDataContainer />
        <hr />
        <ItemCreationContainer />
      </div>
    );
  }
}

export default App;
