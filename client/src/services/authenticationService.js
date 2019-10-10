import Config from '../config';
import FetchService from './fetchService';

const AuthenticationService = {
    
    login : function(username, password) {
        let formdata = {
            username : username,
            password : password
        }
        return FetchService.fetchDetails('http://anonymousblock.herokuapp.com/api/login','POST', formdata).then(FetchService.handleResponse)
    }
}

export default AuthenticationService; 