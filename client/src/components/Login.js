import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { FeedbackConsumer } from '../context';
import Error from './Error';
import Navelement from './Navelement';
class Login extends Component {
    render() { 
        return ( 
            <LoginWrapper>
            <div className="row justify-content-center">
                <div className="card col-sm-12 col-md-4">
                    <FeedbackConsumer>
                        {(value)=>{
                            return (
                                <article className="card-body">
	                                <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
                                    <hr />
                                    { value.errorMsg ? (<Error />) : (" ") }
                                    <form onSubmit={e => {e.preventDefault();}}>
                                        <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                                            </div>
                                            <input name="" className="form-control" name="userName" value={value.userName}
                                            onChange={e => value.changeInputValue(e) } placeholder="Email or Username" type="text" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                                            </div>
                                            <input className="form-control"  name="password" value={value.password}
                                            onChange={e => value.changeInputValue(e) } placeholder="******" type="password" />
                                        </div>
                                        </div>
                                        <div className="form-group">
                                        <Navelement destination="/dashboard" method={value.authenticate} type="Button" value="Login"/>
                                        </div>
                                        <p className="text-center"><a href="#" className="btn">Forgot password?</a></p>
                                    </form>
                                </article>
                            )
                        }}
                    </FeedbackConsumer>
                </div> 
            </div>
            </LoginWrapper>
         );
    }
}


const LoginWrapper = styled.div`
.row{
    margin:0px;
    margin-top: 10%;
}
`;
export default Login;