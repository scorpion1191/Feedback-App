import React,{ Component, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navelement from '../Navelement';
import styled from "styled-components";
import { FeedbackConsumer, FeedbackContext} from '../../context'
import Error from '../Error';

class Dashboard extends Component {
  static contextType = FeedbackContext;

  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(this.context.isAdmin){
      this.context.getActiveUserCount();
    }
    this.context.getActiveFeedbackRequestCount();
    console.log(this.context);
  }

  render(){
    return (
        <FeedbackConsumer>
            {(value)=>{
                return (
                  <DashboardWrapper>
                    <div className="errorContainer  row justify-content-center">
                    { value.errorMsg ? (<Error />) : (" ") }
                    </div>
                    <div className = "card-deck justify-content-center">
                    {
                      value.isAdmin ? (
                              <div className="card col-sm-12 col-md-4">
                                              <article className="card-body">
                                                <h4 className="card-title text-center mb-4 mt-1">{value.activeUserCount}</h4>
                                                  <hr />
                                                  <p className="text-center">
                                                   Active Users
                                                  </p>
                                                  <Navelement destination="/userlist"  type="Button" value="View All"/>
                                              </article>
                              </div> 
                      ):" "
                    }
                    <div className="card col-sm-12 col-md-4">
                                              <article className="card-body">
                                                <h4 className="card-title text-center mb-4 mt-1">{value.activeFeedbackRequestCount}</h4>
                                                  <hr />
                                                  <p className="text-center">
                                                   Feedback Request
                                                  </p>
                                                  {(value.activeFeedbackRequestCount > 0) ? ( <Navelement destination="/feedback" type="Button" value="View All"/>):""}
                                              </article>
                              </div> 
                    </div>
                    </DashboardWrapper>
                )
            }}
        </FeedbackConsumer>
    );
  }
}

// Dashboard.contextType = FeedbackContext;

const DashboardWrapper = styled.div`
.card-deck{
    margin:0px;
    margin-top: 10%;
}
.card-title{
  font-size : 4rem;
}
.errorContainer{
  margin: 0;
  margin-top: 2%;
}
.alert {
  width:50%;
}
`;
export default Dashboard;
