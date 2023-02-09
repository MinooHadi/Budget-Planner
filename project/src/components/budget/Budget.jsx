import Button from "../button/Button";
import "./../../assets/styles/budget.css";

function Budget() {
    return(
        <div className="budget-main">
            <div className="budget-desc">
                <p>Budget: <span>$2000</span></p> 
            </div>
            <Button text="Edit"/>
        </div>
    )
}

export default Budget