"use client";
import { createContext, useState } from "react";

// Create the context
export const DataContext = createContext<any>([]);

// Create the provider component
export const DataProvider = ({ children }: { children: any }) => {
  const [data, setData] = useState<any>([]);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
