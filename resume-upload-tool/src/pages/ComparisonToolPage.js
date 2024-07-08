import React from 'react';
import './UploadResumePage.css';

const ComparisonToolPage = () => {
    return (
        <div style={{ display: 'flex', padding: '20px' }}>
            <div style={{ width: '20%', borderRight: '1px solid #ccc', padding: '10px' }}>
                <h2>Resume Upload Tool</h2>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/comparison-tool">Comparison Tool</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                    <li><a href="/user-account">User Account</a></li>
                    <li><a href="/logout">Logout</a></li>
                </ul>
            </div>
            <div style={{ width: '80%', padding: '20px' }}>
                <h1>Comparison Results</h1>
                <div>
                    <h2>Job Description: Software Engineer</h2>
                    <ul>
                        <li>Required Skills: Python, JavaScript, SQL</li>
                        <li>Years of Experience: Minimum 3 years</li>
                        <li>Educational Qualifications: Bachelor's degree in Computer Science or related field</li>
                    </ul>
                </div>
                <div>
                    <h2>Candidate: John Doe</h2>
                    <ul>
                        <li><a href="/view-resume">View Resume</a></li>
                    </ul>
                </div>
                <div>
                    <h2>Skills Match:</h2>
                    <ul>
                        <li>Python: &#x2714; Found (4 years of experience)</li>
                        <li>JavaScript: &#x2714; Found (5 years of experience)</li>
                        <li>SQL: &#x2716; Not found</li>
                    </ul>
                </div>
                <div>
                    <h2>Experience:</h2>
                    <ul>
                        <li>Total Relevant Experience: 5 years</li>
                        <ul>
                            <li>Python Development: 4 years</li>
                            <li>JavaScript Development: 5 years</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <h2>Education:</h2>
                    <ul>
                        <li>Highest Qualification Found: Bachelor's degree in Computer Science</li>
                        <ul>
                            <li>Institution: University of Example</li>
                            <li>Graduation Year: 2018</li>
                        </ul>
                    </ul>
                </div>
                <div>
                    <h2>Summary:</h2>
                    <ul>
                        <li>Skills Match: 2 out of 3 required skills matched.</li>
                        <li>Experience Level: Meets required experience.</li>
                        <li>Educational Qualification: Meets required educational qualification.</li>
                    </ul>
                </div>
                <div>
                    <h2>Analysis:</h2>
                    <ul>
                        <li>Recommendation: Consider for Interview</li>
                        <li>Ranking: 80% candidate match</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ComparisonToolPage;
