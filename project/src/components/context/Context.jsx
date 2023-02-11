import React, { useState } from "react";

//store
export const store = React.createContext({
  addBudget: [],
  setAddBudget: () => {},
  editBudget: false,
  setEditBudget: () => {},
  budget: 2000,
  setBudget: () => {}
});

// provider
const ContextProvider = ({ children }) => {
  const [addBudget, setAddBudget] = useState([]);
  const [editBudget, setEditBudget] = useState(false);
  const [budget, setBudget] = useState(2000)

  return (
    <store.Provider
      value={{ addBudget, setAddBudget, editBudget, setEditBudget, budget, setBudget }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextProvider;
