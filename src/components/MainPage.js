import React from 'react';
import '../App.css';
import Bitcoin from './Bitcoin.js'
import PayPal from './Paypal.js';
import CreditCard from './CreditCard.js'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class MainPage extends React.Component{

    render(){

        return(

            <Router>
                
                
                <div className="App">
                
                  <h2 className="title">Choose your payment method</h2>
                  <hr/>
                  <Link to="/Bitcoin">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./bitcoin.png')} alt="bitcoin" className="image"/>
                      Bitcoin
                    </Button>  
                  </Link>

                  <Link to="/PayPal">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./paypal.png')} alt="bitcoin" className="image"/>
                      PayPal
                    </Button>
                  </Link>

                  <Link to="/Card">
                    <Button bsStyle="primary" className="btn">
                      <img src={require('./masterCard.png')} alt="bitcoin" className="image1"/>
                      Credit card
                    </Button>
                  </Link>
  
                  <Route path="/Bitcoin" component={Bitcoin}/>
                  <Route path="/PayPal" component={PayPal}/>
                  <Route path="/Card" component={CreditCard}/>
                  
        
                </div>
            </Router>



        )




    }





}

export default MainPage;
