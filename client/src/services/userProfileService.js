import Config from '../config';
import FetchService from './fetchService';

const UserProfileService = {
    
    getFeedbackRequestCount : function(userid) {
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('http://localhost:5000/api/feedbackCount','POST', formdata).then(FetchService.handleResponse)
    },
    getActiveUsersCount : function() {
        let formdata = {}
        return FetchService.fetchDetails('http://localhost:5000/api/userCount','POST', formdata).then(FetchService.handleResponse)
    },
    getAllActiveUsers : function(){
        let formdata = {}
        return FetchService.fetchDetails('http://localhost:5000/api/getAllUsers','POST', formdata).then(FetchService.handleResponse)
    },
    getCurrentUserDetail : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('http://localhost:5000/api/user','POST', formdata).then(FetchService.handleResponse)
    },
    getCurrentUserFeedback : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('http://localhost:5000/api/feedback','POST', formdata).then(FetchService.handleResponse)
    },
    getRequestedFeedback : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('http://localhost:5000/api/pendingfeedback','POST', formdata).then(FetchService.handleResponse)
    }
}

export default UserProfileService; 