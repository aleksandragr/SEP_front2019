import React /*, { Component }*/ from 'react';
import "./CSSforAll.css";
import { Button } from 'react-bootstrap';
import axios from 'axios';



class Bitcoin extends React.Component{

    msbitcoin(){
        axios.get('http://' + localStorage.getItem('ipmain') + ':8051/objectpayment/getobjectbitcoin/' + localStorage.getItem('idpayment'))
        .then(response => {
           var r = response.data;
           
           localStorage.setItem('createorderid', r.split(',')[1]);
           window.location.href = r.split(',')[0]
        }
          
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