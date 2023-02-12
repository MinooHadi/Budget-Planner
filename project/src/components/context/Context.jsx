import React, { useState } from "react";

//store
export const store = React.createContext({
  addExpense: [],
  setAddExpense: () => {},
  editBudget: false,
  setEditBudget: () => {},
  budget: 2000,
  setBudget: () => {},
  remaining: 2000,
  setRemaining: () => {},
  spent: 0,
  setSpent: () => {},
  deleting: undefined,
  setDeleting: () => {},
  searchResult: [],
  setSearchResult: () => {},
  isSearching: false,
  setIsSearching: () => {},
});

// provider
const ContextProvider = ({ children }) => {
  const [addExpense, setAddExpense] = useState([]);
  const [editBudget, setEditBudget] = useState(false);
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);
  const [deleting, setDeleting] = useState(undefined);
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <store.Provider
      value={{
        addExpense,
        setAddExpense,
        editBudget,
        setEditBudget,
        budget,
        setBudget,
        remaining,
        setRemaining,
        spent,
        setSpent,
        deleting,
        setDeleting,
        searchResult,
        setSearchResult,
        isSearching,
        setIsSearching,
      }}
    >
      {children}
    </store.Provider>
  );
};

export default ContextProvider;
