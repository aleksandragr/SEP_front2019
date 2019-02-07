import React from 'react';
import '../App.css';
import PayPal from './Paypal.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from 'react-bootstrap';

class MembershipPayment extends React.Component {
    render() {

        return (

            <Router>


                <div className="App">

                    <h2 className="title">Pay your membership with PayPal!</h2>
                    <hr />


                    <Link to="/PayPal">
                        <Button bsStyle="primary" className="btn">
                            <img src={require('./paypal.png')} alt="bitcoin" className="image" />
                            PayPal
                        </Button>
                    </Link>




                    <Route path="/PayPal" component={PayPal} />



                </div>
            </Router>



        )




    }





}




export default MembershipPayment;
