import { useContext } from "react";
import { store } from "../context/Context";
import Expense from "../expense/Expense";
import Input from "../input/Input";
import "./../../assets/styles/expenses.css";

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
    <div className="expenses-main">
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
    </div>
  );
}

export default Expenses;
