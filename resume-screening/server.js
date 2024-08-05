const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

let highPriorityCriteria = ["JavaScript", "React", "Node.js"];
let uploadedResumes = [];

app.post('/upload-resume', (req, res) => {
  const resume = req.body;
  uploadedResumes.push(resume);
  checkHighPriorityCriteria(resume);
  res.status(200).send('Resume uploaded successfully');
});

const checkHighPriorityCriteria = (resume) => {
  const matches = highPriorityCriteria.every(criterion => resume.skills.includes(criterion));
  if (matches) {
    triggerNotification(resume);
  }
};

const triggerNotification = (resume) => {
  io.emit('notification', `High-priority resume uploaded: ${resume.name}`);
};

io.on('connection', (socket) => {
  console.log('New client connected');
  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
