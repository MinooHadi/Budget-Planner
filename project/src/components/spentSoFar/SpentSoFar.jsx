import { useContext } from "react";
import { store } from "../context/Context";
import styled from "styled-components";

//! styled component ........................................................................................................................
const SpentSoFarMain = styled.div`
  background-color: rgb(141, 141, 223);
  width: 30%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 0 10px;
  border-radius: 5px;
`;

//? SpentSoFar component ........................................................................................................................
function SpentSoFar() {
  const { state } = useContext(store);

  return (
    <SpentSoFarMain className="spentSoFar-main">
      <p>
        Spent so far: $<span> {state.spent} </span>
      </p>
    </SpentSoFarMain>
  );
}

export default SpentSoFar;
