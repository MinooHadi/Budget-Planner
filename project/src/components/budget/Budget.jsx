import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { store } from "../context/Context";

//! styled component ........................................................................................................................
const BudgetMain = styled.div`
  background-color: plum;
  width: 30%;
  display: flex;
  height: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

const BudgetDesc = styled.div`
  display: flex;
  align-items: center;
`;

const Span = styled.span`
  padding: 5px;
`;

//? Budget component ........................................................................................................................
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
    <BudgetMain className="budget-main">
      <BudgetDesc className="budget-desc">
        <p>Budget: $</p>
        {state.editBudget ? (
          <Span ref={expense} contentEditable>
            {state.budget}
          </Span>
        ) : (
          <Span ref={expense}> {state.budget} </Span>
        )}
      </BudgetDesc>
      {state.editBudget ? (
        <Button text="Save" onClick={saveBudgetBtn} />
      ) : (
        <Button text="Edit" onClick={editBudgetBtn} />
      )}
    </BudgetMain>
  );
}

export default Budget;
