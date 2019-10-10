import React, { Component } from 'react';
import AuthenticationService from './services/authenticationService';
import FetchServices from './services/fetchService';
import UserProfileService from './services/userProfileService';

const FeedbackContext = React.createContext();
const defaultState = {
    isAuthenticated: false,
    errorMsg:"",
    isAdmin : false,
    userName : "",
    userId : "",
    password : "",
    xTocken  : "",
    isloading : false,
    activeUserCount : 0,
    activeFeedbackRequestCount : 0,
    usersList : [],
    currentUser : "",
    mode : "View",
    currentUserDetail:{FIRSTNAME:"",LASTNAME:"",EMAIL:"",DOB:"",ADDRESS:""},
    currentUserFeedback:[],
    requestedUserFeedback:[]
}
class FeedbackProvider extends Component {
    state = defaultState

    authenticate = (cb) => {
        this.setState({
            isloading : true
        });
        AuthenticationService.login(this.state.userName,this.state.password).then((response)=>{
            if(response && !response["error"]){
                let isAdmin = (response.user.usertype == "ADMIN") ? true : false;
                FetchServices.setAccessTocket(response.token);
                this.setState(()=>{
                    return { 
                        isAuthenticated : true,
                        userName : response.user.username,
                        password : response.user.password,
                        userId   : response.user.userid,
                        xTocken  : response.token,
                        isAdmin  : isAdmin,
                        isloading: false 
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
            if(this.state.isAuthenticated){
                setTimeout(cb, 100);
            }
        });
    }

    getActiveUserCount = () =>{
        UserProfileService.getActiveUsersCount().then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        activeUserCount : response.count
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    getActiveFeedbackRequestCount = () =>{
        UserProfileService.getFeedbackRequestCount(this.state.userId).then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        activeFeedbackRequestCount : response.count
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    getAllActiveUsers = () =>{
        UserProfileService.getAllActiveUsers().then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        usersList : response.users
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    getCurrentUserDetail = () =>{
        UserProfileService.getCurrentUserDetail(this.state.currentUser).then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        currentUserDetail : response.userdetail
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    getCurrentUserFeedback = () =>{
        UserProfileService.getCurrentUserFeedback(this.state.currentUser).then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        currentUserFeedback : response.feedback
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    getRequestedFeedback = () =>{
        UserProfileService.getRequestedFeedback(this.state.userId).then((response)=>{
            if(response && !response["error"]){
                this.setState(()=>{
                    return { 
                        requestedUserFeedback : response.feedback
                    };
                });
            }else{
                this.setState(()=>{
                    return { errorMsg : response["msg"] };
                });
            }
        });
    }

    signout = (cb) => {
        FetchServices.setAccessTocket("");
        this.setState(()=>{
            return defaultState;
        });
        setTimeout(cb, 100);
    }

    setCurrentUser = (cb,data) => {
        this.setState(()=>{
            return { 
                currentUser : data.currentUser,
                mode : data.mode 
            };
        });
        setTimeout(cb, 100);
    }

    changeInputValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    getFormData = (e,datakey) => {
        e.preventDefault();
        if(datakey){

        }
    }

    fetchWrapper = (method) =>{
        this.setState({
            isloading : true
        });
        method.then((response)=>{
            this.setState({
                isloading : false
            });
            return response
        });
    }

    clearError = () => {
        this.setState(()=>{
            return { errorMsg: "" }
        });
    }

    render() { 
        return ( 
            <FeedbackContext.Provider value={{
                ...this.state,
                authenticate : this.authenticate,
                signout : this.signout,
                setCurrentUser:this.setCurrentUser,
                clearError : this.clearError,
                changeInputValue : this.changeInputValue,
                getActiveUserCount : this.getActiveUserCount,
                getActiveFeedbackRequestCount: this.getActiveFeedbackRequestCount,
                getAllActiveUsers:this.getAllActiveUsers,
                getCurrentUserFeedback:this.getCurrentUserFeedback,
                getCurrentUserDetail:this.getCurrentUserDetail,
                getRequestedFeedback:this.getRequestedFeedback,
                getFormData:this.getFormData
                }}
            >
                {this.props.children}
            </FeedbackContext.Provider>
         );
    }
}
 
const FeedbackConsumer = FeedbackContext.Consumer;

export { FeedbackProvider, FeedbackConsumer, FeedbackContext};