import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../button/Button";
import { store } from "../context/Context";
import "./../../assets/styles/modal.css";

function Modal() {
  const { deleting, setDeleting, addBudget, setAddBudget } = useContext(store);

  function deleteItem(id) {
    addBudget.splice(id, 1);
    setAddBudget([...addBudget]);
    setDeleting(undefined)
  }

  return ReactDOM.createPortal(
    <>
      <div className="modal-main">
        <p> Are you sure to delete this item?</p>
        <div className="modal-btn-div">
          <Button text="Yes" onClick={() => deleteItem(deleting)} />
          <Button text="No" onClick={() => setDeleting(undefined)} />
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
