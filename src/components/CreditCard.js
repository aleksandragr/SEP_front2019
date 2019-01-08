import React from 'react';
import { Button } from 'react-bootstrap';

class CreditCard extends React.Component{

    render(){

        return (
            <div className="general">
                <div>
                    <p className="p">If you want to pay with {this.props.location.pathname.split('/')[1]}, click on the button below</p>
                    
                    <Button bsStyle="warning" className="b">Let's start</Button>
                </div>

            </div>

        );
    }

}

export default CreditCard;