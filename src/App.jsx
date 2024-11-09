import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Form, Label, Input, Button } from 'reactstrap';
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
        <Home/></Route>
          <Route path="/orderPizza">
          <OrderPizza/></Route>
          <Route path="/success">
          <Success/>
          </Route>
        </Switch>
      
    </Router>
  )
}

export default App;