import "./../../assets/styles/expense.css"

function Expense(props) {
    return(
        <div className="expense-main">
            <p>{props.title}</p>
            <div className="expense-div">
                <div className="expense-box"> {props.expense} </div>
                <iconify-icon icon="mingcute:close-circle-fill"></iconify-icon>
            </div>
        </div>
    )
}

export default Expense