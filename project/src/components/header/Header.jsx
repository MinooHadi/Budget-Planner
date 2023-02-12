import styled from "styled-components";
import Budget from "../budget/Budget";
import Remaining from "../remaining/Remaining";
import SpentSoFar from "../spentSoFar/SpentSoFar";

//! styled component ........................................................................................................................
const HeaderMain = styled.div`
  padding: 10px 20px;
`;

const HeaderDesc = styled.div`
  display: flex;
  justify-content: space-between;
`;

//? Header component ........................................................................................................................
function Header() {
  return (
    <HeaderMain className="header-main">
      <h1>My Budget Planner</h1>
      <HeaderDesc className="header-desc">
        <Budget />
        <Remaining />
        <SpentSoFar />
      </HeaderDesc>
    </HeaderMain>
  );
}

export default Header;
