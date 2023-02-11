import React, { useState } from "react";

//store
export const store = React.createContext({
  addBudget: [],
  setAddBudget: () => {},
  editBudget: false,
  setEditBudget: () => {},
  budget: 2000,
  setBudget: () => {},
  remaining: 2000,
  setRemaining: () => {},
  spent: 0,
  setSpent: () => {},
});

// provider
const ContextProvider = ({ children }) => {
  const [addBudget, setAddBudget] = useState([]);
  const [editBudget, setEditBudget] = useState(false);
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);

  return (
    <store.Provider
      value={{
        addBudget,
        setAddBudget,
        editBudget,
        setEditBudget,
        budget,
        setBudget,
        remaining,
        setRemaining,
        spent,
        setSpent,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextProvider;
