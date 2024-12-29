import React, { createContext, ReactNode, useContext, useState } from 'react';

type CountContextType = {
  count: number;
  increment: () => void;
};

const CountContext = createContext<CountContextType | undefined>(undefined);

//create a provider component

const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <CountContext.Provider value={{ count, increment }}>{children}</CountContext.Provider>
  );
};

//create a custom hook for using the count context

const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};

export { CountProvider, useCount };