import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

class CreditCard extends React.Component{

    msbank(){

        axios.get('http://localhost:8051/msbank/bank/getPaymentObj/'+localStorage.getItem('idpayment'))
        .then(response => 
            console.log("ok je sve")
            //window.location.href = response.data
        )
    }

    render(){

        return (
            <div className="general">
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>
                    
                    <Button onClick={this.msbank()} bsStyle="warning" className="b">Let's start</Button>
                </div>

            </div>

        );
    }

}

export default CreditCard;