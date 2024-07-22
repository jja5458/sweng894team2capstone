import React from 'react';
import './UploadResumePage.css';

const UploadResumePage = () => {
    return (
        <div className="container">
            <div className="sidebar">
                <h2>Resume Upload Tool</h2>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/comparison-tool">Comparison Tool</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/user-account">User Account</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
            <div className="content">
                <h1>Upload Job Description and Resume</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="jobDescription">Job Description</label>
                        <input type="file" id="jobDescription" name="jobDescription" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="resume">Resume</label>
                        <input type="file" id="resume" name="resume" />
                    </div>
                    <button type="submit">Compare</button>
                </form>
            </div>
        </div>
    );
};

export default UploadResumePage;
