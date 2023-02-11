import { useContext } from "react";
import { store } from "../context/Context";
import Expense from "../expense/Expense";
import Input from "../input/Input";
import "./../../assets/styles/expenses.css";

function Expenses() {
  const { addBudget, setAddBudget } = useContext(store);

  return (
    <div className="expenses-main">
      <h3>Expenses</h3>
      <Input
        type="search"
        placeholder="Type to search ..."
        style={{ marginTop: "-30px", width: "100%" }}
      />
      <div>
        {addBudget.map((item, i) => (
          <Expense key={i} title={item.title} expense={item.expense} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
