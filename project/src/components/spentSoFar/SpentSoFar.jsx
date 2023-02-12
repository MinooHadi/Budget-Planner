import { useContext } from "react";
import { store } from "../context/Context";
import "./../../assets/styles/spentSoFar.css";

function SpentSoFar() {
  const { state } = useContext(store);

  return (
    <div className="spentSoFar-main">
      <p>
        Spent so far: $<span> {state.spent} </span>
      </p>
    </div>
  );
}

export default SpentSoFar;
