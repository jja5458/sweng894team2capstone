import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <ul>
                <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/upload" activeClassName="active">Upload Resume</NavLink></li>
                <li><NavLink to="/dashboard" activeClassName="active">Dashboard</NavLink></li>
                <li><NavLink to="/account" activeClassName="active">User Account</NavLink></li>
                <li><NavLink to="/logout" activeClassName="active">Logout</NavLink></li>
            </ul>
        </div>
    );
}

export default Sidebar;
