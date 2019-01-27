import React from 'react';
import '../App.css'

class SuccessfulPage extends React.Component{

    render(){

        return (

            <div className="Successful">
                Your payment has been successfully completed
                <div>
                    <img src={require('./successful.png')} alt="bitcoin" className="successimage"/>
                </div>
            </div>

        )

    }

}

export default SuccessfulPage;