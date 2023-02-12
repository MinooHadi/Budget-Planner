export default function reducer(state, action) {
  switch (action.type) {
    case "addExpense":
      return {
        ...state,
        addExpense: [...state.addExpense, action.payload.newExpense],
        spent: state.spent + action.payload.newSpent,
        remaining: state.remaining - action.payload.newSpent,
      };
    case "SEARCH-RESULT":
      return {
        ...state,
        searchResult: action.payload,
      };
    case "FOCUSED":
      return {
        ...state,
        isSearching: action.payload.isSearching,
        searchResult: action.payload.searchResult,
      };
    case "BLURED":
      return {
        ...state,
        isSearching: action.payload,
      };
    case "EDIT-BUDGET":
      return {
        ...state,
        editBudget: action.payload,
      };
    case "SAVE-BUDGET":
      return {
        ...state,
        editBudget: action.payload.editBudget,
        budget: action.payload.budget,
        remaining: action.payload.budget - state.spent,
      };
    case "DELETING":
      return {
        ...state,
        deleting: action.payload,
      };
    case "ITEM-DELETED":
      return {
        ...state,
        addExpense: action.payload.addExpense,
        deleting: action.payload.deleting,
        spent: action.payload.spent,
        remaining: action.payload.remaining,
      };
    case "CANCEL-MODAL":
      return {
        ...state,
        deleting: action.payload,
      };
  }
}
