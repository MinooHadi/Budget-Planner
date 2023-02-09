import Budget from "../budget/Budget";
import Remaining from "../remaining/Remaining";
import SpentSoFar from "../spentSoFar/SpentSoFar";
import "./../../assets/styles/header.css"

function Header() {
  return (
    <div className="header-main" >
      <h1>My Budget Planner</h1>
      <div className="header-desc">
        <Budget />
        <Remaining />
        <SpentSoFar />
      </div>
    </div>
  );
}

export default Header;
