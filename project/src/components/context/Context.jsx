import React, { useState } from "react";

//store
export const store = React.createContext({
  addBudget: [],
  setAddBudget: () => {},
});

// provider
const ContextProvider = ({ children }) => {
  const [addBudget, setAddBudget] = useState([]);

  return (
    <store.Provider value={{ addBudget, setAddBudget }}>
      {children}
    </store.Provider>
  );
};

export default ContextProvider;
