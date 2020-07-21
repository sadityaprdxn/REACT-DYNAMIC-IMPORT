import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Clubpagebanner from '../images/Ffootball2.jpg';

const Clublist = () => {

  return (
      <figure>
          <img src={Clubpagebanner} alt="Clublist Page Banner"/>
      </figure>
  );
}

export default Clublist;