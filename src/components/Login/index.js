import React from 'react';
import { Link } from 'react-router-dom';
import './login.css'; // Assuming you have a CSS file for styling


function Login() {
    return (
        <div className="login">
            <div className="spacing" />
            <div className="tcl-container">
                <div className="tcl-row">
                    <div className="tcl-col-12 tcl-col-sm-6 block-center">
                        <h1 className="form-title text-center">Login</h1>
                        <div className="form-login-register">
                            <form>
                                <div className="form-control">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" placeholder="Enter Username ..." id="username" />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" placeholder="Enter Password ..." id="password" />
                                </div>
                                <div className="d-flex tcl-jc-between tcl-ais-center">
                                    <button className="btn btn-primary btn-size-large">Submit</button>
                                    <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="spacing" />
        </div>
    );
}

export default Login;
