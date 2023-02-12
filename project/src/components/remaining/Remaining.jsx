import { useContext } from "react";
import { store } from "../context/Context";
import "./../../assets/styles/remaining.css";

function Remaining() {
  const { state } = useContext(store);

  return (
    <div className="remaining-main">
      <p>
        Remaining: $<span> {state.remaining} </span>
      </p>
    </div>
  );
}

export default Remaining;
