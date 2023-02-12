import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import Button from "../button/Button";
import { store } from "../context/Context";
import Input from "../input/Input";

//! styled component ........................................................................................................................
const ExpenseInputMain = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px 20px 20px;
  gap: 10px;
`;

const ExpenseInputDesc = styled.div`
  display: flex;
  gap: 20px;
`;

//? ExpenseInput component ......................................................................................................................
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
    <ExpenseInputMain className="expenseInput-main">
      <h3>Add Expense</h3>
      <ExpenseInputDesc className="expenseInput-desc">
        <Input type="text" lable="Name" myRef={name} />
        <br />
        <Input type="number" lable="Cost" myRef={cost} />
      </ExpenseInputDesc>
      <Button text="Save" onClick={addNewBuget} />
    </ExpenseInputMain>
  );
}

export default ExpenseInput;
