require('dotenv').config();
const { GoogleGenerativeAI } = require('@google/generative-ai');

async function listModels() {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    console.log('API Key starts with:', apiKey ? apiKey.substring(0, 8) + '...' : 'undefined');
    
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // List available models
    const models = await genAI.listModels();
    console.log('Available models:');
    models.forEach(model => {
      console.log(`- ${model.name}`);
    });
  } catch (error) {
    console.error('Error listing models:', error);
  }
}

listModels(); 