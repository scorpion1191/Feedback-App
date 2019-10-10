import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FeedbackConsumer, FeedbackContext} from '../../../context'
import Error from '../../Error';
import Navelement from '../../Navelement';

class Userdetail extends Component {
    static contextType = FeedbackContext;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if(this.context.isAdmin){
            this.context.getCurrentUserDetail();
            this.context.getCurrentUserFeedback();
        }
    }
    render() { 
        return ( 
            <FeedbackConsumer>
            {(value)=>{
                return (
                    <UserdetailWrapper>
                        <div className="errorContainer  row justify-content-center">
                            { value.errorMsg ? (<Error />) : (" ") }
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-6 first-column">
                                <div className="card">
                                <div className="card-header">User Details</div>
                                <div className="card-body">
                                <form onSubmit={e => {e.preventDefault();}}>
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">FirstName :</label>
                                    <div className="col-sm-9">
                                    <input disabled={ value.mode === 'View' }  type="text" className="form-control-plaintext" name="FIRSTNAME" placeholder="FIRSTNAME" value={value.currentUserDetail.FIRSTNAME} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label">LastName :</label>
                                    <div className="col-sm-9">
                                    <input disabled={ value.mode === 'View' }  type="text" className="form-control-plaintext"  name="LASTNAME" placeholder="LASTNAME" value={value.currentUserDetail.LASTNAME} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label">EMAIL :</label>
                                    <div className="col-sm-9">
                                    <input disabled={ value.mode === 'View' }  type="email" className="form-control-plaintext"  name="EMAIL" placeholder="EMAIL" value={value.currentUserDetail.EMAIL} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label">DOB :</label>
                                    <div className="col-sm-9">
                                    <input disabled={ value.mode === 'View' }  type="text" className="form-control-plaintext"  name="DOB" placeholder="DOB" value={value.currentUserDetail.DOB} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                <label className="col-sm-3 col-form-label">ADDRESS :</label>
                                    <div className="col-sm-9">
                                    <input disabled={ value.mode === 'View' }  type="text" className="form-control-plaintext"  name="ADDRESS" placeholder="ADDRESS" value={value.currentUserDetail.ADDRESS} />
                                    </div>
                                </div>
                                <div className="form-group row">
{( value.mode === 'Edit' ) ? (<button className="btn btn-primary">Update</button>) : " "}
                                </div>
                                </form>
                                </div>
                                </div>
                                </div>
                                <div className="col-sm-6 second-column">
                                <div className="card">
                                <div className="card-header">FeedBacks Received for {value.currentUserDetail.FIRSTNAME}</div>
                                <div className="card-body">
                                {
                                    (value.currentUserFeedback && value.currentUserFeedback.length) ?
                                    (value.currentUserFeedback.map(feedback => {
                                      return (
                                        <div key={feedback.PROVIDERID} className="card feedbackCard">
                                            <div className="card-body">
                                                {feedback.FEEDBACK ? (<div>
                                                    <p>Feedback from {feedback.PROVIDERID}</p><p>{feedback.FEEDBACK}</p>
                                                
                                                </div>) : (<div className="lowpreority">yet to recevie feedback from {feedback.PROVIDERID}</div>)}
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
                    </UserdetailWrapper>
                )
            }}
            </FeedbackConsumer>
            );
    }
}
const UserdetailWrapper = styled.div`
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
.alert {
  width:50%;
}
.naveleContainer{
    width:25%;
    display:inline-block;
    margin-right: 2%;
}
`; 
export default Userdetail;