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
            payerID: f[3]

        };

        console.log(data.paymentId);
        console.log(data.payerID);

        var datas = JSON.stringify(data);

        fetch('http://localhost:8051/mspaypal/paypal/complete/payment', {
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
                    amount: dat.amount

                };

                var trs = JSON.stringify(transaction);

                fetch('http://localhost:8051/objectpayment/successpayment/' + localStorage.getItem('idpayment'), {
                    method: 'POST',
                    body: trs,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                    .then(resp => {

                        console.log(resp.data);

                        if (resp.data === "success") {
                            window.location.href = localStorage.getItem('ncUrl')
                        }

                    }
                    )


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