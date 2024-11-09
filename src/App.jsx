import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bileşenlerim
import OrderPizza from './components/OrderPizza';
import Success from './components/Success';
import Home from './components/Home';



function App() {

  return (

    <Router>
      <Switch>
        <Route exact path="/">
          <Home /></Route>
        <Route path="/orderPizza">
          <OrderPizza /></Route>
        <Route path="/success">
          <Success />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;