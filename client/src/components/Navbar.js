import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import {FeedbackConsumer} from '../context';
import Navelement from './Navelement';
import "bootstrap/dist/css/bootstrap.min.css";

class Navbar extends Component {
    render() { 
        return ( 
            <NavWrapper>
                <nav className="navbar navbar-dark">
                    <Link to="/">
                        <p>FEEDBACK</p>
                    </Link>
                    <FeedbackConsumer>
                        {(value)=>{
                            return value.isAuthenticated ? ( <Navelement destination="/logout" method={value.signout} type="HashTag" value="LOGOUT"/> ) : ""
                        }}
                    </FeedbackConsumer>
                </nav>
            </NavWrapper>
         );
    }
}

const NavWrapper = styled.nav`
    .navbar {
        background : var(--primaryColor);
    }
    p{
        margin:0px;
    }
    a{
        color: var(--whiteColor);  
    }
    a:hover {
        color: var(--whiteColor);
        text-decoration: none;
    }
    div{
        cursor:pointer
        color: var(--whiteColor);
    }
`;
 
export default Navbar;