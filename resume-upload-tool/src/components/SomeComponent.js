// SomeComponent.js
import React from 'react';
import { useAuth } from './AuthContext';
import LogoutButton from './LogoutButton';

const SomeComponent = () => {
    const { logout } = useAuth();

    return (
        <div>
            {/* Other components */}
            <LogoutButton onLogout={logout} />
        </div>
    );
};

export default SomeComponent;
