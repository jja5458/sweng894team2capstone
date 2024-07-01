// Express Server
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001; // Ensure this is different from your React app's port

// Enable CORS Requests for React app
app.use(cors({
  origin: 'http://localhost:3000', // Adjust this if your React app is hosted elsewhere
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

// Configure storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/originals'); // Save original files here
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use original file name
  }
});

const upload = multer({ storage });

// POST endpoint for uploading files
app.post('/uploads', upload.single('file'), (req, res) => {
  try {
    // Copy file to converted-texts directory for further processing
    const sourcePath = req.file.path;
    const destPath = path.join('uploads/converted-texts', req.file.originalname);
    fs.copyFileSync(sourcePath, destPath);
    res.send('File uploaded and processed successfully.');
  } catch (error) {
    console.error('Error handling file upload:', error);
    res.status(500).send('Error processing file');
  }
});

// Ensure upload directories exist before server starts
const uploadDirs = ['uploads/originals', 'uploads/converted-texts'];
uploadDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Server start
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
