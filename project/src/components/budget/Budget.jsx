import { useContext, useEffect, useRef } from "react";
import Button from "../button/Button";
import { store } from "../context/Context";
import "./../../assets/styles/budget.css";

function Budget() {
  const { state, dispatch } = useContext(store);

  const expense = useRef(null);

  function editBudgetBtn() {
    dispatch({
      type: "EDIT-BUDGET",
      payload: true,
    });
  }

  useEffect(() => {
    expense.current.focus();
  }, [state.editBudget]);

  function saveBudgetBtn() {
    dispatch({
      type: "SAVE-BUDGET",
      payload: {
        editBudget: false,
        budget: +expense.current.innerText,
      },
    });
  }

  return (
    <div className="budget-main">
      <div className="budget-desc">
        <p>Budget: $</p>
        {state.editBudget ? (
          <span ref={expense} contentEditable>
            {state.budget}
          </span>
        ) : (
          <span ref={expense}> {state.budget} </span>
        )}
      </div>
      {state.editBudget ? (
        <Button text="Save" onClick={saveBudgetBtn} />
      ) : (
        <Button text="Edit" onClick={editBudgetBtn} />
      )}
    </div>
  );
}

export default Budget;
