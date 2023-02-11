import { useContext } from "react";
import { store } from "../context/Context";
import "./../../assets/styles/remaining.css";

function Remaining() {
  const { remaining, setRemaining } = useContext(store);

  return (
    <div className="remaining-main">
      <p>
        Remaining: $<span> {remaining} </span>
      </p>
    </div>
  );
}

export default Remaining;
