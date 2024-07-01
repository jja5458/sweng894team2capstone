import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={{backgroundColor: '#f8f8f8', padding: '10px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <h1>Resume Upload Tool</h1>
            <nav>
                <ul style={{listStyle: 'none', padding: 0, display: 'flex', gap: '10px'}}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/upload-resume">Upload Resume</Link></li>
                    <li><Link to="/user-account">User Account</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
