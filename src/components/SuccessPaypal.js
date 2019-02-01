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
            .then(res => {



                alert("Your payment is successfully completed!");
                console.log(res);

                window.location.href = localStorage.getItem('ncUrl')


            }
            )


    }


    render() {

        return (

            <div className="Successful">
                Your payment has been successfully created!
                <div>
                    <img src={require('./successful.png')} alt="paypal" className="successimage" />
                    <button onClick={this.confirmPayment}>Click here to complete payment!</button>
                </div>
            </div>

        )

    }

}

export default SuccessPaypal;