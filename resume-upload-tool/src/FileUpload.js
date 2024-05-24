import React, { useState } from 'react';
import s3 from './aws-config'; // Import the configured S3 instance

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB limit

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      alert('File size exceeds the 5 MB limit. Please upload a smaller file.');
      return;
    }
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      alert('Please select a file before uploading');
      return;
    }

    const params = {
      Bucket: 'resume-upload-bucket-sweng894', // Your S3 bucket name
      Key: `resumes/${selectedFile.name}`, // File path in S3 bucket
      Body: selectedFile,
      ContentType: selectedFile.type,
      ACL: 'public-read', // Set appropriate permissions
    };

    try {
      const data = await s3.upload(params).promise();
      console.log('Upload successful:', data);
      alert('File uploaded successfully');
    } catch (err) {
      console.error('Upload error:', err); // Log the error to the console
      alert(`File upload failed: ${err.message}`);
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>
      <input type="file" accept=".pdf" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default FileUpload;
