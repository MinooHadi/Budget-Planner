import { useContext } from "react";
import { store } from "../context/Context";
import Expense from "../expense/Expense";
import Input from "../input/Input";
import "./../../assets/styles/expenses.css";

function Expenses() {
  const {
    addBudget,
    setAddBudget,
    searchResult,
    setSearchResult,
    isSearching,
    setIsSearching,
  } = useContext(store);

  function searchBudget(e) {
    let results = addBudget.filter((item) =>
      item.title.includes(e.target.value)
    );
    setSearchResult(results);
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
          setIsSearching(true);
          setSearchResult(addBudget);
        }}
        onBlur={(e) => {
          setIsSearching(false);
          e.target.value = ""
        }}
      />
      <div>
        {isSearching
          ? searchResult.map((item, i) => (
              <Expense
                key={i}
                id={i}
                title={item.title}
                expense={item.expense}
              />
            ))
          : addBudget.map((item, i) => (
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
