import React from 'react';
import '../App.css'

class SuccessPaypal extends React.Component {



    constructor(props) {
        super(props);
        this.state = {

            paymentId: "",
            token: "",
            PayerID: ""




        };
        this.confirmPayment = this.confirmPayment.bind(this);


    }


    confirmPayment() {

        var path = window.location.href;
        var f = path.split('=');
        var e = f[1].split('&');
        this.setState({ paymentId: e[0] });
        this.setState({ PayerID: f[3] });



        let data = {
            paymentId: e[0],
            payerID: f[3],
            clientId: localStorage.getItem('clientId'),
            clientSecret: localStorage.getItem('clientSecret')

        };

        console.log(data.paymentId);
        console.log(data.payerID);

        var datas = JSON.stringify(data);

        fetch('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/complete/payment', {
            method: 'PUT',
            body: datas,
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json()).then(dat => {



                alert("Your payment is successfully completed!");


                let transaction = {

                    email: dat.email,
                    status: dat.status,
                    payeremail: dat.payeremail,
                    description: dat.description,
                    time: dat.time,
                    merchant: dat.merchant,
                    currency: dat.currency,
                    type: dat.type,
                    amount: dat.amount,
                    paymentid: dat.paymentid

                };

                var trs = JSON.stringify(transaction);
                const c = localStorage.getItem('id');

                fetch('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/successpayment/' + c, {
                    method: 'POST',
                    body: trs,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => resp.json()).then(da => {


                        window.location.href = da.fronturl;

                    }
                    );

            }
            )
    }


    render() {

        return (

            <div className="Successful" >
                Your payment has been successfully created!
                <div>
                    <img src={require('./successful.png')} alt="paypal" className="successimage" />
                    <button onClick={this.confirmPayment}>Click here to complete payment!</button>
                </div >
            </div >

        )

    }

}

export default SuccessPaypal;