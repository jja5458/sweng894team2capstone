import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import UploadResumePage from './pages/UploadResumePage';
import UserAccountPage from './pages/UserAccountPage';
import Login from './components/Login';  // Ensure this path is correct
import LogoutButton from './components/LogoutButton';  // Make sure to import the LogoutButton
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track login status

    const handleLogin = (status) => {
        setIsLoggedIn(status);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);  // Update state to reflect user is not logged in
    };

    return (
        <Router>
            <div className="App">
                {/* Conditionally render header and possibly logout button if logged in */}
                {isLoggedIn && (
                    <>
                        <Header />
                        <LogoutButton onLogout={handleLogout} />
                    </>
                )}
                <Routes>
                    <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate replace to="/login" />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                    <Route path="/upload-resume" element={isLoggedIn ? <UploadResumePage /> : <Navigate replace to="/login" />} />
                    <Route path="/user-account" element={isLoggedIn ? <UserAccountPage /> : <Navigate replace to="/login" />} />
                    <Route path="/logout" element={<Navigate replace to="/login" />} /> {/* Redirect to login on logout */}
                </Routes>
                {isLoggedIn && <Footer />}
            </div>
        </Router>
    );
}

export default App;
