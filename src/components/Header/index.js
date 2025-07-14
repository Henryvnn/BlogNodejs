import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header id="header">
            <div className="tcl-container">
                <div className="tcl-row tcl-no-gutters header">
                    <div className="tcl-col-2">
                        {/* Logo */}
                        <div className="header-logo">
                            <Link to="/">
                                <img src="/assets/images/logo.png" alt="Go to homepage" />
                            </Link>
                        </div>
                    </div>

                    <div className="tcl-col-4">
                        {/* Header Search */}
                        <form action="/search.html" method="get">
                            <div className="header-search">
                                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                                    <path d="..." />
                                </svg>
                                <input
                                    className="header-search__input"
                                    type="text"
                                    placeholder="Search articles here ..."
                                    aria-label="Search"
                                    name="query"
                                />
                            </div>
                        </form>
                    </div>

                    <div className="tcl-col-6">
                        {/* Nav */}
                        <div className="header-nav">
                            <ul className="header-nav__lists">
                                <li><Link to="/">Home</Link></li>
                                <li>
                                    <span>Our Team</span>
                                    <ul>
                                        <li><span>Our Team 1</span></li>
                                        <li><span>Our Team 2</span></li>
                                        <li><span>Our Team 3</span></li>
                                    </ul>
                                </li>
                                <li>
                                    <span>Contact</span>
                                    <ul>
                                        <li><span>Contact 1</span></li>
                                        <li><span>Contact 2</span></li>
                                        <li>
                                            <span>Contact 3</span>
                                            <ul>
                                                <li><span>Contact 11</span></li>
                                                <li><span>Contact 12</span></li>
                                                <li><span>Contact 13</span></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>

                            <ul className="header-nav__lists">
                                <li className="user">
                                    <Link to="/login">
                                        <i className="icons ion-person" /> Tài khoản
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
