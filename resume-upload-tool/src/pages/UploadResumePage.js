import React from 'react';
import FileUpload from '../components/FileUpload';  // Adjust the path as necessary

const UploadResumePage = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Upload Your Resume</h1>
            <FileUpload />  // This is where the FileUpload component is used
        </div>
    );
};

export default UploadResumePage;
