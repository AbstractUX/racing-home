import React, { Component } from 'react';
import logo from './img/car.png';
import './App.css';
import RacingHomeGame from './components/RacingHomeGame';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore();

export default class App extends Component {
  render() {
    return (<Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Racing-Home!</h1>
        </header>
        <RacingHomeGame />
      </div>
    </Provider>)
  }
}
