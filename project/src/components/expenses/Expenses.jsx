import { useContext } from "react";
import styled from "styled-components";
import { store } from "../context/Context";
import Expense from "../expense/Expense";
import Input from "../input/Input";

//! styled component ........................................................................................................................
const ExpensesMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
`;

//? Expense component ........................................................................................................................
function Expenses() {
  const { state, dispatch } = useContext(store);

  function searchBudget(e) {
    let results = state.addExpense.filter((item) =>
      item.title.includes(e.target.value)
    );
    dispatch({
      type: "SEARCH-RESULT",
      payload: results,
    });
  }

  return (
    <ExpensesMain className="expenses-main">
      <h3>Expenses</h3>
      <Input
        type="search"
        placeholder="Type to search ..."
        style={{ marginTop: "-30px", width: "100%" }}
        onChange={searchBudget}
        onFocus={() => {
          dispatch({
            type: "FOCUSED",
            payload: {
              isSearching: true,
              searchResult: state.addExpense,
            },
          });
        }}
        onBlur={(e) => {
          dispatch({
            type: "BLURED",
            payload: false,
          });
          e.target.value = "";
        }}
      />
      <div>
        {state.isSearching
          ? state.searchResult.map((item, i) => (
              <Expense
                key={i}
                id={i}
                title={item.title}
                expense={item.expense}
              />
            ))
          : state.addExpense.map((item, i) => (
              <Expense
                key={i}
                id={i}
                title={item.title}
                expense={item.expense}
              />
            ))}
      </div>
    </ExpensesMain>
  );
}

export default Expenses;
