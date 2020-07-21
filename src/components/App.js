import React, { useState , useEffect } from 'react';
import '../scss/App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Header from './Header';
import Main from './Main';

const App = () => {

  return (
    <Router>
      <Header />
      <Main />
    </Router>
  );
}

export default App;
