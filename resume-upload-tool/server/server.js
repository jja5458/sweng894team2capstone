// Express Server
const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3001; // Different from your React app's port

// Enable All CORS Requests
app.use(cors());

// Configure storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/originals'); // Save original files here
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

// POST endpoint for uploading files
app.post('/upload', upload.single('file'), (req, res) => {
  // Additional processing like converting text files could be done here
  fs.copyFileSync(req.file.path, path.join('uploads/converted-texts', req.file.originalname));
  res.send('File uploaded and processed successfully.');
});

// Ensure upload directories exist
const uploadDirs = ['uploads/originals', 'uploads/converted-texts'];
uploadDirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

const cors = require('cors');
app.use(cors());  // This will allow all CORS requests

// Specific configuration if needed
app.use(cors({
  origin: 'http://localhost:3000'
}));


const formData = new FormData();
formData.append('file', selectedFile);  // 'file' should match the key expected on the server


