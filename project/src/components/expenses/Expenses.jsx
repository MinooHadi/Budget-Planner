import Expense from "../expense/Expense";
import Input from "../input/Input";
import "./../../assets/styles/expenses.css"

function Expenses() {
  return (
    <div className="expenses-main">
      <h3>Expenses</h3>
      <Input type="search" placeholder="Type to search ..." style={{marginTop: "-30px", width: "100%"}} />
      <div>
        <Expense title="minoo" expense="$5000" />
        <Expense title="minoo" expense="$5000" />
      </div>
    </div>
  );
}

export default Expenses
