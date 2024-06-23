import React, { useState } from 'react';
import Sidebar from './Sidebar';  // Import the Sidebar component

function UserAccount() {
    const [username, setUsername] = useState('Amanda.Smith');
    const [password, setPassword] = useState('');

    const handleSaveChanges = () => {
        console.log("Saving account details");
    };

    return (
        <div className="user-account-container">
            <Sidebar />
            <div className="user-account-form">
                <h2>User Account</h2>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button onClick={handleSaveChanges}>Save changes</button>
            </div>
        </div>
    );
}

export default UserAccount;
