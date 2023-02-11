import { useContext, useEffect, useRef } from "react"
import Button from "../button/Button"
import { store } from "../context/Context"
import Input from "../input/Input"
import "./../../assets/styles/expenseInput.css"

function ExpenseInput() {
    const {addBudget, setAddBudget, budget, setBudget, remaining, setRemaining, spent, setSpent} = useContext(store)

    const name = useRef(null)
    const cost = useRef(null)


    function addNewBuget() {
        let newExpense = {
            title: name.current.value,
            expense: cost.current.value,
        }

        setAddBudget([...addBudget, newExpense]);
        setSpent((prevState) => prevState + +cost.current.value);
    }

    useEffect(() => {
        setRemaining(+budget - +spent);
    }, [spent])

    return(
        <div className="expenseInput-main">
            <h3>Add Expense</h3>
            <div className="expenseInput-desc">
                <Input type="text" lable="Name" myRef={name} /><br />
                <Input type="number" lable="Cost" myRef={cost} />
            </div>
            <Button text="Save" onClick={addNewBuget} />
        </div>
    )
}

export default ExpenseInput