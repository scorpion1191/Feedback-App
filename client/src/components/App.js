import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Switch , Route, Redirect} from 'react-router-dom';
import Login from './Login'
import Dashboard from './Dashboard/Dashboard'
import Userlist from './Dashboard/admin/Userlist'
import Userdetail from './Dashboard/admin/Userdetail'
import Feedback from './Dashboard/Feedback'
import Default from './Default'
import Logout from './Logout'
import Navbar from './Navbar';
import { FeedbackConsumer } from '../context';
class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Navbar/>
        <FeedbackConsumer>
          {(value)=>{
            return(
              <div>
                {(value.isloading) ? (<div className="spinnerContainer"><div className="spinner-border"></div></div>) : ("")}
                <Switch>
                <Route exact path="/" render={() => {
                  return value.isAuthenticated ? ( <Redirect to="/dashboard"/> ) : ( <Redirect to="/login"/> ) 
                }} />
                <Route exact path="/dashboard" render={() =>{
                  return value.isAuthenticated ? ( <Dashboard/>) : (<Redirect to="/login" />)
                }} />
                <Route exact path="/userlist" render={() =>{
                  return (value.isAuthenticated && value.isAdmin ) ? ( <Userlist />) : (<Redirect to="/dashboard" />)
                }} />
                <Route exact path="/userdetail" render={() =>{
                  return (value.isAuthenticated && value.isAdmin ) ? ( <Userdetail />) : (<Redirect to="/dashboard" />)
                }} />
                <Route exact path="/feedback" render={() =>{
                  return (value.isAuthenticated && value.activeFeedbackRequestCount ) ? ( <Feedback />) : (<Redirect to="/dashboard" />)
                }} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/logout" component={Logout} />
                <Route exact component={Default} />
              </Switch>
              </div>
              
            )
          }}
        </FeedbackConsumer>
      </React.Fragment>
    );
  }
}
export default App;
