import React from 'react';
import "./CSSforAll.css";
import { Button } from 'react-bootstrap';
import axios from 'axios';


class PayPal extends React.Component {



    mspaypal() {
        const c = localStorage.getItem('idpayment');
        axios.get('http://localhost:8051/objectpayment/getobjectpaypal/' + c)
            .then(response => {


                localStorage.setItem('clientId', response.data.clientId);
                localStorage.setItem('clientSecret', response.data.clientSecret);
                localStorage.setItem('id', c);
                window.location.href = response.data.redirect_url

            }
            )
    }

    render() {

        return (
            <div className="general">
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>

                    <Button bsStyle="warning" className="b" onClick={this.mspaypal()}>Let's start</Button>
                </div>
            </div>


        );

    }





}

export default PayPal;