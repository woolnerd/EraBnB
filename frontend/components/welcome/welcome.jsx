import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = ({ currentUser, logout}) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to="/login">Login</Link>
            <br />
            <Link to="/signup">Sign up</Link>
        </nav>
    );

    const welcomeUser = () => (
        <section className="header-section">
            <h2 className="header-name">Hi, {currentUser.email}!</h2>
            <button className="header-btn" onClick={logout}>Log Out</button>
        </section> 
    );
    return !currentUser ? sessionLinks() : welcomeUser();
};



export default Welcome;