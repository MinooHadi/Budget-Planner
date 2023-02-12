import { useContext, useEffect, useRef } from "react";
import Button from "../button/Button";
import { store } from "../context/Context";
import Input from "../input/Input";
import "./../../assets/styles/expenseInput.css";

function ExpenseInput() {
  const { state, dispatch } = useContext(store);

  const name = useRef(null);
  const cost = useRef(null);

  function addNewBuget() {
    if (cost.current.value > state.remaining) {
      alert("Your budget is not enough!!");
      return;
    }

    let newExpense = {
      title: name.current.value,
      expense: cost.current.value,
    };

    dispatch({
      type: "addExpense",
      payload: {
        newExpense: newExpense,
        newSpent: +cost.current.value,
      },
    });
  }

  useEffect(() => {
    name.current.value = "";
    cost.current.value = "";
  }, [state.spent]);

  return (
    <div className="expenseInput-main">
      <h3>Add Expense</h3>
      <div className="expenseInput-desc">
        <Input type="text" lable="Name" myRef={name} />
        <br />
        <Input type="number" lable="Cost" myRef={cost} />
      </div>
      <Button text="Save" onClick={addNewBuget} />
    </div>
  );
}

export default ExpenseInput;
