import React, { Component } from 'react';
import './App.css';
import Bitcoin from './components/Bitcoin.js'
import PayPal from './components/Paypal.js';
import CreditCard from './components/CreditCard.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

const f = window.location.pathname.split('/')[1];
const g = f.split('=')[1];
class App extends Component {
  
    render() {
     
      localStorage.setItem('idpayment', g);
        return (
            
            <Router>
                <div className="App">
                  
                  <h2 className="title">Choose your payment method</h2>
                  <hr/>
                  <Link to="/Bitcoin">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./components/bitcoin.png')} alt="bitcoin" className="image"/>
                      Bitcoin
                    </Button>  
                  </Link>

                  <Link to="/PayPal">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./components/paypal.png')} alt="bitcoin" className="image"/>
                      PayPal
                    </Button>
                  </Link>

                  <Link to="/Card">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./components/masterCard.png')} alt="bitcoin" className="image1"/>
                      Credit card
                    </Button>
                  </Link>
  
                  <Route path="/Bitcoin" component={Bitcoin}/>
                  <Route path="/PayPal" component={PayPal}/>
                  <Route path="/Card" component={CreditCard}/>
        
                </div>
            </Router>
    );
  }








}

export default App;
