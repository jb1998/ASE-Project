import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState, useReducer } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/Landing';
import React, {Fragment} from 'react';


function App() {
  return (
    <Router>
    <Fragment>
  
    <Route exact path="/" component = {Landing} />
    <section >
        <switch>
       
            {/* <Route exact path="/about" component= { About }  />   */}
          
             
          </switch>
    </section>
   </Fragment>
   </Router>
  );
}

export default App;
