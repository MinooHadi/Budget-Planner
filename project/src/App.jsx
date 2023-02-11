import "./App.css";
import ContextProvider from "./components/context/Context";
import ExpenseInput from "./components/expenseInput/ExpenseInput";
import Expenses from "./components/expenses/Expenses";
import Header from "./components/header/Header";

function App() {

  return (
    <ContextProvider>
      <div className="App">
        <Header />
        <Expenses />
        <ExpenseInput />
      </div>
    </ContextProvider>
  );
}

export default App;
