import React from 'react';
import '../App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const b = window.location.pathname.split('/')[1];
const b1 = b.split('=')[1];
const coi = localStorage.getItem("createorderid");

class SuccessBitcoin extends React.Component{

    componentDidMount(){
        console.log("FRONTTTT");
        axios.get('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/getorder/' + coi + '/' + b1)
        .then(response => 
            
            console.log(response)
        )
    }

    finish(){
        axios.get('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/gotonc/' + localStorage.getItem('idpayment'))
        .then(response => {
           
           window.location.href = response.data
        }
          
        )
    }

    render(){

        return (


            <div className="Successful">
                Your payment has been successfully completed
                <div>
                    <img src={require('./successful.png')} alt="bitcoin" className="successimage"/>
                </div>

                <div>
                <Button bsStyle="primary" className="btn"  onClick={this.finish}>Finish</Button>
                </div>
            </div>
        )
    }
}

export default SuccessBitcoin;