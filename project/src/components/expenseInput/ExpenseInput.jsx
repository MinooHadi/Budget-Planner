import Button from "../button/Button"
import Input from "../input/Input"
import "./../../assets/styles/expenseInput.css"

function ExpenseInput() {
    return(
        <div className="expenseInput-main">
            <h3>Add Expense</h3>
            <div className="expenseInput-desc">
                <Input type="text" lable="Name"/><br />
                <Input type="number" lable="Cost"/>
            </div>
            <Button text="Save" />
        </div>
    )
}

export default ExpenseInput