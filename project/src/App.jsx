import { useContext } from "react";
import "./App.css";
import { store } from "./components/context/Context";
import ExpenseInput from "./components/expenseInput/ExpenseInput";
import Expenses from "./components/expenses/Expenses";
import Header from "./components/header/Header";
import Modal from "./components/modal/Modal";

function App() {
  const { state } = useContext(store);

  return (
    <div
      className="App"
      style={state.deleting !== undefined ? { filter: "blur(5px)" } : null}
    >
      <Header />
      <Expenses />
      <ExpenseInput />
      {state.deleting !== undefined && <Modal />}
    </div>
  );
}

export default App;
