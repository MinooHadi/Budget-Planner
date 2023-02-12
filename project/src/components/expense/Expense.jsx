import { useContext } from "react";
import { store } from "../context/Context";
import styled from "styled-components";

//! styled component ........................................................................................................................
const ExpenseMain = styled.div`
  display: flex;
  background-color: white;
  justify-content: space-between;
  padding: 0 20px;
  border: 1px solid rgb(195, 182, 182);
  font-size: 18px;
  height: 40px;
  align-items: center;
  margin-bottom: 10px;
`;

const ExpenseDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ExpenseBox = styled.div`
  background-color: blue;
  color: white;
  padding: 3px 8px;
  font-size: 13px;
  border-radius: 15px;
`;

//? Expense component ........................................................................................................................
function Expense(props) {
  const { dispatch } = useContext(store);

  function showDeleteModal() {
    dispatch({
      type: "DELETING",
      payload: {
        id: props.id,
        title: props.title,
      },
    });
  }

  return (
    <ExpenseMain className="expense-main">
      <p>{props.title}</p>
      <ExpenseDiv className="expense-div">
        <ExpenseBox className="expense-box">
          {" "}
          <span>$</span>
          {props.expense}{" "}
        </ExpenseBox>
        <iconify-icon
          icon="mingcute:close-circle-fill"
          onClick={showDeleteModal}
        ></iconify-icon>
      </ExpenseDiv>
    </ExpenseMain>
  );
}

export default Expense;
