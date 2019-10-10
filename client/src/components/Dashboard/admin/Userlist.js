import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FeedbackConsumer, FeedbackContext} from '../../../context'
import Error from '../../Error';
import Navelement from '../../Navelement';

class Userlist extends Component {
    static contextType = FeedbackContext;

    constructor(props){
        super(props);
    }

    componentDidMount() {
        if(this.context.isAdmin){
            this.context.getAllActiveUsers();
        }
    }
    render() { 
        return ( 
            <FeedbackConsumer>
            {(value)=>{
                return (
                    <UserListWrapper>
                        <div className="errorContainer  row justify-content-center">
                            { value.errorMsg ? (<Error />) : (" ") }
                        </div>
                        <div className = "row justify-content-center">
                        <div className="col-sm-12">

                  
                        <div className = "card-columns">
                        {
                            (value.usersList && value.usersList.length) ?
                                (value.usersList.map(users => {
                                  return (
                                    <div key={users.userid} className="card">
                                    <article className="card-body">
                                                <h4 className="card-title text-center mb-4 mt-1">{users.username}</h4>
                                                  <hr />
                                                  <p className="text-left">
                                                   User ID : {users.userid}
                                                  </p>
                                                  <p className="text-left">
                                                   Email : {users.email}
                                                  </p>
                                                  <hr />
                                                   <Navelement destination="/userdetail" method={value.setCurrentUser} mode={{mode:"Edit",currentUser:users.userid}} type="Button" value="Edit"/>
                                                   <Navelement destination="/userdetail" method={value.setCurrentUser} mode={{mode:"View",currentUser:users.userid}} type="Button" value="View"/>
                                              </article>
                                  </div>
                                  );
                                }))
                              :(<div></div>)
                        }
                        </div>
                        </div>
                        </div>
                        
                    </UserListWrapper>
                )
            }}
            </FeedbackConsumer>
            );
    }
}
const UserListWrapper = styled.div`
.row{
    margin:0px;
    margin-top: 5%;
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
export default Userlist;