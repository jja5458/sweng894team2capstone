const AWS = require('aws-sdk');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const comprehend = new AWS.Comprehend({region: 'us-east-1'});  // Change region if different

// Configure S3
const s3 = new AWS.S3();
const bucketName = 'resume-upload-bucket-sweng894';
const textBucketFolder = 'converted-texts';

// Setup CSV writer
const csvWriter = createCsvWriter({
    path: 'output/resume_data.csv',
    header: [
        {id: 'filename', title: 'FILENAME'},
        {id: 'skills', title: 'SKILLS'},
        {id: 'education', title: 'EDUCATION'},
        {id: 'experience', title: 'EXPERIENCE'}
    ]
});

async function listTextFiles() {
    const params = { Bucket: bucketName, Prefix: textBucketFolder };
    try {
        const data = await s3.listObjectsV2(params).promise();
        return data.Contents.map(file => file.Key);
    } catch (err) {
        console.error("Error listing S3 objects:", err);
        return [];
    }
}

async function readTextFile(key) {
    const params = { Bucket: bucketName, Key: key };
    try {
        const data = await s3.getObject(params).promise();
        return data.Body.toString('utf-8');
    } catch (err) {
        console.error("Error reading S3 object:", err);
        return '';
    }
}

async function analyzeText(text) {
    const params = {
        LanguageCode: 'en',
        Text: text
    };
    try {
        const entities = await comprehend.detectEntities(params).promise();
        return entities.Entities;
    } catch (err) {
        console.error("Error in Comprehend:", err);
        return [];
    }
}

async function processFiles() {
    const files = await listTextFiles();
    const records = [];

    for (const file of files) {
        const text = await readTextFile(file);
        const entities = await analyzeText(text);
        const record = {
            filename: file,
            skills: entities.filter(e => e.Type === 'SKILLS').map(e => e.Text).join(', '),
            education: entities.filter(e => e.Type === 'EDUCATION').map(e => e.Text).join(', '),
            experience: entities.filter(e => e.Type === 'EXPERIENCE').map(e => e.Text).join(', ')
        };
        records.push(record);
    }

    await csvWriter.writeRecords(records);
    console.log("Data written to CSV successfully.");
}

processFiles();
