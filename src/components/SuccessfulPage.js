import React from 'react';
import '../App.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class SuccessfulPage extends React.Component{


    finish(){
        axios.get('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/gotonc/' + localStorage.getItem('idpomo'))
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

export default SuccessfulPage;