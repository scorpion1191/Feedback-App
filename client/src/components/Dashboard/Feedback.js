import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FeedbackConsumer, FeedbackContext} from '../../context'
import Error from '../Error';

class Feedback extends Component {
    static contextType = FeedbackContext;

    constructor(props){
        super(props);
    }

    componentDidMount() {
            this.context.getRequestedFeedback();
    }
    render() { 
        return ( 
            <FeedbackConsumer>
            {(value)=>{
                return (
                    <FeedbackWrapper>
                        <div className="errorContainer  row justify-content-center">
                            { value.errorMsg ? (<Error />) : (" ") }
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12 first-column">
                                <div className="card">
                                <div className="card-header">Pending FeedBacks to be updated</div>
                                <div className="card-body">
                                {
                                    (value.requestedUserFeedback && value.requestedUserFeedback.length) ?
                                    (value.requestedUserFeedback.map(feedback => {
                                      return (
                                        <div key={feedback.RECEIVERID} className="card feedbackCard">
                                        <div className="card-header">Feedback for {feedback.RECEIVERID}</div>
                                            <div className="card-body">
                                              
                                              <div className="form-group">
                                                <label for="exampleFormControlTextarea1">Large textarea</label>
                                                <textarea className="form-control rounded-0" rows="10"></textarea>
                                              </div>
                                              <div className="card-footer">
                                              <button className="btn btn-primary">Submit</button>
                                              </div>  
                                            </div>
                                        </div>
                                      );
                                    }))
                                  :(<div></div>)
                                }
                                </div>
                                </div>
                                   
                                </div> 
                            </div>
                        </div>
                    </FeedbackWrapper>
                )
            }}
            </FeedbackConsumer>
            );
    }
}
const FeedbackWrapper = styled.div`
.row{
    margin:0px;
    margin-top: 5%;
}
.feedbackCard{
    margin-bottom:10px
}
.errorContainer{
  margin: 0;
  margin-top: 2%;
}
textarea{
  height:50px
}
.alert {
  width:50%;
}
.naveleContainer{
    width:25%;
    display:inline-block;
    margin-right: 2%;
}
`; 
export default Feedback;