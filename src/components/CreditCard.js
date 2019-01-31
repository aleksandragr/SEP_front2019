import React from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Cookies from 'universal-cookie';

class CreditCard extends React.Component{

    msbank(){
        console.log("usao")
        axios.get('http://localhost:8051/objectpayment/getobjectbank/'+localStorage.getItem('idpayment'))
        .then(response => {
            if(response.data==="neuspesno"){
                console.log("neuspesno");
            }else{

                var x = response.data.split('id=')[1];
                var y = response.data.split('/id=')[0];
                              
                const cookies = new Cookies();
                cookies.set('currentpayment', x); 

                window.location.href = y;
            }
        })
    }
    

    render(){

        return (
            <div className="general">
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>
                    
                    <Button onClick={this.msbank} bsStyle="warning" className="b">Let's start</Button>
                </div>

            </div>

        );
    }

    

}


export default CreditCard;