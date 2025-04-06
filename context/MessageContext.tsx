'use client';

import React, { createContext, useState, useContext } from 'react';

const MessageContext = createContext<{
  message: string;
  setMessage: (msg: string) => void;
} | null>(null);

export const MessageProvider = ({ children }: { children: React.ReactNode }) => {
  const [message, setMessage] = useState('');

  return (
    <MessageContext.Provider value={{ message, setMessage }}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error('useMessage must be used within a MessageProvider');
  }
  return context;
};