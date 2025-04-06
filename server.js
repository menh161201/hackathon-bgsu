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
        
        
        convert this into prisma quary code and this are the entities (ONLY PRISMA QUARY CODE NO OTHER):
        {
          'name': None,
          'address': None,
          'bathrooms': None,
          'bedrooms': None,
          'price': None,
          'contact': None,
          'amenities': None,
          'image': None,
          'school_distance_mile': None,
          'school_walk_time_minute': None,
          'grocery_distance_mile': None,
          'grocery_walk_time_minute': None,
          'grocery_store': None,
          'grocery_address': None,
          'pharmacy_distance_mile': None,
          'pharmacy_walk_time_minute': None,
          'pharmacy_store': None,
          'pharmacy_address': None,
          'downtown_distance_mile': None,
          'downtown_walk_time_minute': None,
          'shuttle': None,
          'legitimate': None,
          'laundry': None,
          'parking': None,
          'ac': None,
          'pet': None,
          'dishwasher': None,
          'cluster': None
        }
        and here is an example of the prisma quary code:

        const houses = await prisma.house.findMany({
        where: {
          bedrooms: 3,
          parking: true,
          dishwasher: true,
          amenities: {
            has: "1 living room"
          }
        }
      });
        
        `);
      const response = await result.response;
      const prismaText = response.text();
      const ravalPrismaText = prismaText.replace(/^\s*```prisma\s*/, "")
      const ravalPrismaText2 = ravalPrismaText.replace(/```/, "").trim();
      let ravalPrismaText3 = ravalPrismaText2.split('=');
      const text = "Here's what I found (look at the left side of the screen)";

      console.log(ravalPrismaText3[1]);
      
      
      const arr = await eval(`(async () => { return ${quary} })()`);
      

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