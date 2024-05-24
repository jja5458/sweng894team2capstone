import AWS from 'aws-sdk';

// Configure the AWS region and credentials
AWS.config.update({
  region: 'us-east-1', // Replace with your AWS region
  accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
});

const s3 = new AWS.S3();

export default s3;
