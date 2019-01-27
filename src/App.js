import React, { Component } from 'react';
import './App.css';
import Bitcoin from './components/Bitcoin.js'
import PayPal from './components/Paypal.js';
import CreditCard from './components/CreditCard.js'
import SuccessfulPage from './components/SuccessfulPage.js'
import MainPage from './components/MainPage.js'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Router, Link } from "@reach/router"

const f = window.location.pathname.split('/')[1];
const g = f.split('=')[1];
class App extends Component {
  
    render() {

      
        localStorage.setItem('idpayment', g);
        return (
            
            <Router>
                <MainPage exact path={"/id="+g} />
                <SuccessfulPage path={"/Successfully"} />
            </Router>
    );
  }








}

export default App;
