// Create a new file: server.js

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(bodyParser.json());

// Define high-priority criteria
const highPriorityCriteria = ['JavaScript', 'React', 'Node.js'];

// Endpoint to upload resume
app.post('/upload-resume', (req, res) => {
    const resume = req.body.resume;
    const matches = highPriorityCriteria.every(criteria => resume.includes(criteria));

    if (matches) {
        io.emit('notification', { message: 'A resume matching high-priority criteria has been uploaded.' });
        res.status(200).send({ message: 'Notification sent.' });
    } else {
        res.status(200).send({ message: 'No match found.' });
    }
});

io.on('connection', (socket) => {
    console.log('A user connected');
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
