import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../button/Button";
import { store } from "../context/Context";
import "./../../assets/styles/modal.css";

function Modal() {
  const { state, dispatch } = useContext(store);

  function deleteItem(id) {
    let deletingItem = state.addExpense.splice(id, 1);
    dispatch({
      type: "ITEM-DELETED",
      payload: {
        addExpense: [...state.addExpense],
        deleting: undefined,
        spent: state.spent - +deletingItem[0].expense,
        remaining: state.remaining + +deletingItem[0].expense,
      },
    });
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal-main">
        <p>
          {" "}
          Are you sure to delete <b>{state.deleting.title}</b> ?
        </p>
        <div className="modal-btn-div">
          <Button text="Yes" onClick={() => deleteItem(state.deleting.id)} />
          <Button
            text="No"
            onClick={() =>
              dispatch({ type: "CANCEL-MODAL", payload: undefined })
            }
          />
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
