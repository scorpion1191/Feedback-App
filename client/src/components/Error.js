import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { FeedbackConsumer } from '../context';

class Error extends Component {
    render() { 
        return ( 
            <FeedbackConsumer>
                {(value)=>{
                    return (
                        <div className="alert alert-danger alert-dismissible">
                            <button type="button" className="close" data-dismiss="alert" onClick = {()=>{ value.clearError(); }}>&times;</button>
                            <strong>Error!</strong> {value.errorMsg}.
                        </div>
                    )
                }}
            </FeedbackConsumer>
          );
    }
}
 
export default Error;