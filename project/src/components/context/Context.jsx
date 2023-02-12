import React, { useReducer } from "react";
import reducer from "../reducer/Reducer";

//* initial states ........................................................................................................................
const initialState = {
  addExpense: [],
  editBudget: false,
  budget: 2000,
  remaining: 2000,
  spent: 0,
  deleting: undefined,
  searchResult: [],
  isSearching: false,
};

//* store ........................................................................................................................
export const store = React.createContext({
  state: initialState,
  dispatch: (dispatch) => {},
});

//* provider ........................................................................................................................
const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <store.Provider value={{ state, dispatch }}>{children}</store.Provider>
  );
};

export default ContextProvider;
