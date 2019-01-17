import React /*, { Component }*/ from 'react';
import "./CSSforAll.css";
import { Button } from 'react-bootstrap';
import axios from 'axios';

class Bitcoin extends React.Component{

    msbitcoin(){
        axios.get('http://localhost:8051/msbitcoin/payment/bitcoin/' + localStorage.getItem('idpayment'))
        .then(response => 
            
            window.location.href = response.data
        )
    }


    render(){

        return (
            <div className="general">
                
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>
                    
                    <Button bsStyle="warning" className="b" onClick={this.msbitcoin}>Let's start</Button>
                </div>
            </div>
        );
    }


}

export default Bitcoin;