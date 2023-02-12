import React, { useContext } from "react";
import ReactDOM from "react-dom";
import Button from "../button/Button";
import { store } from "../context/Context";
import styled from "styled-components";

//! styled component ........................................................................................................................
const ModalMain = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  box-shadow: 0px 10px 10px gray;
`;

const ModalBtnDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

//? Modal component ........................................................................................................................
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
      <ModalMain className="modal-main">
        <p>
          {" "}
          Are you sure to delete <b>{state.deleting.title}</b> ?
        </p>
        <ModalBtnDiv className="modal-btn-div">
          <Button text="Yes" onClick={() => deleteItem(state.deleting.id)} />
          <Button
            text="No"
            onClick={() =>
              dispatch({ type: "CANCEL-MODAL", payload: undefined })
            }
          />
        </ModalBtnDiv>
      </ModalMain>
    </>,
    document.getElementById("modal-root")
  );
}

export default Modal;
