import React, { Component } from 'react';
import './App.css';
import SuccessfulPage from './components/SuccessfulPage.js'
import SuccessPaypal from './components/SuccessPaypal.js'
import MainPage from './components/MainPage.js'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import FailedPage from './components/FailedPage.js';
import { Router } from "@reach/router"
import SuccessBitcoin from './components/SuccessBitcoin.js'
import MembershipPayment from './components/MembershipPayment.js'


localStorage.setItem("ipmain", '192.168.43.174');

const f = window.location.pathname.split('/')[1];
const g = f.split('=')[1];

const b = window.location.pathname.split('/')[1];
const b1 = b.split('=')[1];
localStorage.setItem('idpayment', g);
class App extends Component {

    render() {


       
        return (

            <Router>
                <MainPage exact path={"/id=" + g} />
                <MembershipPayment exact path={"/paypal=" + g} />
                <SuccessfulPage path={"/Successfully"} />
                <SuccessPaypal path={"/paypal/success"} />
                <FailedPage path={"/failed"} />
                <SuccessBitcoin path={"/bitcoin=" + b1} />
            </Router>


        );
    }








}

export default App;
