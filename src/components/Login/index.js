import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'; // Assuming you have a CSS file for styling
import Button from '../shared/Button';

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // if (username === 'admin' && password === '1') {
        //     navigate('/');
        // }
    }

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
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text"
                                        placeholder="Enter Username ..."
                                        id="username"
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="password">Password</label>
                                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter Password ..." id="password" />
                                </div>
                                <div className="d-flex tcl-jc-between tcl-ais-center">
                                    <Button onClick={handleSubmit} name="Submit" type="primary" size="small" />
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

// react redux toolkit