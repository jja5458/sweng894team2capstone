import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Here you would also handle clearing any authentication tokens,
        // cookies, or other local storage items if applicable.
        onLogout(false); // Update the state to indicate the user is logged out.
        navigate('/login'); // Redirect the user to the login page.
    };

    return (
        <button onClick={handleLogout} style={{ padding: '10px 20px', margin: '10px', cursor: 'pointer' }}>
            Logout
        </button>
    );
};

export default LogoutButton;
