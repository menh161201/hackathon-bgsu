'use client';

import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

if (!apiKey) {
  console.error('Missing GOOGLE_GEMINI_API_KEY environment variable');
}

const genAI = new GoogleGenerativeAI(apiKey || '');
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

export async function generateResponse(prompt: string) {
  if (!apiKey) {
    throw new Error('Gemini API key is not configured. Please add it to your .env.local file.');
  }

  try {
    const result = await model.generateContent(`${prompt}
        
        
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
    return response.text();
  } catch (error) {
    console.error('Error generating response:', error);
    throw error;
  }
} 