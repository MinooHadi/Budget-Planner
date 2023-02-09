import Button from "../button/Button"
import Input from "../input/Input"

function ExpenseInput() {
    return(
        <>
            <h2>Add Expense</h2>
            <div>
                <Input type="text" lable="Name"/>
                <Input type="number" lable="Cost"/>
            </div>
            <Button text="Save" />
        </>
    )
}

export default ExpenseInput