import { useContext } from "react";
import { store } from "../context/Context";
import styled from "styled-components";

//! styled component ........................................................................................................................
const RemainingMain = styled.div`
  background-color: rgb(127, 213, 127);
  width: 30%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

//? Remaining component ........................................................................................................................
function Remaining() {
  const { state } = useContext(store);

  return (
    <RemainingMain className="remaining-main">
      <p>
        Remaining: $<span> {state.remaining} </span>
      </p>
    </RemainingMain>
  );
}

export default Remaining;
