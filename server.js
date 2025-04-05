require('dotenv').config();
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// Debug: Log the API key (first few characters)
const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//const apiKey = "AIzaSyBMonOv3q3Lu8Mt9hJW90n6BIOXB64msJY"
console.log('API Key starts with:', apiKey ? apiKey.substring(0, 8) + '...' : 'undefined');

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(apiKey);

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('chat message', async (message) => {
    try {
      console.log('Received message:', message);
      
      // Use the real Gemini API
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      console.log('Using model: gemini-2.0-flash');
      // Generate response
      const result = await model.generateContent(`${message}
        
        
        convert this into SQL query, if you cannot return a SQL query, return None
        `);
      const response = await result.response;
      const SQLText = response.text();
      const text = "Here's what I found (look at the left side of the screen)";
      
      console.log('Generated SQL Response:', SQLText);
      
      // Send response back to client
      socket.emit('chat response', text);

    } catch (error) {
      console.error('Error details:', error);
      socket.emit('chat error', error.message);
    }
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 