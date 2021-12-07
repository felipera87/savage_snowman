import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [snowman, setSnowman] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        snowman,
        setSnowman,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

function useGlobalData() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobalData must be used within a GlobalProvider');
  }

  return context;
}

export { GlobalProvider, useGlobalData };
