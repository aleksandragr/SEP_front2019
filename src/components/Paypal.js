import React from 'react';
import "./CSSforAll.css";
import { Button } from 'react-bootstrap';


class PayPal extends React.Component{

    render(){

        return (
            <div className="general">
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>
                    
                    <Button bsStyle="warning" className="b">Let's start</Button>
                </div>
            </div>


        );

    }





}

export default PayPal;