// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();
// const authRoutes = require('./routes/authRoutes');
// app.use('/api/auth', authRoutes);

// app.use(cors());
// app.use(express.json());

// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('MongoDB connected'))
//   .catch((err) => console.log('Error connecting to MongoDB:', err));

// app.listen(5000, () => {
//   console.log('Server running on port 5000');
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const http = require('http'); // Import the http module
const { Server } = require('socket.io'); // Import Socket.IO

dotenv.config();

const app = express();
const authRoutes = require('./routes/authRoutes');

// Middleware
app.use('/api/auth', authRoutes);
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));

// HTTP and Socket.IO Setup
const server = http.createServer(app); // Create the HTTP server
const io = new Server(server, {
  cors: {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'] // Allow these HTTP methods
  }
});

// Socket.IO Logic
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  // Handle incoming messages
  socket.on('sendMessage', (message) => {
    console.log('Received message:', message);
    io.emit('receiveMessage', message); // Broadcast message to all connected clients
  });

  // Handle disconnection
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the Server
server.listen(5000, () => {
  console.log('Server running on port 5000');
});
