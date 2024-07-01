import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Welcome to the Resume Upload Tool</h1>
            <button onClick={() => navigate('/upload-resume')} style={{ margin: '20px', padding: '10px' }}>
                Go to Upload Resume Page
            </button>
            <button onClick={() => navigate('/user-account')} style={{ margin: '20px', padding: '10px' }}>
                Go to User Account Page
            </button>
        </div>
    );
};

export default HomePage;
