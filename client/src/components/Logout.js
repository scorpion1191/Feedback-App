import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Navbar from './Navbar';

class Logout extends Component {
    state = {  }
    render() { 
        return ( 
            <LogoutWrapper>
            <div className="row justify-content-center">
                <div className="card col-sm-12 col-md-4">
                                <article className="card-body">
	                                <h4 className="card-title text-center mb-4 mt-1">Successfully Loged out of the current Session</h4>
                                    <hr />
                                    <p className="text-center">
                                    <Link to="/">
                                    Redirect to Login Page
                                    </Link>
                                    </p>
                                </article>
                </div> 
            </div>
            </LogoutWrapper>
         );
    }
}

const LogoutWrapper = styled.div`
.row{
    margin:0px;
    margin-top: 10%;
}
`;
 
export default Logout;