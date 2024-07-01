const fs = require('fs');
const path = require('path');

const extractData = (filePath) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }

        // Define keywords to search in the text
        const skillsKeyword = 'Skills';
        const educationKeyword = 'Education';
        const experienceKeyword = 'Experience';

        // Convert the file content into an array of lines
        const lines = data.split(/\r?\n/);

        // Initialize containers for each section
        let skills = [];
        let education = [];
        let experience = [];
        let currentSection = null;

        lines.forEach(line => {
            // Check if the line contains any of the section keywords
            if (line.includes(skillsKeyword)) {
                currentSection = 'skills';
            } else if (line.includes(educationKeyword)) {
                currentSection = 'education';
            } else if (line.includes(experienceKeyword)) {
                currentSection = 'experience';
            }

            // Add line to the appropriate section based on current context
            if (currentSection === 'skills' && line.trim() !== skillsKeyword) {
                skills.push(line.trim());
            } else if (currentSection === 'education' && line.trim() !== educationKeyword) {
                education.push(line.trim());
            } else if (currentSection === 'experience' && line.trim() !== experienceKeyword) {
                experience.push(line.trim());
            }
        });

        console.log('Skills:', skills.join(', '));
        console.log('Education:', education.join(', '));
        console.log('Experience:', experience.join(', '));
    });
};

// Replace 'resume.txt' with the path to your text file
const filePath = path.join(__dirname, 'resume.txt');
extractData(filePath);
