import Budget from "../budget/Budget";
import Remaining from "../remaining/Remaining";
import SpentSoFar from "../spentSoFar/SpentSoFar";

function Header() {
  return (
    <>
      <h1>My Budget Planner</h1>
      <div>
        <Budget />
        <Remaining />
        <SpentSoFar />
      </div>
    </>
  );
}

export default Header;
