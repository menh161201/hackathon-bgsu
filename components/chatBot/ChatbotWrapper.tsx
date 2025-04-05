"use client";

import ChatBot from './Chatbot';

export default function ChatBotWrapper() {
  return <ChatBot apiKey={process.env.NEXT_PUBLIC_GEMINI_API_KEY} height="400px" />;
}
