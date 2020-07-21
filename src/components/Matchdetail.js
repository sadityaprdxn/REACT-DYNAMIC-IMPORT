import React, { useState , useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Matchdetailpagebanner from '../images/Ffootball3.jpg';

const Matchdetail = () => {

  return (
      <figure>
          <img src={Matchdetailpagebanner} alt="Matchdetail Page Banner"/>
      </figure>
  );
}

export default Matchdetail;