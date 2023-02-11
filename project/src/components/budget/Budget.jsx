import { useContext, useEffect, useRef } from "react";
import Button from "../button/Button";
import { store } from "../context/Context";
import "./../../assets/styles/budget.css";

function Budget() {
  const { editBudget, setEditBudget, budget, setBudget } = useContext(store);

  const expense = useRef(null);

  function editBudgetBtn() {
    setEditBudget(true);
  }

  useEffect(() => {
    expense.current.focus();
  }, [editBudget]);

  function saveBudgetBtn() {
    setEditBudget(false);
    setBudget(expense.current.innerText);
  }

  return (
    <div className="budget-main">
      <div className="budget-desc">
        <p>Budget: $</p>
        {editBudget ? (
          <span ref={expense} contentEditable>
            {budget}
          </span>
        ) : (
          <span ref={expense}> {budget} </span>
        )}
      </div>
      {editBudget ? (
        <Button text="Save" onClick={saveBudgetBtn} />
      ) : (
        <Button text="Edit" onClick={editBudgetBtn} />
      )}
    </div>
  );
}

export default Budget;
