import { useContext } from "react";
import { store } from "../context/Context";
import "./../../assets/styles/expense.css";

function Expense(props) {
  const { dispatch } = useContext(store);

  function showDeleteModal() {
    dispatch({
      type: "DELETING",
      payload: props.id,
    });
  }

  return (
    <div className="expense-main">
      <p>{props.title}</p>
      <div className="expense-div">
        <div className="expense-box">
          {" "}
          <span>$</span>
          {props.expense}{" "}
        </div>
        <iconify-icon
          icon="mingcute:close-circle-fill"
          onClick={showDeleteModal}
        ></iconify-icon>
      </div>
    </div>
  );
}

export default Expense;
