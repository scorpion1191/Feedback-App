import Config from '../config';
import FetchService from './fetchService';

const UserProfileService = {
    
    getFeedbackRequestCount : function(userid) {
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('/api/feedbackCount','POST', formdata).then(FetchService.handleResponse)
    },
    getActiveUsersCount : function() {
        let formdata = {}
        return FetchService.fetchDetails('/api/userCount','POST', formdata).then(FetchService.handleResponse)
    },
    getAllActiveUsers : function(){
        let formdata = {}
        return FetchService.fetchDetails('/api/getAllUsers','POST', formdata).then(FetchService.handleResponse)
    },
    getCurrentUserDetail : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('/api/user','POST', formdata).then(FetchService.handleResponse)
    },
    getCurrentUserFeedback : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('/api/feedback','POST', formdata).then(FetchService.handleResponse)
    },
    getRequestedFeedback : function(userid){
        let formdata = {
            userid : userid
        }
        return FetchService.fetchDetails('/api/pendingfeedback','POST', formdata).then(FetchService.handleResponse)
    }
}

export default UserProfileService; 