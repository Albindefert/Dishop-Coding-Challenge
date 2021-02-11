import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Series from './Components/Pages/Series';
import Movies from './Components/Pages/Movies';
import SignUp from './Components/Pages/SignUp';

function App(){
  return(
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/Series' component={Series}/>
        <Route path='/Movies' component={Movies}/>
        <Route path='/Sign-Up' component={SignUp}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;