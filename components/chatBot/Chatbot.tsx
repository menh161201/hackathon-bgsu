"use client";

import React, { useState, useEffect, useRef } from 'react';
import { io, Socket } from 'socket.io-client';
import './Chatbot.css';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

interface ChatbotProps {
  apiKey?: string;
  serverUrl?: string;
  initialMessage?: string;
  title?: string;
  placeholder?: string;
  theme?: 'light' | 'dark';
  height?: string;
  width?: string;
}

const Chatbot: React.FC<ChatbotProps> = ({
  apiKey,
  serverUrl = 'http://localhost:3001',
  initialMessage = "Hello! I'm your AI assistant. Please ask me what kind of places you are looking for, and I will do my best to help you find them.",
  title = "Chatbot",
  placeholder = "Type your message here...",
  theme = 'light',
  height = '500px',
  width = '100%'
}) => {
  const [messages, setMessages] = useState<Message[]>([
    { text: initialMessage, sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [socket, setSocket] = useState<Socket | null>(null);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Connect to Socket.io server
  useEffect(() => {
    console.log('Connecting to server at:', serverUrl);
    const newSocket = io(serverUrl);
    setSocket(newSocket);

    // Set up event listeners
    newSocket.on('connect', () => {
      console.log('Connected to server successfully');
    });

    newSocket.on('connect_error', (error) => {
      console.error('Connection error:', error);
      setError(`Connection error: ${error.message}`);
    });

    newSocket.on('chat response', (response: string) => {
      console.log('Received response:', response);
      setIsTyping(false);
      setMessages(prev => [...prev, { text: response, sender: 'bot' }]);
    });

    newSocket.on('chat error', (errorMsg: string) => {
      console.error('Chat error:', errorMsg);
      setIsTyping(false);
      setError(errorMsg);
      setMessages(prev => [...prev, { text: `Error: ${errorMsg}`, sender: 'bot' }]);
    });

    // Clean up on unmount
    return () => {
      console.log('Disconnecting from server');
      newSocket.disconnect();
    };
  }, [serverUrl]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || !socket) return;

    // Add user message to chat
    setMessages(prev => [...prev, { text: inputValue, sender: 'user' }]);
    
    // Clear input
    setInputValue('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Send message to server
    socket.emit('chat message', inputValue);
  };

  return (
    <div 
      className={`gemini-chatbot ${theme}`} 
      style={{ height, width }}
    >
      {/* <div className="chat-header">
        <h1><i className="fas fa-robot"></i> {title}</h1>
      </div> */}
      
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            <div className="message-content">
              {message.text}
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="message bot typing-indicator">
            <div className="message-content">
              Typing<span>.</span><span>.</span><span>.</span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <div className="chat-input-container">
        <textarea
          ref={textareaRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          rows={1}
          disabled={isTyping}
        />
        <button 
          onClick={handleSendMessage} 
          disabled={!inputValue.trim() || isTyping}
          className="send-button"
        > 
          <i className="fas fa-paper-plane"></i>
          <span className="button-text">Send</span>
        </button>
      </div>
    </div>
  );
};

export default Chatbot; 