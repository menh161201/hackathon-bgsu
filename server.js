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
          
          
        convert to this format:
          {
              id: number;
              name: string | null;
              address: string | null;
              bathrooms: number | null;
              bedrooms: number | null;
              price: number | null;
              contact: string | null;
              image: string | null;
              schoolDistance: number | null;
              schoolWalkTime: number | null;
              pharmacyDistance: number | null;
              pharmacyWalkTime: number | null;
              downtownDistance: number | null;
              downtownWalkTime: number | null;
              groceryDistance: number | null;
              groceryWalkTime:    number | null;
              legitimate: boolean | null;
              laundry: boolean | null;
              parking: boolean | null;
              ac: boolean | null;
              pet: boolean | null;
              dishwasher: boolean | null;
              shuttle: boolean | null;
              savedBy: {id: string}[] | null;
          }
              example:
              {
              'bedrooms': 3,
              'parking': True,
              'dishwasher': True,
              'bathrooms': None,
              'price': None,
              'water_included': None,
              'trash_included': None,
              'electricity_included': None,
              'laundry': None,
              'ac': None,
              'pet': None,
              'shuttle_available': None,
              'name': None,
              'address': None
              }
          
        });
          
          `);
        const response = await result.response;
        const prismaText = response.text();
    //   const ravalPrismaText = prismaText.replace(/^\s*```prisma\s*/, "")
    //   const ravalPrismaText2 = ravalPrismaText.replace(/```/, "").trim();
    //   let ravalPrismaText3 = ravalPrismaText2.split('=');
    //   const text = "Here's what I found (look at the left side of the screen)";

      console.log(prismaText);
      
      
    //   const arr = await eval(`(async () => { return ${ravalPrismaText3[1]} })()`);
      

    const parsedFilters = JSON.parse(prismaText);

    // Send the parsed filters back to the client
    socket.emit('chat response', parsedFilters);

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