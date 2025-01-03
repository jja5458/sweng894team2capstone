# Automated Resume Screening Tool

## Project Overview

The Automated Resume Screening Tool is a web application designed to assist HR departments by automatically screening resumes and categorizing them based on skills and experience. The application leverages AWS services for storage, deployment, and natural language processing.

## Features

- **File Uploads**: Users can upload resumes in multiple formats including PDF.
- **AWS S3 Integration**: Resumes are stored securely in AWS S3.
- **NLP with AWS Comprehend**: Extracts and processes information from resumes to identify key skills, educational background, and professional experience.
- **Continuous Deployment with AWS Amplify**: The application is deployed and continuously updated using AWS Amplify.

## Repository

The source code for this project is available on GitHub:
[Automated Resume Screening Tool Repository](https://github.com/jja5458/sweng894team2capstone)

## Setup Instructions

### Prerequisites

- Node.js and npm installed on your development machine.
- AWS account with necessary permissions for S3, Amplify, and Comprehend.
- Git installed on your development machine.

### Local Development

1. **Clone the Repository**

   ```bash
   git clone https://github.com/jja5458/sweng894team2capstone.git
   cd sweng894team2capstone
   
2. Install Dependencies
- npm install

3. Create an .env File
- Create a .env file in the root directory and add your AWS credentials:
- REACT_APP_AWS_ACCESS_KEY_ID=your_access_key_id
- REACT_APP_AWS_SECRET_ACCESS_KEY=your_secret_access_key

4. Start the Development Server
- npm start

### Deployment
Deploy Using AWS Amplify
1. Log in to the AWS Management Console.
2. Navigate to AWS Amplify.
3. Create a new Amplify app and connect your GitHub repository.
4. Configure the build settings using the amplify.yml file located in the root directory.
5. Deploy the application.

### Usage
Accessing the Application
- Once deployed, you can access the application using the provided Amplify URL.
Uploading Resumes
- Use the user interface to upload resumes in PDF, DOCX, or TXT formats.
- The uploaded resumes will be stored in AWS S3 and processed by AWS Comprehend.
