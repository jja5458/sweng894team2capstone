import React from 'react';

const UserAccountPage = () => {
    // Dummy user data
    const userData = {
        username: "AmandaSmith",
        password: "password123" // Displaying passwords in UI is a bad practice!
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>User Account Details</h1>
            <p><strong>Username:</strong> {userData.username}</p>
            <p><strong>Password:</strong> {userData.password}</p>
        </div>
    );
};

export default UserAccountPage;
