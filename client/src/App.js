import React, { Component } from 'react';
// import classes from './App.css';

import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';

//Component Imports
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" exact component={Home}></Route>
      </div>
    );
  }
}

export default App;
