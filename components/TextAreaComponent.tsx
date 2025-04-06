'use client';

import React from 'react';
import { generateResponse } from '../lib/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatProps {
  messages: Message[];
  isLoading: boolean;
  onSubmit: (formData: FormData) => Promise<void>;
}

export default function TextAreaComponent({ messages, isLoading, onSubmit }: ChatProps) {
  return (
    <div className="h-full flex flex-col bg-gray-50 rounded-lg shadow-lg p-4">
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.length === 0 && (
          <div className="text-center text-gray-500 mt-4">
            Start a conversation by typing a message below.
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg ${
              message.role === 'user'
                ? 'bg-blue-100 ml-auto max-w-[80%]'
                : 'bg-gray-100 mr-auto max-w-[80%]'
            }`}
          >
            <p className="text-sm text-gray-800">{message.content}</p>
          </div>
        ))}
        {isLoading && (
          <div className="bg-gray-100 p-4 rounded-lg mr-auto max-w-[80%]">
            <p className="text-sm text-gray-500">Thinking...</p>
          </div>
        )}
      </div>
      <form action={onSubmit} className="flex gap-2 mt-auto">
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 font-medium"
        >
          Send
        </button>
      </form>
    </div>
  );
} 