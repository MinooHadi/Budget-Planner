import { useContext } from "react";
import { store } from "../context/Context";
import "./../../assets/styles/spentSoFar.css";

function SpentSoFar() {
  const { spent, setSpent } = useContext(store);

  return (
    <div className="spentSoFar-main">
      <p>
        Spent so far: $<span> {spent} </span>
      </p>
    </div>
  );
}

export default SpentSoFar;
