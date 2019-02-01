import React from 'react';
import '../App.css'

class FailedPage extends React.Component{

    render(){

        return(

            <div className="Successful">
                Your payment hasn't been successfully completed
                <div>
                    <img src={require('./failed.png')} alt="card" className="successimage"/>
                </div>

            </div>




        )


    }





}

export default FailedPage;