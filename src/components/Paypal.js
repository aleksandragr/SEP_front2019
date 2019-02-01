import React from 'react';
import "./CSSforAll.css";
import { Button } from 'react-bootstrap';
import axios from 'axios';


class PayPal extends React.Component {



    mspaypal() {
        axios.get('http://localhost:8051/objectpayment/getobjectpaypal/' + localStorage.getItem('idpayment'))
            .then(response => {

                localStorage.setItem('ncUrl', response.data.client_url);
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