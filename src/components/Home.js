import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Homepagebanner from '../images/Ffootball1.jpg';

const Home = () => {

  return (
      <figure>
          <img src={Homepagebanner} alt="Home Page Banner"/>
      </figure>
  );
}

export default Home;
