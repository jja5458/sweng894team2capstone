// src/Notification.js

import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Notification = () => {
    const [notification, setNotification] = useState('');

    useEffect(() => {
        socket.on('notification', (data) => {
            setNotification(data.message);
        });

        return () => {
            socket.off('notification');
        };
    }, []);

    return (
        <div>
            {notification && <div className="notification">{notification}</div>}
        </div>
    );
};

export default Notification;
