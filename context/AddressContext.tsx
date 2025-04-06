'use client'

import React, { createContext, useState, useContext } from "react";

type AddressContextType = {
  addresses: string[];
  setAddresses: (addresses: string[]) => void;
};

const AddressContext = createContext<AddressContextType | undefined>(undefined);

export const AddressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [addresses, setAddresses] = useState<string[]>([]);

  return (
    <AddressContext.Provider value={{ addresses, setAddresses }}>
      {children}
    </AddressContext.Provider>
  );
};

export const useAddressContext = () => {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within an AddressProvider");
  }
  return context;
};